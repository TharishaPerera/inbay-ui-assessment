export const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-60 z-50">
        <div className="relative w-16 h-16 border-5 border-t-5 border-gray-700 border-solid rounded-full animate-spin">
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
}