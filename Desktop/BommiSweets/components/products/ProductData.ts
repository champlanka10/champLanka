import { StaticImageData } from "next/image";
import heroSweets from "@/asserts/hero-sweets.jpg";
import mainImage from "@/asserts/main.jpg";
import dodhal from "@/asserts/Dodhal.jpeg";
import paytramPalakaaram from "@/asserts/Paytram Palakaaram.jpeg";
import sippiPalakaaram from "@/asserts/Sippi Palakaaram.jpeg";
import ariyatharam from "@/asserts/Ariyatharam.jpeg";
import kokkis from "@/asserts/Kokkis.jpeg";
import muttaiMaa from "@/asserts/Muttai Maa.png";
import maskat from "@/asserts/Maskat.png";
import mysorePak from "@/asserts/Mysore Pak.jpeg";
import boonthi from "@/asserts/Boonthi.png";
import friedPeanut from "@/asserts/Fried Peanut.png";
import garlicMurukku from "@/asserts/Garlic Murukku.png";
import goldenMurukku from "@/asserts/goldenMurukku.jpeg";
import paruthithuraiVadai from "@/asserts/Paruthithurai Vadai.jpeg";
import SpicyMurukku from "@/asserts/spicy-murukku.jpeg";
import pakooda from "@/asserts/Pakooda.png";
import DatesLaddu from "@/asserts/dates-laddu.jpeg";
import BoonthiLaddu from "@/asserts/Boonthi Laddu.png";
import RavaiLaddu from "@/asserts/Ravai Laddu.png";
import babyMixture from "@/asserts/baby Mixsure.png";
import spicyMixture from "@/asserts/Spicy Mixture.png";
import SauceCassavaChips from "@/asserts/Sauce Cassava Chips.png";
import CassavaChips from "@/asserts/Cassava Chips.png";
import sampleImage from "@/asserts/sample.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: StaticImageData;
  type: "sweet" | "spicy";
  isSpecial: boolean;
  category?: "sweet" | "spicy" | "laddu" | "chips" | "healthy-mix";
}

