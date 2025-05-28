export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-blue-500"></div>
        <p className="text-lg font-medium text-white">Loading content...</p>
      </div>
    </div>
  );
}
