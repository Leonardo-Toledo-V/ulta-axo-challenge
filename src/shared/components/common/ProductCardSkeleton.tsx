export default function ProductCardSkeleton() {
  return (
    <div className="group relative pr-3 animate-pulse">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
        <div className="h-5 w-3/4 bg-gray-300 rounded" />
        <div className="h-4 w-1/3 bg-gray-300 rounded" />
        <div className="h-8 w-1/2 bg-gray-300 rounded my-2" />
      </div>
    </div>
  );
}
