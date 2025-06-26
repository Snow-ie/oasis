export interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const features: FeatureItem[] = [
  {
    id: 1,
    icon: "/assets/productivity.svg",
    title: "Maximise Your Productivity",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et cursus sed in tincidunt curabitur justo egestas ultrices sed. Aliquam tellus nulla rutrum ultrices quis. A sed id purus tristique ultrices sit.",
  },
  {
    id: 2,
    icon: "/assets/performance.svg",
    title: "Monitor & Optimise Performance",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et cursus sed in tincidunt curabitur justo egestas ultrices sed. Aliquam tellus nulla rutrum ultrices quis. A sed id purus tristique ultrices sit.",
  },
  {
    id: 3,
    icon: "/assets/collaboration.svg",
    title: "Collaboration Made Easy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et cursus sed in tincidunt curabitur justo egestas ultrices sed. Aliquam tellus nulla rutrum ultrices quis. A sed id purus tristique ultrices sit.",
  },
];
