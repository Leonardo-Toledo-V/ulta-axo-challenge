import { Hero, ConectorText, Carousel, Categories, Countdown } from "./shared/components/screens/landing";
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 0.9 }}>
      <Hero />
      <ConectorText />
      <Carousel />
      <Countdown />
      <Categories />
    </ReactLenis>
  );
}

export default App;