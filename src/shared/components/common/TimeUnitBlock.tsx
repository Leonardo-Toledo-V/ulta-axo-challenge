interface TimeUnitBlockProps {
  value: number;
  label: string;
};

const formatTime = (value: number) => value.toString().padStart(2, '0');

export default function TimeUnitBlock({ value, label }: TimeUnitBlockProps) {
  return (
    <div className="text-center">
      <div className="relative mb-3">
        <div className="bg-primary-black bg-opacity-90 backdrop-blur-sm rounded border border-primary-white/50">
          <div className="px-4 py-6 md:px-6 md:py-8">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono tabular-nums">
              {formatTime(value)}
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs md:text-sm text-primary-white/50 tracking-widest font-light font-outfit">
        {label}
      </div>
    </div>
  )
};
