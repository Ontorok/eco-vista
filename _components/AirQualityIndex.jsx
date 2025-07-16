import { getAqiData } from '@/_lib/weather-info';
import { getAQIRating, getReadableKey } from '@/_utils/common-utils';
import AirQualityIndexItem from './AirQualityIndexItem';
import WidgetCard from './common/WidgetCard';

export default async function AirQualityIndex({ lat, lon }) {
  const { main, components } = await getAqiData(lat, lon);

  return (
    <WidgetCard title={`Air Pollution & Quality`}>
      <div className="mt-3 space-y-2 lg:space-y-3">
        <AirQualityIndexItem component={'Air Quality Index'} value={getAQIRating(main.aqi)} />
        {Object.entries(components).map(([key, value]) => {
          const readableKey = getReadableKey(key);
          return <AirQualityIndexItem key={key} component={readableKey} value={value} requiredUnit />;
        })}
      </div>
    </WidgetCard>
  );
}
