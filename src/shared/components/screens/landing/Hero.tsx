import { ChevronDown } from "lucide-react";
import { Header } from "../../layout";
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <main className="relative w-full h-dvh overflow-hidden responsive-padding">
      <div className="absolute top-0 left-0 w-full z-20 ">
        <Header />
      </div>
      <img
        src="/8ee1ecc2f0162723cfad36f66b62230b31acf7c0.jpg"
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover -z-10 backdrop-opacity-90"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />
      <div className="flex flex-col items-center text-primary-white/90 h-full justify-end">
        <div className="flex-grow flex items-center">
          <div className="text-center max-w-5xl 2xl:max-w-6xl mx-auto">
            <h1 className="text-7xl xs:text-[120px] sm:text-[160px] md:text-[150px] lg:text-[240px] 2xl:text-7xl font-medium font-imbue tracking-tight">
              Ulta Beauty
            </h1>
            <p className="text-sm xs:text-base font-extralight uppercase font-outfit tracking-widest">
              The Possibilities are Beautiful.
            </p>
          </div>
        </div>
        <Link
          to="articles"
          smooth={true}
          duration={1000}
          className="flex flex-col items-center space-y-2 transition-all duration-300 group cursor-pointer mb-6">
          <h2 className="text-white font-light text-sm uppercase border-b-[0.1px] pb-2 border-primary-white/80 tracking-widest font-outfit">
            Shop now
          </h2>
          <ChevronDown className="text-primary-white/60 w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </Link>
      </div>
    </main>
  );
}
