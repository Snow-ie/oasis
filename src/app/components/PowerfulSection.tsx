import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const PowerfulSection: FC = () => (
  <section className="bg-indigo-50 py-16 md:py-20 lg:py-24 overflow-visible">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">
        {/* LEFT: heading, text, CTA, arrow */}
        <div className="relative mx-auto md:mx-0 space-y-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h2
            className="
              font-bold text-primary leading-tight
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl
            "
          >
            Powerful Task
            <br />
            Management Tool
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Et cursus sed in tincidunt
            curabitur justo egestas ultricies sed. Aliquam tellus nulla rutrum
            ultrices quis. A sed id purus tristique ultricies sit.
          </p>

          <Link
            href="/auth"
            className="
              inline-block bg-primary text-white font-semibold
              px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg
              hover:bg-primary-dark transition
            "
          >
            Get started
          </Link>

          <div className="hidden md:block absolute -right-16 lg:-right-24 top-1/2 transform -translate-y-1/2">
            <Image
              src="/assets/arrow-scribble.svg"
              alt=""
              width={200}
              height={100}
              className="w-32 md:w-40 lg:w-48 h-auto"
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/Powerfultool.svg"
            alt="Task management dashboard"
            width={800}
            height={450}
            className="
              w-full
              max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl
              
            "
          />
        </div>
      </div>
    </div>
  </section>
);

export default PowerfulSection;
