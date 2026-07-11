export const courses = [
  {
    id: "dispenser",
    title: "Dispenser",
    duration: "2 Years",
    description:
      "Train to accurately prepare and dispense medications under pharmacist supervision. Learn pharmaceutical calculations, drug interactions, inventory management, and patient counseling essentials.",
    image: "/images/course-dispenser.jpg",
    alt: "Pharmacy dispenser preparing medications in a clinical setting",
    highlights: [
      "Pharmaceutical calculations",
      "Drug dispensing",
      "Inventory management",
      "Patient counseling",
    ],
  },
  {
    id: "lab-technician",
    title: "Lab Technician",
    duration: "2 Years",
    description:
      "Master clinical laboratory techniques including hematology, microbiology, biochemistry, and sample analysis. Gain hands-on experience with modern diagnostic equipment.",
    image: "/images/course-lab-technician.jpg",
    alt: "Medical laboratory technician analyzing samples with microscope",
    highlights: [
      "Hematology & biochemistry",
      "Microbiology",
      "Sample collection",
      "Quality control",
    ],
  },
  {
    id: "radiography",
    title: "Radiography & Imaging",
    duration: "2 Years",
    description:
      "Learn diagnostic imaging techniques including X-ray, CT, and ultrasound fundamentals. Develop skills in patient positioning, radiation safety, and image quality assessment.",
    image: "/images/course-radiography.jpg",
    alt: "Radiography technician operating medical imaging equipment",
    highlights: [
      "X-ray imaging",
      "Radiation safety",
      "Patient positioning",
      "Image interpretation",
    ],
  },
  {
    id: "ot-technology",
    title: "OT Technology",
    duration: "2 Years",
    description:
      "Prepare for operating theatre support roles. Study sterile techniques, surgical instrument handling, anesthesia assistance, and perioperative patient care protocols.",
    image: "/images/course-ot-technology.jpg",
    alt: "Operating theatre with surgical team and medical equipment",
    highlights: [
      "Sterile techniques",
      "Surgical instruments",
      "Anesthesia support",
      "Perioperative care",
    ],
  },
];

export const courseOptions = courses.map((c) => c.title);

export const features = [
  {
    icon: "🏛️",
    title: "PMF Recognized",
    description:
      "Programs aligned with Pakistan Medical Faculty standards and Allied Health Professional Council requirements.",
  },
  {
    icon: "🔬",
    title: "Modern Labs",
    description:
      "State-of-the-art laboratory and clinical simulation facilities for hands-on practical training.",
  },
  {
    icon: "👨‍⚕️",
    title: "Expert Faculty",
    description:
      "Learn from experienced healthcare professionals dedicated to shaping the next generation of allied health workers.",
  },
  {
    icon: "💼",
    title: "Career Ready",
    description:
      "Graduates are prepared for immediate employment in hospitals, clinics, pharmacies, and diagnostic centers.",
  },
];

export const contactInfo = {
  address: "Al-Farabi College of Allied Health Sciences, Faisalabad, Pakistan",
  phone: "+92 300 0000000",
  email: "info@alfarabicollege.edu.pk",
  hours: "Mon – Sat: 9:00 AM – 5:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.801222065256!2d73.03871966949565!3d31.402805843058946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392243003f6714ab%3A0xdca8a1bf51cdb24a!2sAl%20Farabi%20Collage%20of%20Allied%20Health%20Sciences!5e1!3m2!1sen!2sus!4v1783776996084!5m2!1sen!2sus",
};
