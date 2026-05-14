import sigiriya from "@/assets/dest-sigiriya.jpg";
import anuradhapura from "@/assets/dest-anuradhapura.jpg";
import mirissa from "@/assets/dest-mirissa.jpg";
import ella from "@/assets/dest-ella.jpg";
import yala from "@/assets/dest-yala.jpg";
import kandy from "@/assets/dest-kandy.jpg";
import galle from "@/assets/dest-galle.jpg";
import polonnaruwa from "@/assets/dest-polonnaruwa.jpg";

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: string;
  image: string;
  description: string;
  highlights: string[];
  bestTime: string;
}

export const destinations: Destination[] = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    tagline: "The Ancient Rock Fortress",
    region: "Cultural Triangle",
    image: sigiriya,
    description:
      "Rising 200 metres from the surrounding jungle, Sigiriya is a UNESCO World Heritage marvel — a 5th-century royal citadel carved into a single monolithic rock.",
    highlights: ["Lion's Paw entrance", "Mirror Wall frescoes", "Royal water gardens", "Summit ruins"],
    bestTime: "Jan – Apr",
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    tagline: "Sacred Ancient City",
    region: "North Central",
    image: anuradhapura,
    description:
      "Sri Lanka's first capital, Anuradhapura is a sprawling sacred city of immense white stupas, sacred Bo trees and 2,500 years of Buddhist heritage.",
    highlights: ["Ruwanwelisaya Stupa", "Sri Maha Bodhi tree", "Jetavanaramaya", "Isurumuniya temple"],
    bestTime: "May – Sep",
  },
  {
    id: "mirissa",
    name: "Mirissa",
    tagline: "Tropical Beach Paradise",
    region: "South Coast",
    image: mirissa,
    description:
      "Crescent of golden sand fringed by palms, with calm turquoise water and the world's best blue-whale watching just offshore.",
    highlights: ["Blue whale safaris", "Coconut Tree Hill", "Secret Beach", "Surfing breaks"],
    bestTime: "Nov – Apr",
  },
  {
    id: "ella",
    name: "Ella",
    tagline: "Scenic Hill Country",
    region: "Central Highlands",
    image: ella,
    description:
      "Mist-wrapped tea country with the iconic Nine Arch Bridge, Little Adam's Peak and the most beautiful train ride on earth.",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls", "Tea estate tours"],
    bestTime: "Jan – Mar",
  },
  {
    id: "yala",
    name: "Yala National Park",
    tagline: "Wildlife Adventure",
    region: "Southeast",
    image: yala,
    description:
      "The world's highest density of leopards, plus elephants, sloth bears, crocodiles and over 200 bird species across savannah and lagoons.",
    highlights: ["Leopard tracking", "Elephant herds", "Birdwatching", "Coastal lagoons"],
    bestTime: "Feb – Jul",
  },
  {
    id: "kandy",
    name: "Kandy",
    tagline: "Cultural Capital",
    region: "Central",
    image: kandy,
    description:
      "Last royal capital of the Sinhalese kings, home to the Temple of the Sacred Tooth Relic and the spectacular Esala Perahera festival.",
    highlights: ["Temple of the Tooth", "Kandy Lake", "Royal Botanical Gardens", "Cultural shows"],
    bestTime: "Jan – Apr",
  },
  {
    id: "galle",
    name: "Galle",
    tagline: "Colonial Coastal Charm",
    region: "South Coast",
    image: galle,
    description:
      "A 17th-century Dutch fortified town with cobbled lanes, boutique cafes, art galleries and ramparts that drop straight into the Indian Ocean.",
    highlights: ["Galle Fort walls", "Lighthouse & ramparts", "Boutique shopping", "Sunset on the bastions"],
    bestTime: "Nov – Apr",
  },
  {
    id: "polonnaruwa",
    name: "Polonnaruwa",
    tagline: "Medieval Royal Capital",
    region: "North Central",
    image: polonnaruwa,
    description:
      "The well-preserved second capital of Sri Lanka, with sublime Buddha statues at Gal Vihara and ruins you can explore by bike.",
    highlights: ["Gal Vihara rock carvings", "Royal Palace ruins", "Quadrangle temples", "Cycling tours"],
    bestTime: "May – Sep",
  },
];
