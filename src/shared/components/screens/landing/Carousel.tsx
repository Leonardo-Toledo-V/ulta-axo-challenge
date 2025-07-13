import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useItemsPerView } from '../../../../hooks/useItemsPerView';
import ProductCard from '../../common/ProductCard';
import { useProduct } from '../../../../features/product/presentation/controllers/useProduct';
import ProductCardSkeleton from '../../common/ProductCardSkeleton';

export default function Carousel() {
  const { products, isLoading, getProductsByType } = useProduct();

  useEffect(() => {
    getProductsByType({ product_type: "blush" })
  }, []);


  const itemsPerView = useItemsPerView({ base: 1, sm: 2, lg: 3, xl: 4 });
  const limitedProducts = products.slice(4, 16);
  const maxSlideIndex = Math.max(0, limitedProducts.length - itemsPerView);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + itemsPerView));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxSlideIndex : prev - itemsPerView));
  };

  return (
    <div className="bg-primary-white py-6 px-4 sm:px-6 lg:px-14">
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600">
          <span className="font-light font-outfit tracking-wider">
            {limitedProducts.length} items
          </span>
        </div>
        {products.length > itemsPerView && (
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              aria-label="Slide anterior"
              className="bg-white disabled:opacity-10 disabled:cursor-not-allowed cursor-pointer"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Slide siguiente"
              className="bg-white disabled:opacity-10 disabled:cursor-not-allowed cursor-pointer"
              disabled={currentIndex >= maxSlideIndex}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {(isLoading ? Array(12).fill(null) : limitedProducts).map((product, index) => (
            <div
              key={product?.id ?? index}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {isLoading ? (
                <ProductCardSkeleton />
              ) : (
                <ProductCard
                  product={product}
                  discount={product.id % 4 === 0}
                  freeWithPurchase={product.id % 2 !== 0}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}