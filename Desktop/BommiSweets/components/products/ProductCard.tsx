"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingCart, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "./ProductData";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { cartItems, addToCart, setIsCartOpen } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const isInCart = cartItems.some((item) => item.product.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCart) {
      setIsCartOpen(true);
      return;
    }
    setIsAdding(true);
    // Add product with default unit and quantity 1
    addToCart(product, 1, product.unit);
    setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "LKR",
      maximumFractionDigits: 0,
    }).format(value);

  const isPieceUnit = product.unit.includes("piece");
  const priceLabel = isPieceUnit
      ? `${formatCurrency(product.price)} / ${product.unit.replace("pieces", "pcs")}`
      : `${formatCurrency(product.price)} / ${product.unit}`;

  const whatsappUrl = `https://wa.me/94766341818?text=${encodeURIComponent(
    `Hello Bommi Sweets,\n\nI am interested in *${product.name}*. Please share the price, availability, and available packaging options for this item.\n\nThank you!`,
  )}`;

  const categoryLabel: Record<string, string> = {
    sweet: "Sweet",
    spicy: "Spicy Snack",
    laddu: "Laddu",
    chips: "Chips & Mix",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45 }}
      className="group relative flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gold/15 hover:shadow-[0_16px_40px_rgba(182,138,46,0.14)] hover:border-gold/35 hover:-translate-y-1 transition-all duration-400 h-full w-full"
    >
      {/* ── Image ── */}
      <Link
        href={`/products/${product.id}`}
        className="relative h-28 sm:h-44 md:h-52 lg:h-56 xl:h-72 2xl:h-80 w-full overflow-hidden bg-cream-dark block shrink-0"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Special badge */}
        {product.isSpecial && (
          <div className="absolute top-2 left-2 bg-maroon/95 text-gold font-bold text-[7px] sm:text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-gold/40 shadow-md z-10">
            ★ Special
          </div>
        )}

        {/* Category badge – visible sm+ */}
        <div className="hidden sm:block absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-maroon text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm z-10">
          {categoryLabel[product.category ?? product.type] ?? "Helathy mix"}
        </div>
      </Link>

      {/* ── Body ── */}
      <div className="flex flex-col flex-grow p-2.5 sm:p-4">
        {/* Name */}
        <h3 className="text-[11px] sm:text-sm md:text-base lg:text-lg font-serif font-bold text-maroon leading-snug line-clamp-2 mb-1.5 sm:mb-2 group-hover:text-gold transition-colors duration-300">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>

        {/* Price */}
        <div className="mb-2">
          <span className="text-[10px] sm:text-sm font-bold text-gold tracking-widest">
            {priceLabel}
          </span>
        </div>

        {/* Description (sm+) */}
        <p className="hidden sm:block text-gray-500 text-[11px] sm:text-xs leading-relaxed line-clamp-2 mb-3 flex-grow">
          {product.description}
        </p>

        {/* Available Purchase Units instead of static Price */}
        <div className="mt-auto mb-2.5 sm:mb-3">
          <span className="text-[7px] sm:text-[9px] text-gold font-extrabold uppercase tracking-widest block mb-0.5">
            Purchase Unit
          </span>
          <div className="flex items-baseline gap-1 text-[11px] sm:text-xs font-serif font-extrabold text-maroon">
            <span>Available in:</span>
            <span className="text-gold tracking-wider font-sans text-[10px] sm:text-[11px] font-black">
              {product.unit.includes("piece") ? "Pieces" : "Grams"}
            </span>
          </div>
        </div>

        {/* ── Action Buttons – both stacked beautifully ── */}
        <div className="flex flex-col gap-2">
          {/* Direct Order via WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebd54] text-white font-bold rounded-lg sm:rounded-xl py-2 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
            title="Order directly via WhatsApp"
          >
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span>Order Now</span>
          </a>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {/* View Details */}
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center justify-center gap-1 sm:gap-1.5 border border-gold/50 hover:border-gold bg-cream-dark/40 hover:bg-gold/10 text-maroon font-bold rounded-lg sm:rounded-xl px-2 py-1.5 sm:py-2 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider transition-all duration-300 hover:scale-[1.03]"
              title="View Product Details"
            >
              <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
              <span>Details</span>
            </Link>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 font-bold rounded-lg sm:rounded-xl px-2 py-1.5 sm:py-2 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] cursor-pointer ${
                isInCart
                  ? "bg-[#25D366] text-cream hover:bg-[#1ebd54]"
                  : isAdding
                    ? "bg-[#25D366] text-cream hover:bg-[#1ebd54]"
                    : "border border-maroon hover:border-gold bg-white hover:bg-gold/10 text-maroon hover:text-gold"
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                  <span>In Cart</span>
                </>
              ) : isAdding ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-cream animate-ping shrink-0" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                  <span>Add Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
