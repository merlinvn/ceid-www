// components/Contact.tsx
import { RefObject, useState, useEffect } from "react";

interface ContactProps {
  contactRef: RefObject<HTMLDivElement | null>;
}

export default function Contact({ contactRef }: ContactProps) {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: 0 });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Generate captcha on mount (client only)
  useEffect(() => {
    resetCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ a, b, answer: a + b });
    setCaptchaInput("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    if (parseInt(captchaInput) !== captcha.answer) {
      setError("Captcha answer is incorrect.");
      resetCaptcha();
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Your message has been sent!");
        setName("");
        setEmail("");
        setMessage("");
        resetCaptcha();
      } else {
        setError(data.message || "Failed to send message.");
        resetCaptcha();
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      resetCaptcha();
    }
    setSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="bg-[#f0f5f7] text-slate-900 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900"
                placeholder="Your message here..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                disabled={submitting}
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="captcha"
                className="block text-sm font-medium mb-1 text-slate-700"
              >
                What is {captcha.a} + {captcha.b}?
              </label>
              <input
                id="captcha"
                type="text"
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-900"
                placeholder="Enter answer"
                value={captchaInput}
                onChange={e => setCaptchaInput(e.target.value)}
                disabled={submitting}
                autoComplete="off"
              />
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            {success && <div className="text-green-600 text-sm">{success}</div>}
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
