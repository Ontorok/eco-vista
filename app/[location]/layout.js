import Image from 'next/image';

export default function LocationLayout({ children, currentWeather, aqi, wind, temperature }) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image width={1080} height={1920} alt="Eco Vista" src="/background.png" className="bg-img" />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
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
