"use client";

import { useState } from "react";
import { useRatings } from "./RatingProvider";

interface StarRatingProps {
  slug: string;
  showCount?: boolean;
}

export default function StarRating({ slug, showCount = true }: StarRatingProps) {
  const { rate, getAverageRating, getUserRating } = useRatings();
  const [hoverRating, setHoverRating] = useState(0);
  const average = getAverageRating(slug);
  const userRating = getUserRating(slug);
  const ratingData = { sum: 0, count: 0 };

  const displayRating = hoverRating || userRating || 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => rate(slug, star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="p-1 transition-transform hover:scale-110"
            aria-label={`Rate ${star} stars`}
          >
            <svg
              className={`w-6 h-6 ${
                star <= displayRating
                  ? "text-amber-400 fill-amber-400"
                  : star - 0.5 <= average
                  ? "text-amber-400"
                  : "text-slate-600 dark:text-slate-400"
              }`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={star <= displayRating ? 0 : 1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {average > 0 && (
          <>
            <span className="text-amber-400 font-semibold">{average.toFixed(1)}</span>
            {showCount && (
              <span className="text-slate-500 text-sm">
                ({ratingData.count || 0} 人評分)
              </span>
            )}
          </>
        )}
        {userRating && (
          <span className="text-green-400 text-sm">✓ 你評了 {userRating} 星</span>
        )}
      </div>
    </div>
  );
}