import { FC } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaMedium,
  FaSkype,
} from "react-icons/fa";

const links = [
  { Icon: FaTwitter, href: "https://twitter.com" },
  { Icon: FaLinkedin, href: "https://linkedin.com" },
  { Icon: FaFacebookF, href: "https://facebook.com" },
  { Icon: FaInstagram, href: "https://instagram.com" },
  { Icon: FaMedium, href: "https://medium.com" },
  { Icon: FaSkype, href: "#" },
];

const SocialLinks: FC = () => (
  <div className="flex space-x-4 mt-2">
    {links.map(({ Icon, href }, i) => (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
      >
        <Icon size={20} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
