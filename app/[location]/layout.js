import Image from 'next/image';

export default function LocationLayout({
  children,
  currentLocation,
  currentWeather,
  aqi,
  wind,
  temperature,
}) {
  return (
    <div className="wrapper">
      <Image
        width={1080}
        height={1920}
        alt="Eco Vista"
        src="/images/background.png"
        className="bg-img"
      />
      <div className="overlay"></div>
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {currentLocation}
            {currentWeather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
