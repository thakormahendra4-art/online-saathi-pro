import type { FormEvent } from "react";
import { Send } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-[#dce1ee] bg-white px-4 py-3 text-sm text-[#11182d] placeholder:text-[#98a2b3] outline-none transition-all duration-200 focus:border-[#13a5df] focus:ring-2 focus:ring-[#13a5df]/20";

const ContactForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="rounded-2xl border border-[#e0e5ee] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-[#11182d] sm:text-3xl">
        Get in touch
      </h2>

      <p className="mt-3 text-sm leading-6 text-[#475467]">
        Join membership and connect with us — we&apos;ll get back to you soon.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-semibold text-[#11182d]"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Type your name here"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-semibold text-[#11182d]"
          >
            Email id
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="Type your email id here"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="mb-2 block text-sm font-semibold text-[#11182d]"
          >
            Phone number
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="Type your phone number here"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-semibold text-[#11182d]"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Write your message here"
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#13a5df] px-6 text-[15px] font-semibold text-white shadow-[0_7px_16px_rgba(19,165,223,0.2)] transition hover:bg-[#0796d0] sm:w-auto sm:px-10"
        >
          Submit
          <Send
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;