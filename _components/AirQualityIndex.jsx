import { getAqiData } from '@/_lib/weather-info';
import { getAQIRating, getReadableKey } from '@/_utils/common-utils';
import AirQualityIndexItem from './AirQualityIndexItem';

export default async function AirQualityIndex({ lat, lon }) {
  const { main, components } = await getAqiData(lat, lon);

  return (
    <div className={`col-span-12 lg:col-span-4 2xl:col-span-6`}>
      <div className="card">
        <h6 className="feature-name">Air Pollution and Quality</h6>
        <div className="mt-3 space-y-2 lg:space-y-3">
          <AirQualityIndexItem component={'Air Quality Index'} value={getAQIRating(main.aqi)} />
          {Object.entries(components).map(([key, value]) => {
            const readableKey = getReadableKey(key);
            return <AirQualityIndexItem key={key} component={readableKey} value={value} requiredUnit />;
          })}
        </div>
      </div>
    </div>
  );
}
