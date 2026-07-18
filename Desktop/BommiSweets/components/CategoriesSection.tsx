"use client";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import sweet_cat from "@/asserts/sweet_cat.png";
import spicy_cat from "@/asserts/spicy_cat.png";
import healthy_cat from "@/asserts/Healthy_cat.png";
import laddu_cat from "@/asserts/laddu_cat.png";
import chips_cat from "@/asserts/chips_cat.png";

const mainCategories = [
  { name: "Sweets", image: sweet_cat },
  { name: "Spicy Snacks", image: spicy_cat },
  { name: "Healthy Mix", image: healthy_cat },
  { name: "Laddu", image: laddu_cat },
  { name: "Chips & Mixtures", image: chips_cat },
];

const categoryGroups = [
  {
    title: "Sweets",
    items: [
      { name: "Dodhal", isSpecial: true },
      { name: "Paytram Palakaaram", isSpecial: false },
      { name: "Sippi Palakaaram", isSpecial: false },
      { name: "Ariyatharam", isSpecial: false },
      { name: "Kokkis", isSpecial: false },

      { name: "Maskat", isSpecial: false },
      { name: "Mysore Pak", isSpecial: false },
      { name: "Boonthi", isSpecial: false },
    ],
  },
  {
    title: "Spicy Snacks",
    items: [
      { name: "Golden Murukku", isSpecial: false },
      { name: "Paruthithurai Vadai", isSpecial: false },
      { name: "Spicy Murukku", isSpecial: false },
      { name: "Pakooda", isSpecial: false },
      { name: "Fried Peanut", isSpecial: false },
      { name: "Garlic Murukku", isSpecial: false },
    ],
  },
  {
    title: "Laddu",
    items: [
      { name: "Dates Laddu", isSpecial: true },
      { name: "Boonthi Laddu", isSpecial: true },
      { name: "Ravai Laddu", isSpecial: false },
    ],
  },
  {
    title: "Chips & Mixtures",
    items: [
      { name: "Spicy Mixture", isSpecial: false },
      { name: "Baby Mixture", isSpecial: false },
      { name: "Cassava Chips", isSpecial: false },
      { name: "Sauce Cassava Chips", isSpecial: false },
    ],
  },
  {
    title: "Healthy Mix",
    items: [{ name: "Muttai Maa", isSpecial: false }],
  },
];

