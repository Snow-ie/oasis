// src/components/AnytimeSection.tsx
import Link from "next/link";
import { FC } from "react";

const AnytimeSection: FC = () => (
  <section className="bg-primary text-white py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Anytime. Anywhere.
      </h2>
      <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        See everything the team is working on in one place
      </p>
      <Link
        href="/auth"
        className="inline-block mt-8 bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
      >
        Get started
      </Link>
    </div>
  </section>
);

export default AnytimeSection;
