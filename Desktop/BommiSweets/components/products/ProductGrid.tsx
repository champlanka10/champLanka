"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Leaf, Flame, Inbox, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product, products } from "./ProductData";
import ProductCard from "./ProductCard";
import ProductFilter, { FilterType } from "./ProductFilter";

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync state with URL category parameter on load or search change
  useEffect(() => {
    const categoryParam = searchParams.get("category") as FilterType;
    if (
      categoryParam &&
      ["sweet", "spicy", "laddu", "chips", "special", "healthy-mix"].includes(
        categoryParam,
      )
    ) {
      setActiveFilter(categoryParam);
    } else {
      setActiveFilter("all");
    }
  }, [searchParams]);

  // Handle setting active filter with lightweight pushState URL syncing
  const handleSetActiveFilter = (filter: FilterType) => {
    setActiveFilter(filter);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (filter === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", filter);
      }
      window.history.pushState(null, "", url.pathname + url.search);
    }
  };

  // Filter products based on search and selected tab
  const filteredProducts = products.filter((product) => {
    // 1. Filter by category/tab
    if (activeFilter !== "all") {
      if (activeFilter === "special" && !product.isSpecial) return false;
      if (activeFilter !== "special" && product.category !== activeFilter)
        return false;
    }

    // 2. Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(query);
      const descMatch = product.description.toLowerCase().includes(query);
      return nameMatch || descMatch;
    }

    return true;
  });

  // Group filtered products so that Sweets appear first, then Spicy Snacks, then Laddu, then Chips
  const sweets = filteredProducts.filter((p) => p.category === "sweet");
  const spicy = filteredProducts.filter((p) => p.category === "spicy");
  const healthyMix = filteredProducts.filter(
    (p) => p.category === "healthy-mix",
  );
  const laddu = filteredProducts.filter((p) => p.category === "laddu");
  const chips = filteredProducts.filter((p) => p.category === "chips");

  const hasSweets = sweets.length > 0;
  const hasSpicy = spicy.length > 0;
  const hasHealthyMix = healthyMix.length > 0;
  const hasLaddu = laddu.length > 0;
  const hasChips = chips.length > 0;
  const noMatches =
    !hasSweets && !hasSpicy && !hasHealthyMix && !hasLaddu && !hasChips;

  // Grid animation config
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full">
      {/* Interactive Category & Search Controls */}
      <ProductFilter
        activeFilter={activeFilter}
        setActiveFilter={handleSetActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="w-full px-4 md:px-6 pt-2 md:pt-6">
        {noMatches ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-cream-dark/50 flex items-center justify-center text-gold mb-6 border border-gold/15 shadow-inner">
              <Inbox className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-maroon mb-2">
              No Delicacies Found
            </h3>
            <p className="text-gray-500 max-w-md">
              We couldn't find any sweets or spicy snacks matching "
              {searchQuery}". Try adjusting your keywords.
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6">
            {/* Section 1: Sweets (Displayed FIRST) */}
            {hasSweets && (
              <div className="pt-2 sm:pt-4">
                {/* Elegant Section Header */}
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="flex items-center gap-2 text-gold font-bold tracking-widest text-[11px] uppercase mb-3">
                    <Leaf className="w-4 h-4 text-gold animate-spin-slow" />{" "}
                    Aromatic & Delicious
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon relative inline-block">
                    Sweets
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
                  </h2>
                </div>

                {/* Sweets Grid with top padding to guarantee spacing */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-6 md:pt-10"
                >
                  <AnimatePresence mode="popLayout">
                    {sweets.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}

            {/* Section 2: Spicy Snacks (Displayed NEXT) */}
            {hasSpicy && (
              <div className="border-t border-gold/20 pt-2 sm:pt-4 lg:pt-6">
                {/* Elegant Section Header */}
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="flex items-center gap-2 text-gold font-bold tracking-widest text-[11px] uppercase mb-3">
                    <Flame className="w-4 h-4 text-gold" /> Crispy & Tangy
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon relative inline-block">
                    Spicy Snacks
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
                  </h2>
                </div>

                {/* Spicy Snacks Grid with top padding to guarantee spacing */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-6 md:pt-10"
                >
                  <AnimatePresence mode="popLayout">
                    {spicy.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}

            {/* Section: Healthy Mix */}
            {hasHealthyMix && (
              <div className="border-t border-gold/20 pt-2 sm:pt-4 lg:pt-6">
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="flex items-center gap-2 text-gold font-bold tracking-widest text-[11px] uppercase mb-3">
                    <Leaf className="w-4 h-4 text-gold" /> Nutritious & Light
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon relative inline-block">
                    Healthy Mix
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
                  </h2>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-6 md:pt-10"
                >
                  <AnimatePresence mode="popLayout">
                    {healthyMix.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}

            {/* Section 3: Laddu */}
            {hasLaddu && (
              <div className="border-t border-gold/20 pt-2 sm:pt-4 lg:pt-6">
                {/* Elegant Section Header */}
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="flex items-center gap-2 text-gold font-bold tracking-widest text-[11px] uppercase mb-3">
                    <Sparkles className="w-4 h-4 text-gold" /> Handcrafted Laddu
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon relative inline-block">
                    Laddu Collection
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
                  </h2>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-6 md:pt-10"
                >
                  <AnimatePresence mode="popLayout">
                    {laddu.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}

            {/* Section 4: Chips & Mixtures */}
            {hasChips && (
              <div className="border-t border-gold/20 pt-2 sm:pt-4 lg:pt-6">
                {/* Elegant Section Header */}
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="flex items-center gap-2 text-gold font-bold tracking-widest text-[11px] uppercase mb-3">
                    <Sparkles className="w-4 h-4 text-gold" /> Crispy Chips
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon relative inline-block">
                    Chips &amp; Mixtures
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
                  </h2>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-6 md:pt-10"
                >
                  <AnimatePresence mode="popLayout">
                    {chips.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