export const products: Product[] = [
  // SPECIAL ITEMS (SWEETS)
  {
    id: "dates-laddu",
    name: "Dates Laddu",
    description: "This Dates Laddu is made with premium soft dates, roasted peanuts, creamy condensed milk, and freshly grated coconut, blended together to create a rich, chewy texture and a naturally sweet, nutritious, and indulgent taste experience in every bite.",
    price: 500,
    unit: "250 g",
    image: DatesLaddu,
    type: "sweet",
    category: "laddu",
    isSpecial: true,
  },
  {
    id: "dodhal",
    name: "Dodhal",
    description: "This classic Dodol combines fresh coconut milk, fine rice flour, pure sugar, and aromatic cardamom, slowly cooked to perfection for a rich, smooth, and indulgent taste experience.",
    price: 500,
    unit: "250 g",
    image: dodhal,
    type: "sweet",
    category: "sweet",
    isSpecial: true,
  },
  {
    id: "boonthi-laddu",
    name: "Boonthi Laddu",
    description: "This Boonthi Laddu is made from fine gram flour batter, deep-fried into golden boonthi pearls, then blended with pure sugar syrup, aromatic cardamom powder, and rich ghee, creating soft, melt-in-the-mouth laddus with a perfectly sweet, fragrant, and indulgent taste experience.",
    price: 500,
    unit: "10 pieces",
    image: BoonthiLaddu,
    type: "sweet",
    category: "laddu",
    isSpecial: true,
  },
  // REGULAR SWEETS
  {
    id: "ravai-laddu",
    name: "Ravai Laddu",
    description: "This Ravai Laddu is made with premium semolina (rava), creamy condensed milk, aromatic cardamom powder, and crunchy roasted peanuts, blended together to create a soft, rich texture with a perfectly balanced sweetness and a delightful homemade taste in every bite.",
    price: 450,
    unit: "250 g",
    image: RavaiLaddu,
    type: "sweet",
    category: "laddu",
    isSpecial: false,
  },
  {
    id: "paytram-palakaaram",
    name: "Paytram Palakaaram",
    description: "Crafted using traditional Sri Lankan recipes, this Payatram Urundai is made with roasted green gram (mung beans), pure jaggery, freshly grated coconut, and aromatic cardamom powder, carefully blended to create a rich, wholesome texture with a naturally sweet and authentic homemade taste in every bite.",
    price: 400,
    unit: "250 g",
    image: paytramPalakaaram,
    type: "sweet",
    category: "sweet",
    isSpecial: false,
  },
  {
    id: "sippi-palakaaram",
    name: "Sippi Palakaaram",
    description: "This classic Sippi Palakaram is made with fine rice flour, wholesome urid flour, rich coconut milk, pure sugar melt, and aromatic cardamom powder, delivering a soft texture and a beautifully balanced, fragrant sweet taste experience.",
    price: 400,
    unit: "250 g",
    image: sippiPalakaaram,
    type: "sweet",
    category: "sweet",
    isSpecial: false,
  },
  {
    id: "ariyatharam",
    name: "Ariyatharam",
    description: "This classic Ariyatharam is made with finely blended rice flour, pure jaggery, and aromatic cardamom powder, creating a rustic, grainy texture with a deep caramel sweetness and a warm, authentic homemade flavor.",
    price: 400,
    unit: "250 g",
    image: ariyatharam,
    type: "sweet",
    category: "sweet",
    isSpecial: false,
  },
  {
    id: "kokkis",
    name: "Kokkis",
    description: "These crispy Kokkis are made with a blend of urid flour and rice flour, enriched with creamy coconut milk and a hint of sugar, delivering a light, crunchy texture with a subtle sweetness and authentic homemade flavor.",
    price: 550,
    unit: "250 g",
    image: kokkis,
    type: "sweet",
    category: "sweet",
    isSpecial: false,
  },
  {
    id: "muttai-maa",
    name: "Muttai Maa",
    description: "This Muttai Maa is made with a blend of urid flour and rice flour, enriched with fresh egg, pure sugar, and a touch of sesame oil, then carefully prepared to achieve a soft, rich texture and a mildly sweet, aromatic flavor with a unique homemade taste experience.",
    price: 500,
    unit: "250 g",
    image: muttaiMaa,
    type: "sweet",
    category: "healthy-mix",
    isSpecial: false,
  },
  {
    id: "maskat",
    name: "Maskat",
    description: "This classic Maskat Halwa is made with premium wheat flour, pure sugar, rich ghee, aromatic cardamom, and carefully selected cashew nuts, creating a smooth, glossy texture and a deeply rich, indulgent sweet taste experience.",
    price: 400,
    unit: "250 g",
    image: maskat,
    type: "sweet",
    category: "sweet",
    isSpecial: false,
  },
  {
    id: "mysore-pak",
    name: "Mysore Pak",
    description: "This classic Mysore Pak is made with premium gram flour, pure sugar, rich cow ghee, and a touch of oil, creating a golden, melt-in-the-mouth texture with a deeply rich, buttery sweetness and indulgent aroma.",
    price: 500,
    unit: "250 g",
    image: mysorePak,
    type: "sweet",
    category: "sweet",
    isSpecial: false,
  },
  {
    id: "boonthi",
    name: "Boonthi",
    description: "This classic Boonthi is made from fine gram flour batter, deep-fried into golden pearls, then blended with pure sugar syrup, aromatic cardamom powder, and enriched with a touch of ghee, delivering a crisp-yet-soft texture with a sweet, fragrant, and indulgent taste experience.",
    price: 400,
    unit: "250 g",
    image: boonthi,
    type: "sweet",
    category: "sweet",
    isSpecial: false,
  },
  // SPICY SNACKS - SPICY
  {
    id: "golden-murukku",
    name: "Golden Murukku",
    description: "This Golden Murukku is made with a perfect blend of rice flour and urid flour, seasoned with aromatic spices and sprinkled with sesame seeds, then deep-fried to a crisp golden perfection, delivering a crunchy texture and a rich, savory, and flavorful bite in every piece.",
    price: 400,
    unit: "250 g",
    image: goldenMurukku,
    type: "spicy",
    category: "spicy",
    isSpecial: false,
  },
  {
    id: "spicy-murukku",
    name: "Spicy Murukku",
    description: "This Spicy Murukku is made with a balanced blend of rice flour, wheat flour, and gram flour, seasoned with aromatic spices, sesame seeds, and a hint of butter, then deep-fried to a perfect golden crisp, delivering a crunchy texture with a bold, spicy, and irresistibly flavorful taste in every bite.",
    price: 400,
    unit: "250 g",
    image: SpicyMurukku,
    type: "spicy",
    category: "spicy",
    isSpecial: false,
  },
  {
    id: "garlic-murukku",
    name: "Garlic Murukku",
    description: "This Garlic Murukku is made with a blend of fine flour, salt, and aromatic garlic powder, then deep-fried to a golden crisp, delivering a crunchy texture with a bold garlic flavor and a perfectly savory, addictive taste experience.",
    price: 300,
    unit: "250 g",
    image: garlicMurukku,
    type: "spicy",
    category: "spicy",
    isSpecial: false,
  },
  {
    id: "paruthithurai-vadai",
    name: "Paruthithurai Vadai",
    description: "This Paruthithurai Vadai is made with a blend of urid dhal and flour, mixed with chilli flakes, aromatic spices, salt, and fresh curry leaves, then deep-fried to a crispy golden perfection, delivering a crunchy texture with a bold, spicy, and authentically flavorful taste in every bite.",
    price: 400,
    unit: "250 g",
    image: paruthithuraiVadai,
    type: "spicy",
    category: "spicy",
    isSpecial: false,
  },
  // SPICY SNACKS - CHIPS & MIXTURES
  {
    id: "spicy-mixture",
    name: "Spicy Mixture",
    description: "This Garlic Spicy Mixture is made with crunchy gram flour sev, fried peanuts, roasted dhal, and a blend of aromatic spices, salt, and fragrant garlic, creating a bold, crispy, and intensely flavorful snack with a perfect balance of spice, aroma, and crunch in every bite.",
    price: 300,
    unit: "250 g",
    image: spicyMixture,
    type: "spicy",
    category: "chips",
    isSpecial: false,
  },
  {
    id: "baby-mixture",
    name: "Baby Mixture",
    description: "This Baby Mixture is made with crunchy gram flour sev, fried peanuts, and roasted dhal, lightly seasoned with salt and mild spices, creating a soft, non-spicy, and delightfully crunchy snack with a gentle, balanced flavor perfect for all ages.",
    price: 300,
    unit: "250 g",
    image: babyMixture,
    type: "spicy",
    category: "chips",
    isSpecial: false,
  },
  {
    id: "pakooda",
    name: "Pakooda",
    description: "This Pakoda is made with premium gram flour and split gram dhal, blended with aromatic spices, salt, fresh ginger, and garlic, then deep-fried to a golden crisp, delivering a crunchy texture with a rich, savory, and perfectly spiced flavor in every bite.",
    price: 300,
    unit: "250 g",
    image: pakooda,
    type: "spicy",
    category: "spicy",
    isSpecial: false,
  },
  {
    id: "cassava-chips",
    name: "Cassava Chips",
    description: "These Spicy Cassava Chips are made from fresh cassava slices, deep-fried to a perfect crisp, then seasoned with salt and a bold blend of spices, delivering a crunchy texture with a fiery, savory, and irresistibly flavorful taste in every bite.",
    price: 300,
    unit: "250 g",
    image: CassavaChips,
    type: "spicy",
    category: "chips",
    isSpecial: false,
  },
  {
    id: "sauce-cassava-chips",
    name: "Sauce Cassava Chips",
    description: "Our signature crispy cassava chips thoroughly coated in a sweet, tangy, and moderately spicy chili-tomato glaze.",
    price: 400,
    unit: "250 g",
    image: SauceCassavaChips,
    type: "spicy",
    category: "chips",
    isSpecial: false,
  },
  {
    id: "fried-peanut",
    name: "Fried Peanut",
    description: "This Fried Spicy Peanut is made with freshly deep-fried premium peanuts, lightly seasoned with salt and a touch of spice, delivering a crunchy texture and a bold, savory, and irresistibly addictive flavor in every bite.",
    price: 400,
    unit: "250 g",
    image: friedPeanut,
    type: "spicy",
    category: "spicy",
    isSpecial: false,
  },
];
