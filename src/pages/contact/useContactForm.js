import { useState } from "react";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function useContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const res = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Something went wrong");

      setStatus({ type: "success", msg: "Message sent successfully ✅" });
      setForm(initialForm);
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "Failed to send ❌" });
    } finally {
      setLoading(false);
    }
  };

  return { form, status, loading, onChange, onSubmit };
}