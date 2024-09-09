// components/Contact.tsx
import { RefObject } from "react";

interface ContactProps {
  contactRef: RefObject<HTMLDivElement>;
}

export default function Contact({ contactRef }: ContactProps) {
  return (
    <section
      id="contact"
      ref={contactRef}
      className="bg-[#f0f5f7] text-slate-900 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
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
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
