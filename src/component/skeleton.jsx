export const SkeletonLoader = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 shadow-md w-64 animate-pulse"
        >
          <div className="h-40 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};
