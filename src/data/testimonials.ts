import jamesAvatar from "@/assets/avatar-james.jpg";
import sophieAvatar from "@/assets/avatar-sophie.jpg";
import rohanAvatar from "@/assets/avatar-rohan.jpg";

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "james",
    name: "James Carter",
    country: "United Kingdom",
    avatar: jamesAvatar,
    rating: 5,
    quote:
      "Amazing experience with Champ Lanka. Everything was perfectly organised — from the hotels to the driver. Highly recommended!",
  },
  {
    id: "sophie",
    name: "Sophie Martin",
    country: "France",
    avatar: sophieAvatar,
    rating: 5,
    quote:
      "The trip was beyond our expectations. Sri Lanka is truly a paradise and Champ Lanka made every day effortless.",
  },
  {
    id: "rohan",
    name: "Rohan Sharma",
    country: "India",
    avatar: rohanAvatar,
    rating: 5,
    quote:
      "Excellent service, friendly team and unforgettable memories. We will definitely come again with Champ Lanka!",
  },
];
