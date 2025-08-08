import React, { useRef } from "react";
import { send } from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the following IDs with your EmailJS service/template/user IDs
    send(
      "service_id",
      "template_id",
      {
        from_name: form.current["name"].value,
        from_email: form.current["email"].value,
        message: form.current["message"].value,
      },
      "user_public_key"
    )
      .then(() => alert("Message sent — thank you!"))
      .catch(() =>
        alert("Failed to send — please email directly at ks3847758@gmail.com")
      );
  };

  return (
    <section
      id="contact"
      className="mt-24 p-6 rounded-2xl bg-white/4 border border-white/6"
    >
      <div className="md:flex md:justify-between md:items-start gap-6">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-300">
            Open to internships, SEP roles, and collaborations.
          </p>

          <div className="mt-4 text-sm text-slate-200">
            <p>
              <strong>Email:</strong> ks3847758@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9012464667
            </p>
          </div>
        </div>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="mt-6 md:mt-0 md:w-1/2 grid gap-3"
        >
          <input
            name="name"
            placeholder="Your name"
            className="px-3 py-2 rounded bg-white/5"
            required
          />
          <input
            name="email"
            placeholder="Email"
            className="px-3 py-2 rounded bg-white/5"
            required
            type="email"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="px-3 py-2 rounded bg-white/5"
            required
          />
          <button type="submit" className="px-4 py-2 bg-indigo-600 rounded">
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
