import { beautyProducts } from "../../../constants/beautyProducts.data";
import CustomButton from "../../common/CustomButton";

export default function BeautyProducts() {
  return (
    <div className="w-full pb-16 bg-[#F7F2E9]">
      <div className="px-4 lg:px-14 py-18">
        <h3 className="font-merriweather  text-4xl lg:text-7xl text-primary-black">
          Summer-ready beauty
        </h3>
        <div className="max-w-2xl">
          <p className="text-base lg:text-xl mt-3 font-extralight font-outfit tracking-wider">From dewy skin to bold lips, discover everything you need for your sun-kissed summer look.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        {beautyProducts.map((product) => (
          <div
            key={product.id}
            className="flex-1 relative overflow-hidden group cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/45 z-10" />
            <div className="relative z-20">
              <div className="relative h-20 md:h-52 lg:h-96" />
              <div className="p-8 text-center">
                <h3 className={`text-3xl lg:text-3xl font-merriweather ${product.textColor} mb-3 text-primary-white`}>
                  {product.name}
                </h3>
                <p className={`${product.textColor} text-base lg:text-lg mb-5 leading-relaxed px-4 font-extralight font-outfit text-primary-white/75`}>
                  {product.description}
                </p>
                <CustomButton
                  text="Shop now"
                  variant="secondary"
                  size="lg"
                  className="font-light uppercase tracking-wider"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};