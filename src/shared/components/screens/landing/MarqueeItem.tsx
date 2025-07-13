import Marquee from "react-fast-marquee";

export default function MarqueeItem() {
  return (
    <Marquee
      autoFill
      className="flex h-7 items-center justify-center bg-primary-light px-4 text-primary-black">
      <p className="ml-32 font-light text-sm">
        Free International Shipping over $50
      </p>
    </Marquee>
  )
}
