import { FC } from "react";
import Link from "next/link";

const items = [
  { label: "Sitemap", href: "/sitemap.xml", external: false },
  { label: "Privacy Policy", href: "/privacy", external: false },
  { label: "Legal Notices", href: "/legal", external: false },
  { label: "Repository", href: "https://github.com/your-repo", external: true },
  { label: "Contact", href: "/contact", external: false },
];

const FooterNav: FC = () => (
  <nav>
    <ul className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
      {items.map((item, i) => (
        <li key={i}>
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {item.label}
            </a>
          ) : (
            <Link href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default FooterNav;
