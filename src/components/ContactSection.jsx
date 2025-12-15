import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#e9faf6]">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-xl mx-auto p-8 rounded-xl shadow"
      >
        <input name="name" placeholder="Name*" required className="input" />
        <input name="phone" placeholder="Number*" required className="input" />
        <input name="email" type="email" placeholder="Email*" required className="input" />
        <textarea name="message" placeholder="Message" className="input" />

        <button
          disabled={loading}
          className="w-full bg-[#0b6b57] text-white py-3 rounded-lg"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {status === "SUCCESS" && (
          <p className="text-green-600 mt-3">✅ Message sent successfully</p>
        )}
        {status === "ERROR" && (
          <p className="text-red-600 mt-3">❌ Failed. Try again.</p>
        )}
      </form>
    </section>
  );
}
