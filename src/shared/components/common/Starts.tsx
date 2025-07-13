import { Star } from 'lucide-react';

interface StarsProps {
  rating: number,
  maxStars: number,
  size: number,
  valorations: number
}

export default function Stars({ rating, maxStars, size, valorations }: StarsProps) {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(
        <Star
          key={i}
          size={size}
          className="text-primary-black fill-current"
        />
      );
    } else if (i - 0.5 <= rating) {
      stars.push(
        <div key={i} className="relative">
          <Star
            size={size}
            className="text-primary-black/15 fill-current"
          />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star
              size={size}
              className="text-primary-black fill-current"
            />
          </div>
        </div>
      );
    } else {
      stars.push(
        <Star
          key={i}
          size={size}
          className="text-primary-black/15 fill-current"
        />
      );
    }
  }

  return (
    <div className="flex py-2 items-center text-xs">
      {stars}
      <span className="ml-2 text-primary-black/55 font-outfit font-light">
        ({valorations})
      </span>
    </div>
  );
};