"use client";

import Image from "next/image";
import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

export default function FeatureSection() {
  return (
    <section className="pt-[300px] px-4">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          The Ultimate Solution
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2">
            <Image
              src="/assets/circle.svg"
              alt=""
              width={600}
              height={600}
              priority
              className="absolute -top-12 -left-36 pointer-events-none select-none"
            />
            <div className="z-10 relative ">
              <Image
                src="/assets/dashboard2.svg"
                alt="Dashboard Preview"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-10 mb-5">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
