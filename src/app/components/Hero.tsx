import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-white">
      <div className=" bg-primary h-[80vh] w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold my-8">
          Effectively Handle Your Projects
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Prepare and follow work breakdown structure for effective planning,
          tracking and completing tasks
        </p>
        <div className="mt-8">
          <Link href="/auth">
            <button className="text-white font-semibold px-6 py-3 rounded border border-white hover:bg-white hover:text-gray-900 transition">
              Get started
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute -bottom-[50%] mx-auto w-fit z-50 ">
        <Image
          src="/assets/Hero.svg"
          alt="Dashboard Preview"
          width={1200}
          height={600}
        />
      </div>
    </section>
  );
}
