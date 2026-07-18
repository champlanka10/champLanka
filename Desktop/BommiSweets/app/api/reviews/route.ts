// app/api/reviews/route.ts
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Google Place ID for Bommi Sweets - get from Google Business Profile or search below
const PLACE_ID = process.env.GOOGLE_PLACE_ID || '';
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || '';

const FALLBACK_REVIEWS = [
  {
    name: "Sakthivel",
    text: "Really the sweet taste was fantastic 🥰",
    rating: 5,
    avatar: "/review/review1.png",
  },
  {
    name: "Siva",
    text: "Highly recommended good service and hospitality",
    rating: 5,
    avatar: "/review/review2.png",
  },
  {
    name: "Syan",
    text: "sweet",
    rating: 5,
    avatar: "/review/review3.png",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get("search");

  // If ?search= is provided, find place_id by business name
  if (searchQuery && GOOGLE_API_KEY) {
    try {
      const findRes = await fetch(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(searchQuery)}&inputtype=textquery&fields=place_id,name,formatted_address&key=${GOOGLE_API_KEY}`
      );
      const findData = await findRes.json();
      if (findData.candidates?.length > 0) {
        return NextResponse.json({ candidates: findData.candidates });
      }
      return NextResponse.json({ candidates: [] });
    } catch {
      return NextResponse.json({ candidates: [], error: "Search failed" });
    }
  }

  // Normal reviews fetch
  if (!GOOGLE_API_KEY || !PLACE_ID) {
    return NextResponse.json(
      {
        rating: 5.0,
        totalReviews: 10,
        reviews: FALLBACK_REVIEWS,
        error: 'Google API credentials not configured',
      },
      { status: 200 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`
    );

    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      throw new Error('No reviews found');
    }

    const reviews = data.result.reviews.map((review: any) => ({
      name: review.author_name?.split(' ')[0] || "Customer",
      text: review.text || "",
      rating: review.rating || 5,
      avatar: review.profile_photo_url || null,
    }));

    return NextResponse.json({
      reviews,
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);

    return NextResponse.json(
      {
        rating: 5.0,
        totalReviews: 10,
        reviews: FALLBACK_REVIEWS,
        error: 'Using fallback reviews',
      },
      { status: 200 }
    );
  }
}
