import { Hero, ConectorText, Carousel } from "./shared/components/screens/landing";
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <ReactLenis root options={{lerp: 0.1, duration: 0.9}}>
      <Hero />
      <ConectorText />
      <Carousel />
      <div className="h-screen bg-red-500" />
    </ReactLenis>
  );
}

export default App;