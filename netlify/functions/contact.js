const nodemailer = require('nodemailer')

const COLLEGE_NAME = 'Al-Farabi College of Allied Health Sciences'
const COLLEGE_COLOR = '#0d9488'
const ACCENT_COLOR = '#e8910a'

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
                  <td style="padding:12px 16px;color:#111827;border-bottom:1px solid #e5e7eb;">${phone}</td>
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

function clientEmailHtml({ name, course }) {
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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  const { EMAIL_USER, EMAIL_PASS, ADMIN_EMAIL } = process.env

  if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
    console.error('Missing email environment variables')
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Email service is not configured. Please contact the administrator.' }),
    }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid request body' }),
    }
  }

  const name = escapeHtml(body.name || '').trim()
  const email = (body.email || '').trim()
  const phone = escapeHtml(body.phone || '').trim()
  const course = escapeHtml(body.course || '').trim()
  const message = escapeHtml(body.message || '').trim()

  if (!name || !email || !phone || !course || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'All fields are required' }),
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid email address' }),
    }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  const safeData = { name, email, phone, course, message }

  try {
    await transporter.sendMail({
      from: `"${COLLEGE_NAME}" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New Inquiry: ${course} — ${name}`,
      html: adminEmailHtml(safeData),
    })

    await transporter.sendMail({
      from: `"${COLLEGE_NAME}" <${EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting ${COLLEGE_NAME}`,
      html: clientEmailHtml({ name, course }),
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Emails sent successfully' }),
    }
  } catch (err) {
    console.error('Email send error:', err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
    }
  }
}
