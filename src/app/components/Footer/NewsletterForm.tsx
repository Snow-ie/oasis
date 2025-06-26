"use client";

import { useState, FC, FormEvent } from "react";

const NewsletterBlock: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: connect to your mailing-list service
    console.log("subscribe", email);
    setEmail("");
  };

  return (
    <section className=" text-white px-6 py-10 sm:px-10 sm:py-12  overflow-hidden">
      <div className="relative z-10 max-w-md">
        <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
          Get&nbsp;In&nbsp;Touch
        </h3>
        <span className="block w-10 h-1 bg-primary mt-1 mb-4 rounded-full" />

        <p className="mb-6 text-sm sm:text-base text-white/90 leading-relaxed">
          Join our mailing list to stay up to date and get notices about our new
          releases!
        </p>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="email"
            required
            placeholder="info@oasismgt.net"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              flex-1 
              px-2 py-3 text-sm 
              bg-white text-gray-900 placeholder-gray-400
              rounded-md 
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
            "
          />

          <button
            type="submit"
            className="
             px-4 py-3
              bg-primary hover:bg-primary-dark
              text-white  
              rounded-md 
              transition
            "
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBlock;
