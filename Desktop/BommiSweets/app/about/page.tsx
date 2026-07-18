import { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Bommi Sweets Jaffna & Vavuniya",
  description: "Learn more about our heritage, our story, and our passion for authentic confectionery in Jaffna & Vavuniya. Handcrafted sweets, dates laddu, dodhal, and snacks in Jaffna & Vavuniya.",
};

export default function AboutPage() {
  return <AboutContent />;
}
