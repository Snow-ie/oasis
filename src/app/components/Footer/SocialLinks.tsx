import { FC } from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaSkype,
} from "react-icons/fa";

const ICON_SIZE = 32;

const socials = [
  { Icon: FaTwitter, href: "https://twitter.com" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com" },
  { Icon: FaFacebookF, href: "https://facebook.com" },
  { Icon: FaInstagram, href: "https://instagram.com" },
  { Icon: FaGooglePlusG, href: "#" },
  { Icon: FaSkype, href: "#" },
];

const FollowUs: FC = () => (
  <section className="text-white px-6 py-10 sm:px-10 sm:py-12  overflow-hidden">
    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
      Follow&nbsp;Us
    </h3>
    <span className="block w-10 h-[3px] bg-primary mt-1 mb-6 rounded-full" />

    <ul className="flex items-center gap-6 flex-wrap">
      {socials.map(({ Icon, href }, i) => (
        <li key={i}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              w-[48px] h-[48px] sm:w-[56px] sm:h-[56px]
              border-2 border-white rounded-md
              hover:bg-white hover:text-primary transition
            "
          >
            <Icon size={ICON_SIZE} />
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default FollowUs;
