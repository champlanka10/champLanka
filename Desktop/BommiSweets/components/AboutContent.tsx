"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import aboutImg from "@/asserts/about img.png";
import { contactPanelStyles } from "@/components/contactPanelStyles";

export default function AboutContent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const values = [
    {
      icon: Sparkles,
      title: "Traditional Recipes",
      description:
        "We use our clean, traditional family recipes so you always get the authentic taste of home.",
    },
    {
      icon: Heart,
      title: "Pure & Organic",
      description:
        "Made with high-quality ingredients, pure ghee, and local organic items with no added chemical preservatives.",
    },
    {
      icon: Leaf,
      title: "Fresh Daily",
      description:
        "Prepared fresh in our Jaffna & Vavuniya kitchen every single day so you get the best taste and healthy food.",
    },
  ];

  return (
    <div className="bg-cream min-h-screen text-maroon font-sans">
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light overflow-hidden border-b-4 border-gold text-center">
        {/* Sprinkles/Decorative Elements */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-gold rounded-full blur-[1px]"></div>
          <div className="absolute top-[60%] right-[15%] w-4 h-4 bg-gold-light rounded-full blur-[1px]"></div>
          <div className="absolute bottom-[20%] left-[30%] w-2 h-2 bg-cream rounded-full"></div>
          <div className="absolute top-[30%] right-[30%] w-5 h-5 border border-gold rounded-full"></div>
        </div>

        <div className="w-full px-6 relative z-10 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-cream leading-tight mb-4"
          >
            Bommi Sweets
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8 mt-2"
          >
            <div className="w-12 h-[2px] bg-gold rounded-full"></div>
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <div className="w-12 h-[2px] bg-gold rounded-full"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-cream-dark text-lg md:text-xl font-serif italic mt-2"
          >
            "Crafted With Love"
          </motion.p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="pt-16 pb-16 lg:pt-8 lg:pb-8 bg-cream">
        <div className="w-full px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Story Text (Left) */}
            <motion.div variants={itemVariants} className="lg:col-span-7 ">
              <span className="text-gold font-bold tracking-widest text-sm uppercase block mb-1">
                About Bommi Sweets
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon mb-6 leading-tight">
                Crafting Sweet Memories in Jaffna & Vavuniya
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-8"></div>
              <div
                className="text-gray-700 text-lg"
                style={{ marginTop: "1.75rem" }}
              >
                <p
                  className="block"
                  style={{
                    marginTop: "1.75rem",
                    lineHeight: "1.9",
                    marginBottom: "1.75rem",
                  }}
                >
                  Welcome to <strong>Bommi Sweets</strong>! Located in the heart
                  of Jaffna & Vavuniya, we love making delicious, traditional Sri Lankan
                  sweets and snacks for our community. For us, sweets are a way
                  to share love and celebrate happy moments together with
                  family.
                </p>

                <p
                  className="block"
                  style={{ lineHeight: "1.9", marginBottom: "1.75rem" }}
                >
                  Every single sweet we make is prepared with care by hand. We
                  use only the best ingredients like pure ghee, fresh coconut
                  milk, high-quality nuts, and organic sweeteners. We follow our
                  traditional family recipes so you always get the true home
                  taste.
                </p>

                <p className="block" style={{ lineHeight: "1.9" }}>
                  Whether you love our sweet <strong>Dates Laddu</strong>, our
                  rich and traditional <strong>Dodhal</strong>, or our crispy{" "}
                  <strong>Spicy Snacks</strong>, we guarantee they are clean and
                  fresh. We make our sweets in small batches every single day so
                  they are always fresh and delicious when you buy them!
                </p>
              </div>
            </motion.div>

            {/* Showcase Image (Right) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 w-full"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gold/30 group bg-cream-dark">
                <Image
                  src={aboutImg}
                  alt="Crafting Sweets at Bommi Sweets"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/45 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-6 lg:py-8 bg-cream-dark/30 border-t border-b border-gold/10">
        <div className="w-full px-6 flex flex-col gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-gold font-bold tracking-widest text-sm uppercase block mb-2">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon">
              What Makes Us Special
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full inline-block mt-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10"
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="w-full max-w-sm sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white p-6 md:p-7 lg:p-8 rounded-[1.75rem] border border-gold/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-gold mb-6 border border-gold/25">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-maroon mb-4">
                    {val.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Google Location Section */}
      <section className="py-6 lg:py-8 bg-white">
        <div className="w-full px-6 flex flex-col gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-gold font-bold tracking-widest text-sm uppercase block mb-2">
              Find Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon">
              Our Location
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full inline-block mt-4"></div>
          </motion.div>

          <div className="bg-cream rounded-[2.5rem] overflow-hidden border-2 border-gold/30 shadow-2xl flex flex-col lg:flex-row">
            {/* Address & Details Panel */}
            <div
              className="w-full lg:w-5/12 bg-maroon text-white flex flex-col justify-center relative overflow-hidden"
              style={contactPanelStyles.panelPadding}
            >
              <div
                className="relative z-10"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <h3
                    className="text-2xl font-serif font-bold text-gold"
                    style={contactPanelStyles.sectionTitle}
                  >
                    Bommi Sweets Store
                  </h3>
                  <p
                    className="text-gray-300 text-sm"
                    style={contactPanelStyles.introText}
                  >
                    Come visit us to experience the aroma of fresh traditional
                    sweets and choose from our fresh daily catalog.
                  </p>
                </div>

                <div style={contactPanelStyles.itemsList}>
                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.itemLabel}
                      >
                        Shop Address
                      </h4>
                      <a
                        href="https://maps.google.com/?q=208c,+Station+Rd,+Vavuniya+43000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gold transition-colors"
                        style={contactPanelStyles.itemDetail}
                      >
                        208c, Station Rd, Vavuniya 43000.
                      </a>
                    </div>
                  </div>

                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.itemLabel}
                      >
                        Phone Numbers
                      </h4>
                      <p
                        className="text-gray-300 block transition-colors"
                        style={contactPanelStyles.itemDetail}
                      >
                        Jaffna -{" "} 
                        <a
                          href="tel:0779028110"
                          className="ml-2 font-semibold text-gray-300 hover:text-gold transition-colors"
                        >
                          077 90 28 110
                        </a>
                      </p>
                      <p
                        className="text-gray-300 block transition-colors"
                        style={{
                          ...contactPanelStyles.itemDetail,
                          ...contactPanelStyles.secondaryLine,
                        }}
                      >
                        Vavuniya -{" "}
                        <a
                          href="tel:0778147381"
                          className="ml-2 font-semibold text-gray-300 hover:text-gold transition-colors"
                        >
                          077 81 47 381
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.itemLabel}
                      >
                        Email Address
                      </h4>
                      <a
                        href="mailto:bommisweets@gmail.com"
                        className="text-gray-300 hover:text-gold transition-colors"
                        style={contactPanelStyles.itemDetail}
                      >
                        bommisweets@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-gold"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.itemLabel}
                      >
                        Facebook Page
                      </h4>
                      <a
                        href="https://www.facebook.com/61556776796313/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gold transition-colors"
                        style={contactPanelStyles.itemDetail}
                      >
                        Bommi Sweets on Facebook
                      </a>
                    </div>
                  </div>

                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-gold"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.itemLabel}
                      >
                        Instagram Profile
                      </h4>
                      <a
                        href="https://www.instagram.com/bommisweets?igsh=MW03ZmJ0N2VxNjEzbg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gold transition-colors"
                        style={contactPanelStyles.itemDetail}
                      >
                        @bommisweets
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <a
                    href="https://wa.me/94766341818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd54] text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="w-full lg:w-7/12 h-[350px] lg:h-auto min-h-[450px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.120306173007!2d80.49019958715818!3d8.756284600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc153723a1a6f7%3A0xc3f5fb47dbddf1!2sVavuniya!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
