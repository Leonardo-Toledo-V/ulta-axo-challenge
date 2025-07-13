import { Product } from '../../../features/product/data/interfaces/product.interface';
import CustomButton from './CustomButton';
import Stars from './Starts';

type ProductCardProps = {
  product: Product;
  discount: boolean;
  freeWithPurchase: boolean;
};

export default function ProductCard({ product, discount, freeWithPurchase }: ProductCardProps) {
  return (
    <div className="group relative pr-3">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 relative">
        {discount && (
          <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-light px-2 py-1 font-outfit">
            20% Off
          </span>
        )}
        <a href={product.product_link ?? "https://www.google.com"} target="_blank" rel="noopener noreferrer">
          <img
            src={product.image_link ?? undefined}
            alt={product.name ?? "Producto"}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200 cursor-pointer"
          />
        </a>
      </div>
      <div className='mt-4'>
        <h3 className="text-sm text-primary-black/55 font-outfit font-light capitalize">
          {product.brand ?? "Brand Name"}
        </h3>
        <h3 className="text-primary-black font-medium font-outfit">
          {product.name ?? "Product Name"}
        </h3>
        <Stars
          rating={product.rating ?? (Math.random() * 15)}
          size={15}
          maxStars={5}
          valorations={product.id}
        />
        <p className="text-sm font-medium text-gray-900">
          ${product.price ?? "19.99"}
        </p>
        {freeWithPurchase && (
          <p className="text-xs text-pink-400 bg-pink-100 font-semibold mt-1 w-1/2 pl-2">
            Free Gift With Purchase
          </p>
        )}
        <CustomButton
          text='Add to bag'
          variant='primary'
          size='md'
          disabled={false}
          onClick={() => alert('Add to bag clicked')}
          className='my-2 w-1/2'
        />
      </div>
    </div>
  );
}
