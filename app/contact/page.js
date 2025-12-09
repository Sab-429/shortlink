"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/Contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-300 from-indigo-100 via-purple-100 to-pink-100">
      <main className="flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-gray-600">{status}</p>
            )}
          </form>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        © {new Date().getFullYear()} shortLinks
      </footer>
    </div>
  );
}
