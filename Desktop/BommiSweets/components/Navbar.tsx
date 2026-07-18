"use client";
import Link from "next/link";
import Image from "next/image";
import {
  MenuIcon,
  XIcon,
  Home,
  ShoppingBag,
  ShoppingCart,
  Info,
  Phone,
  Minus,
  Plus,
  Trash2,
  Send,
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart, getMultiplier, getUnitOptions } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: ShoppingBag }, // updated to match product page route
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();
  const [IsMobileView, setIsMobileView] = useState(false);
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    updateUnitSize,
    toggleSelectItem,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const [scrolled, setScrolled] = useState(false);

  // Array of keys for items that are selected (checked)
  const selectedItemKeys = cartItems
    .filter((i) => i.selected)
    .map((i) => `${i.product.id}-${i.unitSize}`);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 700px)");
    const handleResize = () => {
      if (desktopQuery.matches) {
        setIsMobileView(false);
      }
    };

    handleResize();
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", handleResize);
    } else {
      desktopQuery.addListener(handleResize);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      if (desktopQuery.removeEventListener) {
        desktopQuery.removeEventListener("change", handleResize);
      } else {
        desktopQuery.removeListener(handleResize);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-cream shadow-md border-b border-maroon/10" : "bg-transparent"}`}
      >
        {/* Navigation Bar */}
        <div className="relative h-20 md:h-24 flex items-center justify-between w-full px-4 md:px-6">
          {/* logo */}
          <Link href="/" className="relative flex items-center shrink-0">
            {/* White/Cream Logo (Unscrolled) */}
            <Image
              src="/logo-1.png"
              alt="Bommi Sweets"
              width={130}
              height={80}
              priority
              className={`w-[100px] md:w-[130px] h-auto object-contain transition-opacity duration-500 ease-in-out ${scrolled ? "opacity-0" : "opacity-100"}`}
              style={{ height: "auto" }}
            />
            {/* Maroon Logo (Scrolled) */}
            <Image
              src="/logo-2.png"
              alt="Bommi Sweets"
              width={130}
              height={80}
              priority
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-[100px] md:w-[130px] h-auto object-contain transition-opacity duration-500 ease-in-out ${scrolled ? "opacity-100" : "opacity-0"}`}
              style={{ height: "auto" }}
            />
          </Link>

          {/* navigation links for big screens (Centered) */}
          <div className="hidden desktop:flex items-center gap-6 md:gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`group relative text-[15px] font-bold transition-colors duration-200 tracking-widest uppercase ${
                    isActive
                      ? "text-gold"
                      : scrolled
                        ? "text-maroon hover:text-gold"
                        : "text-cream hover:text-gold"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          <div className="hidden desktop:flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={`flex items-center gap-3 transition-colors px-5 py-2.5 rounded-full border shadow-sm backdrop-blur-fallback ${scrolled ? "text-maroon border-maroon/20 hover:text-gold hover:border-gold bg-white/50" : "text-cream border-cream/20 hover:text-gold hover:border-gold bg-white/10 backdrop-blur-sm"}`}
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-bold text-sm tracking-wide">
                Cart ({cartCount})
              </span>
            </button>
          </div>

          {/* hamburger + cart for small screens — phones only (< 640px) */}
          <div className="flex items-center gap-4 desktop:hidden">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={`relative rounded-full p-2 border transition-colors shadow-sm backdrop-blur-fallback ${scrolled ? "bg-white/50 border-maroon/20 text-maroon hover:text-gold hover:border-gold" : "bg-white/10 backdrop-blur-sm border-cream/20 text-cream hover:text-gold hover:border-gold"}`}
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gold text-[9px] font-black text-cream shadow-md border border-maroon/10 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className={`rounded-md p-1 transition-colors hover:text-gold ${scrolled ? "text-maroon" : "text-cream"}`}
              onClick={() => setIsMobileView(!IsMobileView)}
              aria-label="Open menu"
            >
              <MenuIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* to overlay screen for mobile view */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${IsMobileView ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileView(false)}
      />

      {/* mobile side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm z-[70] transform transition-transform duration-300 ease-in-out ${IsMobileView ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* drawer background */}
        <div className="absolute inset-0 bg-cream shadow-2xl" />

        {/* decorative gold line on left edge */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gold" />

        {/* drawer content */}
        <div className="relative h-full flex flex-col px-6 py-6">
          {/* header with logo & close button */}
          <div className="flex items-center justify-between pb-6 border-b border-maroon/10">
            <Image
              src="/logo-2.png"
              alt="Bommi Sweets"
              width={80}
              height={80}
              className="w-[100px] h-auto object-contain"
              style={{ height: "auto" }}
            />
            <button
              onClick={() => setIsMobileView(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-maroon/5 text-maroon hover:bg-maroon hover:text-cream transition-all duration-200"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* nav links */}
          <nav className="flex flex-col mt-8 gap-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMobileView(false)}
                  className={`group flex items-center gap-4 px-4 py-4 rounded-2xl font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-maroon text-cream shadow-md border border-gold/20"
                      : "text-maroon hover:bg-maroon hover:text-cream"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                      isActive
                        ? "bg-cream/20 text-cream"
                        : "bg-maroon/10 group-hover:bg-cream/20"
                    }`}
                  >
                    <IconComponent
                      className={`h-5 w-5 transition-colors duration-200 ${
                        isActive
                          ? "text-gold"
                          : "text-maroon group-hover:text-cream"
                      }`}
                    />
                  </span>
                  <span className="text-lg tracking-wide uppercase">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Cart sliding drawer */}
      <div
        className={`fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden={!isCartOpen}
      >
        <div
          id="cart-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
          className={`h-full w-full max-w-md bg-cream shadow-2xl border-l-4 border-gold transition-transform duration-300 ease-out flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-maroon/10 shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-gold animate-pulse" />
              <h3 className="text-xl font-bold text-maroon font-serif">
                Your Cart {cartCount > 0 && `(${cartCount})`}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-maroon/5 text-maroon hover:bg-maroon hover:text-cream transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Body (Scrollable) */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <ShoppingCart className="w-16 h-16 text-gold/45 mb-4 animate-bounce" />
                <h4 className="text-lg font-bold text-maroon mb-1 font-serif">
                  Your Cart is Empty
                </h4>
                <p className="text-maroon/70 text-sm max-w-[260px] mb-6">
                  Looks like you haven't added any authentic sweets yet!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-maroon text-cream rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors cursor-pointer shadow-md"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const unitOptions = getUnitOptions(item.product);
                const itemKey = `${item.product.id}-${item.unitSize}`;

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gold/15 shadow-sm hover:border-gold/30 hover:shadow-md transition-all duration-300"
                  >
                    <input
                      type="checkbox"
                      checked={selectedItemKeys.includes(itemKey)}
                      onChange={() =>
                        toggleSelectItem(item.product.id, item.unitSize)
                      }
                      className="accent-gold w-4 h-4 cursor-pointer"
                    />
                    {/* Item Image */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-cream-dark shrink-0 border border-gold/10">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-grow flex flex-col justify-between min-w-0">
                      <div>
                        <h4 className="text-xs sm:text-sm font-serif font-bold text-maroon line-clamp-1 leading-tight mb-1">
                          {item.product.name}
                        </h4>

                        {/* Size Selection inside Cart — hidden for piece items */}
                        {!item.product.unit.includes("piece") && (
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[9px] text-gold font-extrabold uppercase tracking-wide">
                              Weight:
                            </span>
                            <span className="text-maroon text-[10px] font-bold px-1.5 py-0.5 bg-cream-dark/30 border border-gold/20 rounded">
                              {item.unitSize}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Quantity & Actions Row */}
                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Selector - Only for piece items */}
                        {item.product.unit.includes("piece") && (
                          <div className="flex items-center border border-gold/30 rounded-lg bg-cream-dark/10 p-0.5 text-[10px]">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.unitSize,
                                  item.quantity - 1,
                                )
                              }
                              className="w-5 h-5 rounded bg-white hover:bg-gold hover:text-white text-maroon flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="w-6 text-center font-black text-maroon text-[11px]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.unitSize,
                                  item.quantity + 1,
                                )
                              }
                              className="w-5 h-5 rounded bg-white hover:bg-gold hover:text-white text-maroon flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        )}

                        {/* Action Status & Trash */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold text-gold uppercase tracking-wider bg-gold/5 px-2 py-0.5 rounded border border-gold/15">
                            Inquiry
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.product.id, item.unitSize)
                            }
                            className="text-gray-400 hover:text-maroon transition-colors p-1 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Drawer Footer (Sticky) */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-maroon/10 bg-white shrink-0 space-y-4">
              {/* Calculations Block */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                  <span>Selected items:</span>
                  <span className="font-bold text-maroon">
                    {selectedItemKeys.length}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-cream-dark/15 p-3 rounded-xl border border-gold/15">
                  <span className="text-xs sm:text-sm font-serif font-black text-maroon">
                    Estimated Total:
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-gold uppercase tracking-wider font-sans">
                    {selectedItemKeys.length > 0
                      ? `LKR ${cartTotal.toLocaleString()}`
                      : "Select items to see total"}
                  </span>
                </div>
              </div>

              {/* Checkout Button via WhatsApp */}
              <button
                type="button"
                onClick={() => {
                  const selectedItemsData = cartItems.filter((item) =>
                    selectedItemKeys.includes(
                      `${item.product.id}-${item.unitSize}`,
                    ),
                  );
                  if (selectedItemsData.length === 0) return;
                  const intro =
                    "Hello Bommi Sweets,\n\nCould you please let me know how much each of these items is?\n\n";
                  const itemsList = selectedItemsData
                    .map((item) => {
                      if (item.product.unit.includes("piece")) {
                        return `- *${item.product.name}* (${item.quantity} pieces) — How much is this item?`;
                      }
                      return `- *${item.product.name}* (Size/Pack: ${item.unitSize}, Qty: ${item.quantity}) — How much is this item?`;
                    })
                    .join("\n");
                  const totalSection = `\n\nThank you!`;

                  const whatsappUrl = `https://wa.me/94766341818?text=${encodeURIComponent(intro + itemsList + totalSection)}`;
                  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd54] text-white font-bold py-3.5 px-6 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>Place Order via WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
