import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";

export type Review = {
  name: string;
  text: string;
};

interface ReviewsSliderProps {
  reviews: Review[];
  intervalMs?: number;
}

const ReviewsSlider = ({ reviews, intervalMs = 6000 }: ReviewsSliderProps) => {
  const [index, setIndex] = useState(0);

  const safeReviews = useMemo(() => (Array.isArray(reviews) ? reviews : []), [reviews]);
  const total = safeReviews.length;

  useEffect(() => {
    if (total <= 1) return; // no need to autoplay with 0/1 review
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => clearInterval(id);
  }, [total, intervalMs]);

  if (total === 0) return null;

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {safeReviews.map((r, i) => (
            <div key={i} className="min-w-full px-1">
              <div className="bg-white text-black p-6 rounded-lg shadow-lg h-full">
                <div className="flex items-center space-x-1 mb-3">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-gray-800 mb-4 leading-relaxed">{r.text}</p>
                <p className="font-medium">- {r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="flex items-center justify-center space-x-2 mt-4">
          {safeReviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para avaliação ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === i ? "bg-brand" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsSlider;
