import Image from "next/image";
import { FeatureItem } from "../data/features";

interface FeatureCardProps {
  feature: FeatureItem;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-2 container mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
        <Image src={feature.icon} alt={feature.title} width={32} height={32} />
      </div>

      <p className="text-gray-600 text-sm">{feature.description}</p>
    </div>
  );
}
