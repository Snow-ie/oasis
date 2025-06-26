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
        <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
        <p className="text-gray-300 mb-4">
          Join our mailing list to stay up to date and get notices about our new
          releases!
        </p>
        <NewsletterForm />

        <h3 className="text-xl font-semibold mt-8">Follow Us</h3>
        <SocialLinks />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="w-40">
          <Logo />
        </div>
        <p className="text-gray-300 text-sm">
          Oasis Management Company (RC 642281) is the premier Management
          Consulting and Technology Services Company focused on the continued
          convergence between Consulting, Communications, Content and Commerce
          (4C).
        </p>
        <div className="text-gray-300 text-sm space-y-1">
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

    {/* Middle: footer nav */}
    <div className="border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <FooterNav />
      </div>
    </div>

    {/* Bottom: copyright */}
    <div className="bg-[#061431]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-500 text-sm">
        © 2017 Oasis Management Company. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
