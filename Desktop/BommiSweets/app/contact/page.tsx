import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Bommi Sweets Jaffna &  Vavuniya",
  description: "Get in touch with Bommi Sweets in Jaffna & Vavuniya for orders, inquiries, or feedback.",
};

export default function ContactPage() {
  return <ContactContent />;
}
