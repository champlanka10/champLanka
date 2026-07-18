"use client";
import Image from "next/image";
import { ShoppingCart, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import heroSweets from "@/asserts/hero-sweets.jpg";
import dodhal from "@/asserts/Dodhal.jpeg";
import dates from "@/asserts/dates-laddu.jpeg";
import boonthi_laddu from "@/asserts/Boonthi Laddu.png";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(value);

// Import the Product interface for type safety
import { Product } from "@/components/products/ProductData";

const specialProducts: Product[] = [
  {
    id: "dates-laddu",
    name: "Dates Laddu",
    description: "This Dates Laddu is made with premium soft dates, roasted peanuts, creamy condensed milk, and freshly grated coconut, blended together to create a rich, chewy texture and a naturally sweet, nutritious, and indulgent taste experience in every bite.",
    price: 500,
    unit: "250 g",
    image: dates,
    type: "sweet",
    isSpecial: true,
    category: "laddu",
  },
  {
    id: "dodhal",
    name: "Dodhal",
    description:
      "This classic Dodol combines fresh coconut milk, fine rice flour, pure sugar, and aromatic cardamom, slowly cooked to perfection for a rich, smooth, and indulgent taste experience.",
    price: 500,
    unit: "250 g",
    image: dodhal,
    type: "sweet",
    isSpecial: true,
    category: "sweet",
  },
  {
    id: "boonthi-laddu",
    name: "Boonthi Laddu",
    description: "This Boonthi Laddu is made from fine gram flour batter, deep-fried into golden boonthi pearls, then blended with pure sugar syrup, aromatic cardamom powder, and rich ghee, creating soft, melt-in-the-mouth laddus with a perfectly sweet, fragrant, and indulgent taste experience.",
    price: 500,
    unit: "10 pieces",
    image: boonthi_laddu,
    type: "sweet",
    isSpecial: true,
    category: "laddu",
  },
];

export default function ProductShowcase() {
  const { addToCart, cartItems, setIsCartOpen } = useCart();

  const isProductInCart = (pid: string) =>
    cartItems.some((item) => item.product.id === pid);
  return (
    <section className="py-24 bg-[#FDF8F5] overflow-hidden">
      <div className="w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-28 flex flex-col items-center"
        >
          <h4 className="text-gold font-bold tracking-widest text-sm md:text-base uppercase mb-4">
            Signature Items
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-maroon mb-6 leading-tight">
            Featured Delicacies
          </h2>
          <div className="flex items-center gap-3 mt-6">
            <div className="h-1.5 w-20 bg-gold rounded-full"></div>
            <Leaf className="w-7 h-7 text-gold" />
          </div>
        </motion.div>
        <div className="h-10 md:h-14 lg:h-16" />{" "}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          {specialProducts.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gold/20 group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(182,138,46,0.15)] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-maroon text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Special
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-serif font-bold text-maroon mb-3">
                  {product.name}
                </h3>
                <div className="mb-3 text-lg font-bold text-gold">
                  {product.unit === "10 pieces"
                    ? `${formatCurrency(product.price)} / 10 pcs`
                    : `${formatCurrency(product.price)} / ${product.unit}`}
                </div>
                <p className="text-gray-500 mb-8 flex-grow leading-relaxed text-lg">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-baseline gap-1.5 text-sm font-serif font-extrabold text-maroon">
                    <span>Available in:</span>
                    <span className="text-gold tracking-wider font-sans text-xs font-black">
                      {product.unit === "10 pieces"
                        ? "Pieces (pcs)"
                        : "Grams (g)"}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/94766341818?text=${encodeURIComponent(
                        `Hello Bommi Sweets,\n\nI am interested in *${product.name}*. Please share the price, availability, and packaging options for this item.\n\nThank you!`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-colors duration-300 shadow-sm cursor-pointer"
                      title="Inquire price via WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-6 h-6 fill-current"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.7c-33.1 0-65.5-8.9-94-25.8l-6.7-4-69.8 18.3L72 334.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </a>
                    <button
                      onClick={() => {
                        if (isProductInCart(product.id)) {
                          setIsCartOpen(true);
                        } else {
                          addToCart(product, 1, product.unit);
                        }
                      }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm ${
                        isProductInCart(product.id)
                          ? "bg-maroon text-gold hover:bg-maroon-dark hover:text-white"
                          : "bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                      }`}
                      title={
                        isProductInCart(product.id) ? "In Cart" : "Add to Cart"
                      }
                    >
                      {isProductInCart(product.id) ? (
                        <span className="text-xs font-extrabold">✓ In</span>
                      ) : (
                        <ShoppingCart className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
