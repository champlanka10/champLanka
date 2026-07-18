"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Minus,
  Plus,
  Sparkles,
  Leaf,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/components/products/ProductData";
import { useCart, getMultiplier, getUnitOptions } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { addToCart, cartItems } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  // Find the product in local data
  const product = products.find((p) => p.id === id);

  const isPieceUnit = product?.unit?.includes("piece");

  const isInCart = (pid: string) =>
    cartItems.some((item) => item.product.id === pid);

  const [kgSelection, setKgSelection] = useState(product?.unit === "250 g" ? 0 : 1);
  const [gSelection, setGSelection] = useState(product?.unit === "250 g" ? 250 : 0);

  const computedKg = kgSelection === 0 && gSelection === 0 ? 0 : kgSelection;
  const computedG = kgSelection === 0 && gSelection === 0 ? 250 : gSelection;
  const rawUnitSize = `${computedKg > 0 ? `${computedKg} kg ` : ""}${computedG > 0 ? `${computedG} g` : ""}`.trim();
  const unitSize = isPieceUnit ? product?.unit || "10 pieces" : rawUnitSize;
  const [quantity, setQuantity] = useState(isPieceUnit ? 0 : 1);

  const handleAddToCart = () => {
    if (!product || quantity <= 0) return;
    setIsAdding(true);
    addToCart(product, quantity, unitSize);
    setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  // Check if product is loaded yet to prevent flashes
  if (!id) return null;

  if (!product) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark flex flex-col items-center justify-center py-24 text-center px-6">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-gold mb-6 border border-gold/25 shadow-inner">
          <Leaf className="w-10 h-10 animate-pulse text-gold" />
        </div>
        <h1 className="text-3xl font-serif font-black text-cream mb-3">
          Product Not Found
        </h1>
        <p className="text-cream/70 max-w-md mb-8">
          The delicacy you are looking for does not exist or has been removed
          from our kitchen catalog.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-gold hover:bg-white hover:text-maroon text-maroon font-bold px-6 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </Link>
      </main>
    );
  }

  // Multipliers for weight calculation
  // Total weight/pieces summary
  const unitFactor = getMultiplier(product, unitSize);
  const totalWeight = quantity * unitFactor;
  const totalPieces = quantity;

  const selectedUnitPrice = product.price * getMultiplier(product, unitSize);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "LKR",
      maximumFractionDigits: 0,
    }).format(value);

  const orderRequestDetails = isPieceUnit
    ? quantity > 0
      ? `${quantity} pieces`
      : "a preferred quantity"
    : `Size: ${unitSize}, Qty: ${quantity}`;

  const directWhatsappUrl = `https://wa.me/94766341818?text=${encodeURIComponent(
    `Hello Bommi Sweets,\n\nI am interested in *${product.name}* (${orderRequestDetails}).\nCurrent listed price: ${formatCurrency(selectedUnitPrice)}.\nPlease share the final quote, availability, and delivery details.\n\nThank you!`,
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light pt-32 pb-16 md:pt-36 md:pb-24 no-footer">
      <div className="w-full px-4 md:px-6">
        {/* Navigation row with Back button */}
        <div className="mb-10 lg:mb-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-cream hover:text-gold transition-colors duration-300 font-bold text-sm uppercase tracking-wider group w-fit"
          >
            <span className="w-8 h-8 rounded-full bg-white/10 text-cream group-hover:bg-gold group-hover:text-white flex items-center justify-center transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </span>
            <span>Back</span>
          </Link>
        </div>

        {/* Dynamic PDP Details Grid split into 2 massive cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-5">
          {/* Left Column: Landscape/Portrait High-Resolution Gallery Image Showcase */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-none lg:min-h-[60vh] lg:h-full rounded-3xl overflow-hidden shadow-2xl border border-gold/15 bg-cream-dark"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

              {product.isSpecial && (
                <div className="absolute top-6 left-6 bg-maroon text-gold font-serif font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full border border-gold/40 shadow-lg backdrop-blur-sm bg-maroon/95 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse text-gold" />
                  <span>★ Special Item</span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Clean Premium Control Hub */}
          <div className="lg:col-span-5 w-full bg-white p-6 sm:p-8 lg:p-7 xl:p-8 rounded-3xl border-2 border-gold/35 shadow-xl space-y-5 lg:space-y-6 lg:min-h-[60vh] lg:h-full">
            {/* Title Block */}
            <div>
              <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest block mb-2">
                {product.type === "sweet"
                  ? "Traditional Sweet"
                  : "Spicy & Savory Snack"}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-maroon leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Editorial Description Text block */}
            <p className="text-gray-500 leading-relaxed font-sans text-sm md:text-base">
              {product.description}
            </p>

            {/* Price summary for selected size */}
            <div className="rounded-3xl border border-gold/20 bg-cream-dark/80 p-4 mb-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest block mb-1">
                    Price
                  </span>
                  <div className="text-4xl font-black text-maroon">
                    {formatCurrency(product.price)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest block mb-1">
                    Weight
                  </span>
                  <div className="text-sm text-maroon/80 font-bold">
                    {product.unit}
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Packaging Selectors — weight options for kg items, quick-pick for piece items */}
            {!isPieceUnit && (
              <div className="space-y-3">
                <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest block">
                  Select Packaging Weight
                </span>
                <div className="flex items-center gap-4">
                  {/* Kilograms Selector */}
                  <div className="flex flex-col flex-1">
                    <label className="text-[10px] text-maroon/60 font-bold uppercase tracking-wider mb-1">
                      Kilograms
                    </label>
                    <select
                      value={kgSelection}
                      onChange={(e) => setKgSelection(parseInt(e.target.value))}
                      className="w-full h-11 px-3 text-sm font-black text-maroon border-2 border-gold/40 rounded-xl bg-cream-dark/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 cursor-pointer"
                    >
                      {[0, 1, 2, 3, 4, 5, 10].map((kg) => (
                        <option key={kg} value={kg}>
                          {kg} kg
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Grams Selector */}
                  <div className="flex flex-col flex-1">
                    <label className="text-[10px] text-maroon/60 font-bold uppercase tracking-wider mb-1">
                      Grams
                    </label>
                    <select
                      value={gSelection}
                      onChange={(e) => setGSelection(parseInt(e.target.value))}
                      className="w-full h-11 px-3 text-sm font-black text-maroon border-2 border-gold/40 rounded-xl bg-cream-dark/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 cursor-pointer"
                    >
                      {[0, 250, 500, 750].map((g) => (
                        <option key={g} value={g}>
                          {g} g
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Custom input + quick-select for piece-based items */}
            {isPieceUnit && (
              <div className="space-y-3">
                <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest block">
                  No. of Pieces
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <input
                      id="piece-qty"
                      type="number"
                      min={0}
                      value={quantity === 0 ? "" : quantity}
                      onChange={(e) => {
                        if (e.target.value === "") {
                          setQuantity(0);
                          return;
                        }
                        const val = parseInt(e.target.value, 10);
                        if (!isNaN(val) && val >= 0) {
                          setQuantity(val);
                        }
                      }}
                      placeholder="0"
                      className="w-20 h-11 text-center text-base font-black text-maroon border-2 border-gold/40 rounded-xl bg-cream-dark/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 shadow-sm appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                      style={{ MozAppearance: "textfield" }}
                    />
                  </div>
                  <span className="text-maroon/30 text-xs font-bold">
                    Quick:
                  </span>
                  {[10, 20, 50].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setQuantity(n)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide text-center transition-all duration-300 border cursor-pointer ${
                        quantity === n
                          ? "bg-maroon text-cream border-maroon shadow-md font-extrabold"
                          : "bg-cream-dark/30 text-maroon border-gold/25 hover:border-gold/60"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Weight / Order Price Summary Row */}
            <div className="flex flex-col gap-4 pt-1 border-t border-maroon/5 pt-6">
              <div className="flex items-center gap-4">


                <div className="flex-1 grid gap-3 sm:grid-cols-2">
                  <div className="text-right">
                    <span className="text-maroon font-bold font-sans text-sm block">
                      {isPieceUnit ? "Total Pieces:" : "Total Order Weight:"}
                    </span>
                    <span className="text-gold font-extrabold text-base block mt-0.5">
                      {isPieceUnit ? (quantity > 0 ? `${quantity} pieces` : "-") : unitSize}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-maroon font-bold font-sans text-sm block">
                      Order Price:
                    </span>
                    <span className="text-gold font-extrabold text-base block mt-0.5">
                      {quantity > 0
                        ? formatCurrency(selectedUnitPrice * quantity)
                        : "-"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Notice & Order Buttons */}
            <div className="border-t border-maroon/10 pt-6 flex flex-col gap-4">
              {/* Premium Pricing Inquiry Notice */}
              <div className="flex items-center gap-3 bg-cream-dark/25 p-4 rounded-2xl border border-gold/25 mb-2">
                <Sparkles className="w-5 h-5 text-gold shrink-0 animate-pulse" />
                <div className="text-left">
                  <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest block mb-0.5">
                    Pricing Info
                  </span>
                  <p className="text-xs font-bold text-maroon leading-snug">
                    At BOMMI SWEETS, every order is freshly prepared with care
                    using traditional recipes. Kindly allow 2 days for
                    preparation so we can deliver you the freshest homemade
                    taste.
                  </p>
                </div>
              </div>

              {/* Direct Order Button */}
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 font-bold py-4.5 px-6 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-md ${
                  quantity <= 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
                    : "bg-[#25D366] hover:bg-[#1ebd54] text-white hover:shadow-lg hover:scale-[1.02]"
                }`}
              >
                <Send className="w-4 h-4 fill-white shrink-0" />
                <span>Place Order via WhatsApp</span>
              </a>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAdding || quantity <= 0}
                className={`w-full inline-flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border-2 cursor-pointer ${
                  isAdding
                    ? "bg-[#25D366] text-white border-transparent"
                    : quantity <= 0
                      ? "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "border-maroon bg-white hover:bg-gold/10 text-maroon hover:text-gold hover:border-gold"
                }`}
              >
                {isAdding ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-cream animate-ping shrink-0" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 shrink-0" />
                    <span>
                      {product && isInCart(product.id)
                        ? "Update Cart"
                        : "Add to Cart"}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
