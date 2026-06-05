import luxury from "@/assets/pkg-luxury.jpg";
import tea from "@/assets/pkg-tea.jpg";
import tiger from "@/assets/pkg-tiger.jpg";
import surf from "@/assets/pkg-surf.jpg";
import cultural from "@/assets/pkg-cultural.jpg";
import adventure from "@/assets/pkg-adventure.jpg";

export type PackageCategory = "Heritage" | "Popular" | "Nature" | "Wildlife" | "Luxury" | "Adventure";

export interface TourPackage {
  id: string;
  name: string;
  category: PackageCategory;
  days: number;
  nights: number;
  priceFrom: number;
  image: string;
  summary: string;
  destinations: string[];
  itinerary: { day: number; title: string; description: string }[];
  includes: string[];
  excludes: string[];
}

export const packages: TourPackage[] = [
  {
    id: "classic-cultural-triangle",
    name: "Classic Cultural Triangle",
    category: "Heritage",
    days: 6,
    nights: 5,
    priceFrom: 320,
    image: cultural,
    summary:
      "Sigiriya, Dambulla, Polonnaruwa, Anuradhapura and Kandy — 2,500 years of Sri Lankan heritage in one unforgettable loop.",
    destinations: ["Sigiriya", "Dambulla", "Polonnaruwa", "Anuradhapura", "Kandy"],
    itinerary: [
      { day: 1, title: "Arrival & Sigiriya", description: "Airport pickup and transfer to Sigiriya. Evening at leisure." },
      { day: 2, title: "Climb the Lion Rock", description: "Sunrise climb of Sigiriya, afternoon Dambulla cave temples." },
      { day: 3, title: "Polonnaruwa by bike", description: "Cycle the medieval ruins, visit Gal Vihara." },
      { day: 4, title: "Anuradhapura sacred city", description: "Stupas, Bo tree and ancient monasteries." },
      { day: 5, title: "Kandy & Temple of the Tooth", description: "Scenic drive, evening cultural dance show." },
      { day: 6, title: "Departure", description: "Transfer back to Colombo airport." },
    ],
    includes: ["5 nights handpicked hotels", "Private A/C vehicle & driver", "All entry tickets", "Daily breakfast"],
    excludes: ["International flights", "Lunch & dinner", "Personal expenses"],
  },
  {
    id: "south-coast-beach-escape",
    name: "South Coast Beach Escape",
    category: "Popular",
    days: 5,
    nights: 4,
    priceFrom: 280,
    image: surf,
    summary:
      "Galle Fort, Mirissa beaches, surf at Weligama and snorkel in Hikkaduwa — pure tropical bliss along the south.",
    destinations: ["Galle", "Unawatuna", "Mirissa", "Weligama"],
    itinerary: [
      { day: 1, title: "Colombo to Galle", description: "Coastal highway, sunset at Galle Fort ramparts." },
      { day: 2, title: "Unawatuna & snorkeling", description: "Beach day, optional turtle sanctuary visit." },
      { day: 3, title: "Mirissa & Coconut Hill", description: "Whale watching at dawn, sunset at Coconut Tree Hill." },
      { day: 4, title: "Weligama surf lessons", description: "Beginner-friendly waves, beach BBQ." },
      { day: 5, title: "Return to Colombo", description: "Stop at Hikkaduwa coral garden en route." },
    ],
    includes: ["4 nights beachfront stay", "Private transfers", "Whale watching ticket", "Daily breakfast"],
    excludes: ["Surf lessons", "Lunch & dinner", "Travel insurance"],
  },
  {
    id: "tea-country-train-journey",
    name: "Tea Country Train Journey",
    category: "Nature",
    days: 4,
    nights: 3,
    priceFrom: 250,
    image: tea,
    summary:
      "Ride the Kandy-to-Ella line — declared one of the world's most beautiful train journeys — through misty highlands.",
    destinations: ["Kandy", "Nuwara Eliya", "Ella"],
    itinerary: [
      { day: 1, title: "Kandy arrival", description: "Temple of the Tooth, evening lake walk." },
      { day: 2, title: "Train to Nuwara Eliya", description: "Tea factory tour, Pedro estate, cool-climate town." },
      { day: 3, title: "Train to Ella", description: "Iconic blue-train ride, Nine Arch Bridge at sunset." },
      { day: 4, title: "Little Adam's Peak & departure", description: "Sunrise hike, then transfer down." },
    ],
    includes: ["3 nights boutique hotels", "Reserved 1st class train tickets", "Tea factory tour", "Daily breakfast"],
    excludes: ["Hike guide tips", "Optional excursions"],
  },
  {
    id: "wildlife-safari-experience",
    name: "Wildlife Safari Experience",
    category: "Wildlife",
    days: 5,
    nights: 4,
    priceFrom: 380,
    image: tiger,
    summary:
      "Two parks, two ecosystems — leopards at Yala and elephant gatherings at Udawalawe. Pure wildlife immersion.",
    destinations: ["Udawalawe", "Yala", "Bundala"],
    itinerary: [
      { day: 1, title: "Drive to Udawalawe", description: "Afternoon elephant safari, riverside lodge." },
      { day: 2, title: "Elephant Transit Home", description: "Morning visit, afternoon birding at Bundala." },
      { day: 3, title: "Transfer to Yala", description: "Evening safari — first leopard hunt." },
      { day: 4, title: "Full-day Yala safari", description: "Dawn & dusk drives, picnic lunch in the bush." },
      { day: 5, title: "Return to Colombo", description: "Coastal road back via Tangalle." },
    ],
    includes: ["4 nights eco-lodges", "3 game drives in 4x4", "Park fees & ranger", "All breakfasts & dinners"],
    excludes: ["Camera fees", "Tips for ranger & driver"],
  },
  {
    id: "luxury-island-retreat",
    name: "Luxury Island Retreat",
    category: "Luxury",
    days: 8,
    nights: 7,
    priceFrom: 1450,
    image: luxury,
    summary:
      "Villas, butlers, private safaris, helicopter transfers and Ayurvedic spa — Sri Lanka at its most refined.",
    destinations: ["Colombo", "Sigiriya", "Kandy", "Yala", "Tangalle"],
    itinerary: [
      { day: 1, title: "Arrival & Colombo", description: "Heritage hotel, fine dining welcome." },
      { day: 2, title: "Helicopter to Sigiriya", description: "Private climb, luxury villa stay." },
      { day: 3, title: "Cultural day", description: "Dambulla, private dinner under the stars." },
      { day: 4, title: "Kandy boutique", description: "Tea heritage hotel, royal cuisine evening." },
      { day: 5, title: "Yala in style", description: "Luxury tented camp, private safari vehicle." },
      { day: 6, title: "Tangalle beach", description: "Beachfront pool villa." },
      { day: 7, title: "Spa & relaxation", description: "Ayurvedic treatments, sunset cruise." },
      { day: 8, title: "Departure", description: "Private transfer to Colombo." },
    ],
    includes: ["7 nights 5-star villas", "Helicopter & private vehicle", "Personal butler", "All meals & drinks"],
    excludes: ["International flights", "Premium spa add-ons"],
  },
  {
    id: "highlands-adventure-trek",
    name: "Highlands Adventure Trek",
    category: "Adventure",
    days: 6,
    nights: 5,
    priceFrom: 410,
    image: adventure,
    summary:
      "Trek the Knuckles range, summit Adam's Peak at sunrise, and raft Kelani's wild rapids. For active travellers.",
    destinations: ["Knuckles Range", "Hatton", "Adam's Peak", "Kitulgala"],
    itinerary: [
      { day: 1, title: "Knuckles trek begins", description: "Acclimatisation hike, mountain lodge." },
      { day: 2, title: "Knuckles summit day", description: "8-hour trek, panoramic views." },
      { day: 3, title: "Drive to Hatton", description: "Tea estate walks, prep for Adam's Peak." },
      { day: 4, title: "Adam's Peak sunrise", description: "2 a.m. start, sacred summit at dawn." },
      { day: 5, title: "Kitulgala white-water rafting", description: "Grade 2-3 rapids on Kelani river." },
      { day: 6, title: "Return to Colombo", description: "Wellness lunch, transfer." },
    ],
    includes: ["5 nights mountain lodges", "Certified trek guide", "Rafting gear & instructor", "All breakfasts"],
    excludes: ["Trekking insurance", "Personal gear"],
  },
];