export default function CategoriesSection() {
  return (
    <>
      {/* Top: Header + Cards (white background) */}
      <section className="pt-12 pb-12 bg-white overflow-hidden">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1600px] px-4 sm:px-6">
            {/* Header Area matching reference */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col desktop:flex-row desktop:flex-nowrap justify-between items-start desktop:items-end mb-6 gap-6 desktop:gap-8"
            >
              <div className="min-w-0 flex-1">
                <h4 className="text-gold font-bold tracking-widest text-sm md:text-base uppercase mb-3 text-center">
                  Our Menu Categories
                </h4>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-maroon tracking-tight leading-tight md:leading-normal text-center">
                  Top Sweets To Relish
                </h2>
                <div className="flex items-center gap-3 mt-6 justify-center mx-auto">
                  <div className="w-16 h-[4px] bg-gold rounded-full"></div>
                  <Leaf className="w-7 h-7 text-gold" />
                </div>
              </div>
              <div className="shrink-0 desktop:ml-6">
                <a
                  href="https://wa.me/94766341818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold hover:bg-maroon transition-colors text-sm md:text-base shadow-lg hover:shadow-xl"
                >
                  Order via WhatsApp <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
              </div>
            </motion.div>

            {/* Spacer */}
            <div className="h-8"></div>

            {/* Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6"
            >
              {mainCategories.map((category, index) => (
                <Link
                  key={index}
                  href={`/products?category=${
                    category.name === "Sweets"
                      ? "sweet"
                      : category.name === "Spicy Snacks"
                        ? "spicy"
                        : category.name === "Laddu"
                          ? "laddu"
                          : category.name === "Healthy Mix"
                            ? "healthy-mix"
                            : "chips"
                  }`}
                  className="relative h-[450px] lg:h-[500px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-lg border border-gold/10 hover:shadow-[0_20px_50px_rgba(182,138,46,0.2)] transition-all duration-500 block w-full"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 700px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2 font-serif">
                      {category.name}
                    </h3>
                    <div className="h-1 w-12 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom: Complete Categories List Section (cream background) */}
      <section className="pt-12 pb-12 bg-cream overflow-hidden">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-screen-2xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mt-12 pt-10 border-t border-gold/15"
            >
              <div className="text-center mb-12 flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-maroon mb-4">
                  Explore Our Varieties
                </h3>

                {/* Signature Underline Divider */}
                <div className="flex items-center gap-3 mb-6 mt-1 mx-auto w-fit">
                  <div className="w-12 h-[2px] bg-gold rounded-full"></div>
                  <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                  <div className="w-12 h-[2px] bg-gold rounded-full"></div>
                </div>

                <p
                  className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
                  style={{ marginBottom: "2.5rem" }}
                >
                  We handcraft a wide selection of traditional sweets and crispy
                  snacks fresh daily. Look out for our highlighted special
                  items!
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-24 w-full px-2">
                {categoryGroups.map((group, groupIdx) => (
                  <div
                    key={groupIdx}
                    className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] flex flex-col items-center gap-4"
                  >
                    {/* Column Heading */}
                    <h4 className="font-serif text-lg md:text-xl font-extrabold text-maroon border-b border-gold/30 pb-3 mb-6 tracking-wider uppercase text-center w-full max-w-[280px]">
                      {group.title}
                    </h4>

                    {/* Items List */}
                    <div className="space-y-5 flex flex-col items-center w-full">
                      {group.items.map((item, itemIdx) => {
                        const getItemId = (name: string): string => {
                          const itemMap: Record<string, string> = {
                            Dodhal: "dodhal",
                            "Paytram Palakaaram": "paytram-palakaaram",
                            "Sippi Palakaaram": "sippi-palakaaram",
                            Ariyatharam: "ariyatharam",
                            Kokkis: "kokkis",
                            "Muttai Maa": "muttai-maa",
                            Maskat: "maskat",
                            "Mysore Pak": "mysore-pak",
                            Boonthi: "boonthi",
                            "Golden Murukku": "golden-murukku",
                            "Paruthithurai Vadai": "paruthithurai-vadai",
                            "Spicy Murukku": "spicy-murukku",
                            Pakooda: "pakooda",
                            "Fried Peanut": "fried-peanut",
                            "Garlic Murukku": "garlic-murukku",
                            "Dates Laddu": "dates-laddu",
                            "Boonthi Laddu": "boonthi-laddu",
                            "Ravai Laddu": "ravai-laddu",
                            "Spicy Mixture": "spicy-mixture",
                            "Baby Mixture": "baby-mixture",
                            "Cassava Chips": "cassava-chips",
                            "Sauce Cassava Chips": "sauce-cassava-chips",
                          };
                          return itemMap[name] || "";
                        };

                        const itemId = getItemId(item.name);

                        return (
                          <Link
                            key={itemIdx}
                            href={itemId ? `/products/${itemId}` : "/products"}
                            className="flex items-center gap-3 text-gray-800 cursor-pointer select-none w-full group/item hover:translate-x-1.5 transition-transform duration-300"
                          >
                            <div className="w-1.5 h-1.5 rotate-45 bg-gold shrink-0 group-hover/item:scale-125 transition-transform" />
                            <div className="flex items-center flex-wrap gap-1.5 min-w-0">
                              <span
                                className={`font-serif text-sm md:text-base tracking-wide text-maroon leading-snug group-hover/item:text-gold transition-colors duration-300 ${
                                  item.isSpecial
                                    ? "font-black text-gold-dark"
                                    : "font-semibold"
                                }`}
                              >
                                {item.name}
                              </span>
                              {item.isSpecial && (
                                <span className="text-[8px] font-sans font-bold tracking-wider bg-maroon text-gold px-1.5 py-0.5 rounded-full shrink-0">
                                  Special
                                </span>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
