"use client";
import { Search, Flame, Leaf, Sparkles, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export type FilterType =
  | "all"
  | "sweet"
  | "spicy"
  | "special"
  | "laddu"
  | "chips"
  | "healthy-mix";

interface ProductFilterProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ProductFilter({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
}: ProductFilterProps) {
  const categories = [
    { id: "all", label: "All Items", icon: ShoppingBag },
    { id: "special", label: "Specials", icon: Sparkles },
    { id: "sweet", label: "Sweets", icon: Leaf },
    { id: "spicy", label: "Spicy Snacks", icon: Flame },
    { id: "healthy-mix", label: "Healthy Mix", icon: Leaf },
    { id: "laddu", label: "Laddu", icon: Sparkles },
    { id: "chips", label: "Chips & Mixtures", icon: ShoppingBag },
  ] as const;

  return (
    <div className="w-full mb-10 px-2 sm:px-6 lg:px-12 relative z-20">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 justify-between items-center bg-white rounded-xl lg:rounded-full p-2 lg:p-4 shadow-[0_12px_35px_rgba(90,31,43,0.08)] border-2 border-gold/30 hover:border-gold/50 transition-all duration-300">
        {/* Search Bar */}
        <div className="relative w-full lg:w-[320px] xl:w-[360px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon w-4.5 h-4.5" />
          <input
            type="text"
            placeholder="Search our traditional treats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-cream-dark/40 hover:bg-cream-dark/60 focus:bg-white rounded-xl lg:rounded-full border border-gold/45 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none text-maroon font-sans font-bold placeholder-maroon/65 transition-all duration-300 text-sm shadow-inner"
          />
        </div>

        {/* Filters Tabs - wrap to 2 rows on mobile, single scrollable row on desktop */}
        <div className="w-full lg:w-auto lg:overflow-x-auto lg:overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
          <div className="flex items-center justify-start lg:justify-end gap-1 md:gap-3 flex-wrap lg:flex-nowrap lg:whitespace-nowrap">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveFilter(cat.id)}
                  className={`group relative flex items-center gap-0.5 px-2 py-1 sm:px-4 sm:py-2.5 rounded sm:rounded-xl lg:rounded-full text-[8px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer overflow-hidden select-none whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-cream shadow-sm shadow-maroon/15"
                      : "text-maroon hover:text-maroon hover:bg-cream-dark/50"
                  }`}
                >
                  {/* Active Highlight Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-gradient-to-r from-maroon to-maroon-dark"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Tab content inside relative container to overlap background motion */}
                  <span className="relative z-10 flex items-center gap-0.5">
                    <Icon
                      className={`hidden sm:inline w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "text-gold scale-110" : "text-gold group-hover:scale-110"}`}
                    />
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
