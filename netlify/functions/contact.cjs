const nodemailer = require('nodemailer')

const COLLEGE_NAME = 'Al-Farabi College of Allied Health Sciences'
const COLLEGE_COLOR = '#0d9488'
const ACCENT_COLOR = '#e8910a'

const jsonHeaders = {
  'Content-Type': 'application/json',
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function adminEmailHtml({ name, email, phone, course, message }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#f4f7f7;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(13,148,136,0.12);">
          <tr>
            <td style="background:${COLLEGE_COLOR};padding:28px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${COLLEGE_NAME}</h1>
              <p style="margin:8px 0 0;color:#d5f0ed;font-size:14px;">New Contact Form Submission</p>
              <p style="margin:8px 0 0;color:#d5f0ed;font-size:13px;">Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 20px;color:#374151;font-size:15px;line-height:1.6;">
                You have received a new inquiry from the website contact form:
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
                <tr style="background:#f9fafb;">
                  <td style="padding:12px 16px;font-weight:600;color:#374151;width:140px;border-bottom:1px solid #e5e7eb;">Name</td>
                  <td style="padding:12px 16px;color:#111827;border-bottom:1px solid #e5e7eb;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Email</td>
                  <td style="padding:12px 16px;color:#111827;border-bottom:1px solid #e5e7eb;">
                    <a href="mailto:${email}" style="color:${COLLEGE_COLOR};">${email}</a>
                  </td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="padding:12px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Phone</td>
                  <td style="padding:12px 16px;color:#111827;border-bottom:1px solid #e5e7eb;">
                    <a href="tel:${phone}" style="color:${COLLEGE_COLOR};text-decoration:none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">Course</td>
                  <td style="padding:12px 16px;color:#111827;border-bottom:1px solid #e5e7eb;">${course}</td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="padding:12px 16px;font-weight:600;color:#374151;vertical-align:top;">Message</td>
                  <td style="padding:12px 16px;color:#111827;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td>
                </tr>
              </table>
              <p style="margin:24px 0 0;color:#6b7280;font-size:13px;">
                Reply directly to <a href="mailto:${email}" style="color:${COLLEGE_COLOR};">${email}</a> to respond to this inquiry.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">This email was sent from the ${COLLEGE_NAME} website contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function clientEmailHtml({ name, email, phone, course, message }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin:0;padding:0;background:#f4f7f7;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(13,148,136,0.12);">
          <tr>
            <td style="background:${COLLEGE_COLOR};padding:28px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${COLLEGE_NAME}</h1>
              <p style="margin:8px 0 0;color:#d5f0ed;font-size:14px;">Allied Health Sciences</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <h2 style="margin:0 0 16px;color:#111827;font-size:20px;">Thank You, ${name}!</h2>
              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                We have received your inquiry regarding <strong style="color:${COLLEGE_COLOR};">${course}</strong>.
                Our admissions team will review your message and get back to you shortly.
              </p>
              <div style="background:#eef9f8;border-left:4px solid ${ACCENT_COLOR};padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;">
                <p style="margin:0 0 8px;color:#1e5d58;font-weight:600;font-size:14px;">Your Submission Details</p>
                <table width="100%" cellpadding="6" cellspacing="0">
                  <tr>
                    <td style="color:#666666;font-size:14px;font-weight:600;width:90px;">Email:</td>
                    <td style="color:#333333;font-size:14px;">${email}</td>
                  </tr>
                  <tr>
                    <td style="color:#666666;font-size:14px;font-weight:600;">Phone:</td>
                    <td style="color:#333333;font-size:14px;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="color:#666666;font-size:14px;font-weight:600;vertical-align:top;">Message:</td>
                    <td style="color:#333333;font-size:14px;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td>
                  </tr>
                </table>
              </div>
              <div style="background:#eef9f8;border-left:4px solid ${ACCENT_COLOR};padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0;">
                <p style="margin:0 0 8px;color:#1e5d58;font-weight:600;font-size:14px;">What's Next?</p>
                <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8;">
                  <li>Our team typically responds within 1–2 business days</li>
                  <li>Keep an eye on your inbox (and spam folder) for our reply</li>
                  <li>Visit our admissions page for fee discount details</li>
                </ul>
              </div>
              <p style="margin:0;color:#374151;font-size:15px;line-height:1.7;">
                We look forward to helping you begin your journey in allied health sciences.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafb;padding:20px 32px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0 0 4px;color:#6b7280;font-size:13px;font-weight:600;">${COLLEGE_NAME}</p>
              <p style="margin:0;color:#9ca3af;font-size:12px;">PMF & Allied Health Professional Council Recognized</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: jsonHeaders,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ msg: 'Invalid request body', error: 'Invalid request body' }),
    }
  }

  const { name, email, phone, course, message } = body

  if (!name || !email || !phone || !course || !message) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ msg: 'Please provide all required fields', error: 'All fields are required' }),
    }
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return {
      statusCode: 500,
      headers: jsonHeaders,
      body: JSON.stringify({
        msg: 'fail',
        error: 'Email service is not configured. Please contact the administrator.',
      }),
    }
  }

  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER

  const safeName = escapeHtml(name).trim()
  const safeEmail = email.trim()
  const safePhone = escapeHtml(phone).trim()
  const safeCourse = escapeHtml(course).trim()
  const safeMessage = escapeHtml(message).trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(safeEmail)) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ msg: 'Invalid email address', error: 'Invalid email address' }),
    }
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const safeData = {
    name: safeName,
    email: safeEmail,
    phone: safePhone,
    course: safeCourse,
    message: safeMessage,
  }

  const clientMailOptions = {
    from: `"${COLLEGE_NAME}" <${process.env.EMAIL_USER}>`,
    to: safeEmail,
    subject: `Thank you for contacting ${COLLEGE_NAME}`,
    html: clientEmailHtml(safeData),
  }

  const adminMailOptions = {
    from: `"${COLLEGE_NAME} Contact Form" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    replyTo: safeEmail,
    subject: `New Inquiry: ${safeCourse} — ${safeName}`,
    html: adminEmailHtml(safeData),
  }

  try {
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions),
    ])

    return {
      statusCode: 200,
      headers: jsonHeaders,
      body: JSON.stringify({ msg: 'success', success: true, message: 'Emails sent successfully' }),
    }
  } catch (error) {
    console.error('Email send error:', error)
    return {
      statusCode: 500,
      headers: jsonHeaders,
      body: JSON.stringify({
        msg: 'fail',
        error: error.message || 'Failed to send email. Please try again later.',
      }),
    }
  }
}
