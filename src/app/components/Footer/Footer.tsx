import Link from "next/link";
import { FC } from "react";
import NewsletterForm from "./NewsletterForm";
import SocialLinks from "./SocialLinks";
import FooterNav from "./FooterNav";
import { Logo } from "../Logo";

const Footer: FC = () => (
  <footer className="bg-[#0A1F44] text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <NewsletterForm />
        <SocialLinks />
      </div>

      <div className="flex flex-col px-6 py-10 sm:px-10 sm:py-12  overflow-hidden">
        <div className="w-full">
          <Logo />
        </div>
        <h3 className="text-gray-300 text-base leading-relaxed mt-4">
          Oasis Management Company (RC 642281) is the premier Management
          Consulting and Technology Services Company focused on the continued
          convergence between Consulting, Communications, Content and Commerce
          (4C).
        </h3>
        <div className="text-white mt-6 space-y-4">
          <p>
            <span className="font-semibold">Phone:</span> +234 701 3234 484
            &amp; +234 701 3234 480
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:info@oasismgmt.net" className="hover:underline">
              info@oasismgmt.net
            </a>
          </p>
          <p>
            <span className="font-semibold">Website:</span>{" "}
            <Link
              href="https://www.oasismgt.com.ng"
              className="hover:underline"
            >
              www.oasismgt.com.ng
            </Link>
          </p>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-700 ">
      <div
        className="
                  flex flex-col sm:flex-row items-center justify-between
                  py-4"
      >
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © 2017 Oasis Management Company. All rights reserved.
        </p>
        <div className="mt-3 sm:mt-0">
          <FooterNav />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
