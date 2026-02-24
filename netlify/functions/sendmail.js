import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
    }

    const { name, email, subject, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
    }

    // ✅ Configure SMTP (Gmail / Zoho / SendGrid SMTP / etc.)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      replyTo: email, // ✅ so you can reply directly to user
      subject: subject ? `Contact: ${subject}` : "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "-"}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || "-"}</p>
        <p><b>Message:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || "Server error" }) };
  }
};