"use client";

import Image from "next/image";
import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

export default function FeatureSection() {
  return (
    <section className="pt-[300px] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          The Ultimate Solution
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/dashboard.svg"
              alt="Dashboard Preview"
              width={800}
              height={600}
              className=""
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-10">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
