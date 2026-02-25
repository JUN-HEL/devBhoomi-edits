// src/data/contact-details.js

export const contact = {
  phone: "918588064988", // WhatsApp number (no +)
  email: "info@yourdomain.com",
  instagram: "https://instagram.com/yourhandle",
  facebook: "https://facebook.com/yourpage",
};

export const channels = [
  {
    name: "WhatsApp",
    desc: "Fastest reply",
    icon: "/icons/whatsApp.png",
    href: `https://wa.me/${contact.phone}?text=${encodeURIComponent(
      "Hi DevBoomi Team, I want to know more about your services."
    )}`,
    className: "is-whatsapp",
  },
  {
    name: "Instagram",
    desc: "DM us",
    icon: "/icons/instagram.png",
    href: contact.instagram,
    className: "is-instagram",
  },
  {
    name: "Email",
    desc: "Detailed inquiry",
    icon: "/icons/mail.png",
    href: `mailto:${contact.email}?subject=${encodeURIComponent(
      "Project Inquiry"
    )}&body=${encodeURIComponent("Hi DevBoomi Team,%0A%0AI want to discuss a project.")}`,
    className: "is-email",
  },
  {
    name: "Facebook",
    desc: "Message us",
    icon: "/icons/facebook.png",
    href: contact.facebook,
    className: "is-facebook",
  },
];