"use client";
import { Star, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

interface Review {
  name: string;
  text: string;
  role?: string;
  rating?: number;
  avatar?: string | null;
}

interface ReviewsData {
  reviews: Review[];
  rating?: number;
  totalReviews?: number;
  error?: string;
}

export default function CustomerReviews() {
  // Initialize state directly with screenshot reviews to prevent showing old mock data on first render
  const initialReviews: Review[] = [
    {
      name: "Sakthivel",
      text: "Really the sweet taste was fantastic 🥰",
      role: "Google Reviewer",
      rating: 5,
      avatar: "/review/review1.png",
    },
    {
      name: "Siva",
      text: "Highly recommended good service and hospitality",
      role: "Google Reviewer",
      rating: 5,
      avatar: "/review/review2.png",
    },
    {
      name: "Syan",
      text: "sweet",
      role: "Google Reviewer",
      rating: 5,
      avatar: "/review/review3.png",
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [loading, setLoading] = useState(false);
  const [googleData, setGoogleData] = useState<ReviewsData | null>({
    reviews: initialReviews,
    rating: 5.0,
    totalReviews: 10,
  });
  const [displayCount, setDisplayCount] = useState(3); // Show 3 reviews at a time

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Use no-store to prevent Next.js caching older api data
        const response = await fetch("/api/reviews", { cache: "no-store" });
        const data = await response.json();
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setGoogleData(data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const displayedReviews = reviews.slice(0, displayCount);
  const hasMoreReviews = reviews.length > displayCount;
  return (
    <section className="py-16 md:py-24 bg-maroon relative overflow-hidden">
      {/* Abstract Background patterns */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gold/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center gap-2">
          <h4 className="text-gold font-bold tracking-widest text-xs md:text-sm uppercase mb-3">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white leading-tight">
            What Our Customers Say
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-1 w-12 bg-gold rounded-full"></div>
            <Leaf className="w-5 h-5 text-gold" />
            <div className="h-1 w-12 bg-gold rounded-full"></div>
          </div>

          {/* Google Rating Display */}
          {googleData?.rating && (
            <div
              className="mt-6 flex flex-wrap justify-center items-center gap-2"
              style={{ marginBottom: "1rem" }}
            >
              <span className="text-white font-bold text-lg md:text-xl">
                {googleData.rating.toFixed(1)}
              </span>
              <div className="flex gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 md:w-5 h-5 ${i < Math.round(googleData.rating!) ? "fill-current" : ""}`}
                  />
                ))}
              </div>
              <span className="text-gray-300 text-xs md:text-sm">
                ({googleData.totalReviews}+ reviews on Google)
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-6">
          {loading ? (
            <div className="col-span-full text-center text-white py-12">
              Loading reviews...
            </div>
          ) : (
            displayedReviews.map((review, index) => (
              <div
                key={index}
                className="w-full bg-white/10 p-6 md:p-8 rounded-[2rem] backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300 shadow-xl relative flex flex-col justify-between h-full"
              >
                <div>
                  {/* Quote Mark Decorative */}
                  <div className="absolute top-4 right-6 text-5xl md:text-6xl text-gold/10 font-serif leading-none select-none">
                    "
                  </div>

                  <div className="flex gap-0.5 mb-4 text-gold">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 h-5 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-200 italic font-light">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md flex-shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-md flex-shrink-0 bg-orange-600">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="font-bold text-white text-sm md:text-base truncate">
                      {review.name}
                    </div>
                    {review.role && (
                      <div className="text-xs text-gold font-medium truncate">
                        {review.role}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Actions Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16 md:mt-24 pt-4">
          {hasMoreReviews && (
            <button
              onClick={() => setDisplayCount(displayCount + 3)}
              className="inline-flex items-center gap-2 bg-gold text-maroon px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white transition-colors text-sm md:text-base shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              Load More Reviews ({reviews.length - displayCount} more)
            </button>
          )}

          <a
            href="https://www.google.com/search?q=bommi+sweets&oq=bommi+sweets&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDINCAIQABiGAxiABBiKBTINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTIKCAUQABiABBiiBDIHCAYQABjvBTIHCAcQABjvBTIHCAgQABjvBTIHCAkQIRiPAtIBCDI2NzRqMGo3qAIUsAIB8QW8ZbCW4ZUDiQ&client=ms-android-samsung-ss&sourceid=chrome-mobile&ie=UTF-8&pli=1#ebo=0&mpd=~16331081000325971869/customers/reviews&sv=CAESzQEKuQEStgEKd0FNbjMteVRldXFnSHhuaktZWlJzeDE3M2FNeDB3RVNPNzBIbm5zNTRxeWM3cV8zaEZ6UjdpRW1INzNHc2tBRWtCRmNHZjRONFV5U1RzM3VUc2NGbWZnM2plQUJEOFhZbVFxX09zZW9ZTW5ESkFqRGxnNVNrV3FVEhdiMWtVYW91UEVkNkY0LUVQcDZQSDhRSRoiQUpLTEZtSzd6XzUwM1pmU0FOQU5jZGtSR1AxMVhGR1hWURIEODA1MRoBMyoAMAA4AUAAGAAgxuy17QdKAhAC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white/20 hover:border-white transition-all text-sm md:text-base shadow-lg w-full sm:w-auto justify-center"
          >
            <span>View All Reviews on Google</span>
            <svg
              className="w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
