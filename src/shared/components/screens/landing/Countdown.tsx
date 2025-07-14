import { useCountdown } from '../../../../hooks/useCountdown';
import TimeUnitBlock from '../../common/TimeUnitBlock';

export default function CountdownTimer() {
  const target = new Date('2025-07-15T18:00:00');
  const time = useCountdown(target);
  const timeUnits = [
    { value: time.hours, label: 'HOURS' },
    { value: time.minutes, label: 'MINUTES' },
    { value: time.seconds, label: 'SECONDS' }
  ];

  return (
    <section className="relative w-full h-[75dvh] overflow-hidden">
      <img
        src="/candle.jpg"
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading='lazy'
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="flex flex-col items-center justify-center h-full px-4">
        <div className="text-center mb-12">
          <p className="text-primary-light text-xs md:text-sm tracking-widest font-light mb-4 uppercase">
            Last chance
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-primary-white mb-2 font-merriweather">
            All candles 2x1
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {timeUnits.map((unit) => (
            <TimeUnitBlock key={unit.label} value={unit.value} label={unit.label} />
          ))}
        </div>
      </div>
    </section>
  );
};