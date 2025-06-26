"use client";
import { FC, useState } from "react";

const NewsletterForm: FC = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up to your mailing‐list API
    console.log("subscribe", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        placeholder="info@oasismgmt.net"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full sm:max-w-xs px-4 py-2 rounded-md text-gray-900 focus:outline-none"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
      >
        Send
      </button>
    </form>
  );
};

export default NewsletterForm;
