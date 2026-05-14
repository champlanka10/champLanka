export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: string;
  cover: string;
  body: string[];
}

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import ella from "@/assets/dest-ella.jpg";
import tea from "@/assets/pkg-tea.jpg";

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-to-visit-sri-lanka",
    title: "When is the best time to visit Sri Lanka?",
    excerpt:
      "Sri Lanka has two monsoons hitting opposite coasts — meaning somewhere on the island is in peak season year round. Here's how to plan.",
    date: "2026-04-12",
    readMinutes: 6,
    category: "Travel Tips",
    cover: ella,
    body: [
      "Sri Lanka's weather is shaped by two monsoons. The southwest (Yala) monsoon runs May to September and soaks the south and west coasts plus the hill country. The northeast (Maha) monsoon runs October to January and wets the north and east.",
      "For the south coast, hill country and Cultural Triangle, December to March is ideal — sunny days, low humidity, calm seas at Mirissa and Galle.",
      "For the east coast — Trincomalee, Pasikuda, Arugam Bay — May to September is glorious. This is also the best window for Yala leopard sightings before the park closes in September.",
      "Shoulder seasons (April and September) often offer the best value. Rain is rarely all-day; mornings are usually clear.",
    ],
  },
  {
    slug: "sri-lankan-food-guide",
    title: "A traveller's guide to Sri Lankan food",
    excerpt:
      "Beyond rice and curry — kottu, hoppers, lamprais and the spice trail. Where to eat, what to order, and how spicy is too spicy.",
    date: "2026-03-28",
    readMinutes: 8,
    category: "Food & Culture",
    cover: gallery2,
    body: [
      "Sri Lankan cuisine is its own thing — bolder than southern Indian, sweeter than Thai, deeply rooted in coconut, curry leaf and pandan.",
      "Start with hoppers (appa) for breakfast: bowl-shaped pancakes with a soft egg in the centre. Pair with seeni sambol and pol sambol.",
      "For dinner, kottu is a national obsession — roti chopped on hot iron with vegetables, egg or cheese. The rhythmic clang from streetside stalls is the soundtrack of Colombo nights.",
      "And yes, ask for 'mild' if you're sensitive to chilli. Champ Lanka guides know the perfect family-run spots in every town.",
    ],
  },
  {
    slug: "kandy-perahera-festival",
    title: "Inside the Esala Perahera festival in Kandy",
    excerpt:
      "Once a year Kandy explodes into ten nights of fire dancers, drummers and 100 caparisoned elephants. Here's what to expect.",
    date: "2026-03-10",
    readMinutes: 5,
    category: "Festivals",
    cover: gallery6,
    body: [
      "The Esala Perahera is one of Asia's most spectacular religious festivals, held every July or August in Kandy.",
      "The procession honours the Sacred Tooth Relic of the Buddha. Highlights include whip-crackers, fire-breathers, traditional dancers, drummers and a magnificent tusker carrying the relic casket.",
      "Book seats well in advance — they sell out months ahead. We arrange premium grandstand views and hotels within walking distance of the parade route.",
    ],
  },
  {
    slug: "train-kandy-to-ella",
    title: "How to ride the Kandy-to-Ella train",
    excerpt:
      "It's been called the world's most beautiful train journey. Here's how to book the right class, the right side, and the right day.",
    date: "2026-02-22",
    readMinutes: 7,
    category: "Travel Tips",
    cover: tea,
    body: [
      "The Kandy-to-Ella line winds through tea estates, waterfalls and bridges in the central highlands. The most scenic stretch is Nanu Oya to Ella (about 4 hours).",
      "Book Reserved 1st Class Observation Saloon if you want a guaranteed seat with panoramic windows. 2nd Class Reserved is also great and slightly cheaper.",
      "Sit on the right side travelling from Kandy to Ella for the best views (left side coming back).",
      "We pre-book all train tickets 30+ days ahead — they sell out quickly in season.",
    ],
  },
  {
    slug: "responsible-wildlife-safaris",
    title: "How to do a responsible wildlife safari",
    excerpt:
      "Yala can get crowded. Here's how to find quieter parks, choose ethical guides and actually see leopards without the traffic jam.",
    date: "2026-01-30",
    readMinutes: 6,
    category: "Wildlife",
    cover: gallery1,
    body: [
      "Yala Block 1 has the world's highest leopard density — but in peak hours dozens of jeeps can converge on a single sighting.",
      "We recommend dawn drives (5:30 a.m. gate opening), Block 5 for fewer crowds, or alternative parks like Wilpattu and Kumana.",
      "Always choose drivers who keep distance, switch off engines near animals, and don't bait or chase. We work only with certified naturalists.",
    ],
  },
];
