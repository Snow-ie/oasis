export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anita Olusegun",
    avatar: "/assets/avatar.svg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Et cursus sed in tincidunt curabitur justo egestas ultricies sed. Aliquam tellus nulla rutrum ultrices quis.",
  },
  {
    id: 2,
    name: "Michael Adeyemi",
    avatar: "/assets/avatar.svg",
    quote:
      "Phasellus vitae velit eu odio tristique luctus. Fusce quis augue in urna hendrerit pulvinar a id sapien.",
  },
  {
    id: 3,
    name: "Grace Okoro",
    avatar: "/assets/avatar.svg",
    quote:
      "Curabitur eget imperdiet nibh. Integer vel rutrum elit. Suspendisse potenti.",
  },
];
