import { getWeatherData } from '@/_lib/weather-info';
import Image from 'next/image';

export default async function CurrentWeather({ lat, lon }) {
  const { main, description } = await getWeatherData(lat, lon);

  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Current Weather</h6>
        <div className="feature-main">
          <Image className="max-w-20" src="/icon_rain.png" alt="rain icon" width={70} height={70} />
          <h3 className="feature-title">{main}</h3>
          <span className="feature-name">{description}</span>
        </div>
      </div>
    </div>
  );
}
