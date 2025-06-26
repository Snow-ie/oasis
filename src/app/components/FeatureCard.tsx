import Image from "next/image";
import { FeatureItem } from "../data/features";

interface FeatureCardProps {
  feature: FeatureItem;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
        <p className="text-gray-600 text-sm">{feature.description}</p>
      </div>
      <Image
        src={feature.icon}
        alt={feature.title}
        width={40}
        height={40}
        className="mt-1"
      />
    </div>
  );
}
