import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const currentYear = new Date().getFullYear();

/** Space between heading block and section content */
const sectionContentGap = "gap-6 lg:gap-4";

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 font-serif text-xl font-bold tracking-wide text-gold sm:text-lg">
        {children}
      </h3>
      <div className="h-0.5 w-14 rounded-full bg-gold" aria-hidden="true" />
    </div>
  );
}

function FooterSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-b border-white/10 py-9 last:border-b-0 sm:py-10 lg:border-b-0 lg:py-0 ${className}`}
    >
      {children}
    </section>
  );
}

function ContactItem({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <li className="flex w-full items-start gap-4">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 lg:h-10 lg:w-10">
        <Icon className="h-[18px] w-[18px] text-gold" />
      </span>
      <div className="min-w-0 flex-1 pt-1.5 text-base leading-relaxed text-cream/90 lg:pt-1 lg:text-[15px] lg:leading-[1.75]">
        {children}
      </div>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream">
      <div className="border-t-4 border-gold" />

      <div className="mx-auto w-full max-w-screen-2xl px-10 py-12 sm:px-12 sm:py-16 lg:px-14 lg:py-20">
        <div
          className="
            mx-auto grid w-full max-w-screen-2xl grid-cols-1 text-left
            gap-0
            md:grid-cols-2 md:gap-x-10 md:gap-y-0
            lg:grid-cols-4 lg:gap-x-8
            xl:gap-x-12
            2xl:gap-x-16
          "
        >
          {/* Brand */}
          <FooterSection className="md:col-span-2 lg:col-span-1">
            <div className="rounded-2xl border border-gold/20 bg-white/[0.06] p-6 sm:p-7 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left sm:gap-6 lg:flex-col lg:gap-5">
                <Link
                  href="/"
                  className="shrink-0 transition-opacity hover:opacity-90"
                >
                  <Image
                    src="/logo-1.png"
                    alt="Bommi Sweets"
                    width={140}
                    height={140}
                    className="h-28 w-28 object-contain sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link href="/" className="group inline-block">
                    <h2 className="mb-3 font-serif text-2xl font-bold text-cream transition-colors group-hover:text-gold sm:mb-4 sm:text-[1.65rem] lg:text-2xl">
                      Bommi Sweets
                    </h2>
                  </Link>
                  <p className="text-base leading-relaxed text-cream/85 sm:text-[15px] lg:text-base">
                    Traditional Sri Lankan sweets and snacks, handcrafted fresh
                    daily in Jaffna & Vavuniya since our family kitchen opened its doors
                    to the community.
                  </p>
                </div>
              </div>
            </div>
          </FooterSection>

          {/* Quick links */}
          <FooterSection>
            <div className={`flex flex-col items-start ${sectionContentGap}`}>
              <FooterHeading>Quick Links</FooterHeading>
              <ul className="flex w-full flex-col gap-1 sm:gap-0 sm:space-y-5 lg:space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg py-3 text-base text-cream/90 transition-colors hover:bg-white/5 hover:text-gold active:bg-white/10 sm:py-0 sm:text-[15px] sm:hover:bg-transparent lg:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FooterSection>

          {/* Contact */}
          <FooterSection>
            <div
              className={`flex min-w-0 flex-col items-start ${sectionContentGap}`}
            >
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="flex w-full flex-col gap-5 sm:gap-6 lg:gap-7">
                <ContactItem icon={MapPin}>
                  <a
                    href="https://maps.google.com/?q=208c,+Station+Rd,+Vavuniya+43000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors hover:text-gold"
                  >
                    208c, Station Rd,
                    <br />
                    Vavuniya 43000.
                  </a>
                </ContactItem>
                <ContactItem icon={Phone}>
                  <span className="block">
                    Jaffna -{" "}
                    <a
                      href="tel:0779028110"
                      className="ml-2 transition-colors hover:text-gold"
                    >
                      077 90 28 110
                    </a>
                  </span>
                  <span className="mt-2 block">
                    Vavuniya -{" "}
                    <a
                      href="tel:0778147381"
                      className="ml-2 transition-colors hover:text-gold"
                    >
                      077 81 47 381
                    </a>
                  </span>
                </ContactItem>
                <ContactItem icon={Mail}>
                  <a
                    href="mailto:bommisweets@gmail.com"
                    className="block break-words transition-colors hover:text-gold"
                  >
                    bommisweets@gmail.com
                  </a>
                </ContactItem>
                <ContactItem icon={Clock}>
                  <span className="block">
                    Monday – Saturday
                    <br/> 8:00 AM – 9.00 AM
                    <br />
                    Sunday 
                    <br/>8.30 AM – 6:00 PM
                  </span>
                </ContactItem>
              </ul>
            </div>
          </FooterSection>

          {/* Follow us */}
          <FooterSection className="md:col-span-2 lg:col-span-1">
            <div
              className={`flex min-w-0 flex-col items-start ${sectionContentGap}`}
            >
              <FooterHeading>Follow Us</FooterHeading>
              <div
                className={`flex w-full flex-col items-start ${sectionContentGap}`}
              >
                <p className="text-base leading-relaxed text-cream/85 sm:text-[15px] lg:text-base">
                  See our latest sweets, offers, and behind-the-scenes from the
                  kitchen.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.facebook.com/61556776796313/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-maroon-dark lg:h-10 lg:w-10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5 lg:h-[18px] lg:w-[18px]"
                      aria-hidden="true"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/bommisweets?igsh=MW03ZmJ0N2VxNjEzbg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-maroon-dark lg:h-10 lg:w-10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5 lg:h-[18px] lg:w-[18px]"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/94766341818"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-gold transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white lg:h-10 lg:w-10"
                  >
                    <MessageCircle className="h-5 w-5 lg:h-[18px] lg:w-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </FooterSection>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/10">
        <div className="w-full flex w-full max-w-[90rem] flex-col items-center gap-3 px-10 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-12 lg:px-14 xl:px-16">
          <p className="text-sm leading-relaxed text-cream/60">
            © {currentYear} Bommisweets pvt(Ltd). All rights reserved.
          </p>
          <p className="font-serif text-sm italic leading-relaxed text-cream/60">
            Traditional Sweets &amp; Snacks from Jaffna & Vavuniya
          </p>
        </div>
      </div>
    </footer>
  );
}
