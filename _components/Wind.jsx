import { getWindData } from '@/_lib/weather-info';
import Image from 'next/image';

export default async function Wind({ lat, lon }) {
  const { speed, deg } = await getWindData(lat, lon);

  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <Image width={70} height={70} className="max-w-20" src="/icon_wind.png" alt="rain icon" />
          <h3 className="feature-title">
            {speed} <span className="text-sm">meter/sec</span>{' '}
          </h3>
          <span className="feature-name">{deg} degrees</span>
        </div>
      </div>
    </div>
  );
}
