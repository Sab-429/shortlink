"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/Contact", {
      headers: {
        "x-admin-secret": "myadmin123",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setMessages(data))
      .catch(() => setError("Access denied ❌"));
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h2 className="font-semibold text-lg">{msg.name}</h2>
            <p className="text-sm text-gray-500">{msg.email}</p>
            <p className="mt-3">{msg.message}</p>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(msg.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
