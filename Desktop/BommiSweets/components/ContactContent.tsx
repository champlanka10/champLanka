"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
} from "lucide-react";
import { contactPanelStyles } from "@/components/contactPanelStyles";
import conImg1 from "@/asserts/con_img1.png";
import conImg2 from "@/asserts/con_img2.png";
import aboutImg from "@/asserts/con_img3.png";
import Image from "next/image";

export default function ContactContent() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    message?: string;
  }>({});

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: { name?: string; phone?: string; message?: string } = {};

    if (!name.trim()) tempErrors.name = "Please enter your name.";
    if (!phone.trim()) tempErrors.phone = "Please enter your phone number.";
    if (!message.trim())
      tempErrors.message = "Please write your message or order details.";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({});

    // Format the WhatsApp message beautifully for local users
    const textMessage = `Hi Bommi Sweets!\n\nMy Name: ${name.trim()}\nPhone Number: ${phone.trim()}\n\nInquiry / Order:\n${message.trim()}`;
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/94766341818?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      // Using default transition easing
    },
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light overflow-hidden text-center border-b-4 border-gold">
        {/* Background Blur shapes */}
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
            Contact Us
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
            "We'd Love to Hear From You - Get in Touch to Order or Ask
            Questions"
          </motion.p>
        </div>
      </section>

      {/* Main Content Form & Details Section */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="w-full px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Contact Form (Left - 7 cols) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gold/15"
            >
              <h2 className="text-3xl font-serif font-bold text-maroon mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Fill in your details below and we will automatically format your
                inquiry. You can then instantly send it to us on WhatsApp with
                one click!
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-maroon font-bold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Champ"
                    className="w-full px-5 py-4 rounded-2xl bg-cream/30 border border-gold/25 focus:border-gold focus:outline-none text-maroon font-medium transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1.5 font-semibold">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-maroon font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0765351012"
                    className="w-full px-5 py-4 rounded-2xl bg-cream/30 border border-gold/25 focus:border-gold focus:outline-none text-maroon font-medium transition-all"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1.5 font-semibold">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-maroon font-bold mb-2"
                  >
                    What would you like to buy or ask?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. I want to order 1kg of Dates Laddu and 500g of Spicy Mixture..."
                    className="w-full px-5 py-4 rounded-2xl bg-cream/30 border border-gold/25 focus:border-gold focus:outline-none text-maroon font-medium transition-all resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1.5 font-semibold">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd54] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg text-lg cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information (Right - 5 cols) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 bg-maroon rounded-[2.5rem] text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[500px]"
              style={contactPanelStyles.panelPadding}
            >
              {/* Blur accent */}
              <div className="absolute top-[-50px] right-[-50px] w-56 h-56 bg-gold/15 rounded-full blur-3xl"></div>

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
                    Our Details
                  </h3>
                  <p
                    className="text-gray-300 text-sm"
                    style={contactPanelStyles.introText}
                  >
                    Feel free to reach out to us using any of the channels
                    below. We are always ready to help you with your sweet
                    cravings!
                  </p>
                </div>

                <div style={contactPanelStyles.itemsList}>
                  {/* Address */}
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

                  {/* Phone Numbers */}
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
                      <a
                        href="https://wa.me/94766341818"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gold block transition-colors"
                        style={{
                          ...contactPanelStyles.itemDetail,
                          ...contactPanelStyles.secondaryLine,
                        }}
                      >
                        +94 766 341 818 (WhatsApp)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
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

                  {/* Hours */}
                  <div style={contactPanelStyles.itemRow}>
                    <div style={contactPanelStyles.iconCircle}>
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4
                        className="text-gold"
                        style={contactPanelStyles.itemLabel}
                      >
                        Opening Hours
                      </h4>
                      <p
                        className="text-gray-300"
                        style={contactPanelStyles.itemDetail}
                      >
                       Monday – Saturday 8:00 AM – 9.00 AM

                      </p>
                      <p
                        className="text-gray-300"
                        style={{
                          ...contactPanelStyles.itemDetail,
                          ...contactPanelStyles.secondaryLine,
                        }}
                      >
                        Sunday 8.30 AM – 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Facebook */}
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

                  {/* Instagram */}
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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Illustrative Images */}
      <section className="py-8 bg-cream">
        <div className="w-full px-6">
          <h2 className="text-3xl font-serif font-bold text-maroon text-center mb-6">
            Our Sweet Moments
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="flex-1 aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={conImg1}
                alt="Contact Image 1"
                width={600}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={conImg2}
                alt="Contact Image 2"
                width={600}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={aboutImg}
                alt="About Image"
                width={600}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Location Map Section */}
      <section className="py-6 lg:py-8 bg-white">
        <div className="w-full px-6 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-gold font-bold tracking-widest text-sm uppercase block mb-2">
              Find Us On Google Maps
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon">
              Our Location
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full inline-block mt-4"></div>
          </motion.div>

          <div className="bg-cream rounded-[2.5rem] overflow-hidden border-2 border-gold/30 shadow-2xl h-[450px] relative">
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
      </section>
    </div>
  );
}
