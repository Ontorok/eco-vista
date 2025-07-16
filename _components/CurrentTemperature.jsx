import { getTemperatureData } from '@/_lib/weather-info';
import Image from 'next/image';
import WidgetCard from './common/WidgetCard';

export default async function CurrentTemperature({ lat, lon }) {
  const { temp, feels_like } = await getTemperatureData(lat, lon);
  return (
    <WidgetCard title={'Current Temperature'} size="sm">
      <div className="feature-main">
        <Image width={71} height={71} className="max-w-20" src="/icon_tempareture.png" alt="rain icon" />
        <h3 className="feature-title">{temp}°C</h3>
        <span className="feature-name">Feels Like {feels_like}°C</span>
      </div>
    </WidgetCard>
  );
}
