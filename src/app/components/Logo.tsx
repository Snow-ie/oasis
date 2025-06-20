import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/assets/Logo.svg"
        alt="Oasis Logo"
        width={64}
        height={64}
        priority
      />
    </Link>
  );
}
