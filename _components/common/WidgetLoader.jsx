export default function WidgetLoader() {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card space-y-4">
        <div className="feature-main flex flex-col items-center gap-2">
          <div className="w-[200px] animate-pulse h-[70px] bg-gray-300 rounded-md"></div>
          <div className="h-6 w-[200px] animate-pulse bg-gray-300 rounded"></div>
          <div className="h-4 w-[200px] animate-pulse bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
