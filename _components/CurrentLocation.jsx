import { getLocationData, getLocationLatLongList } from '@/_lib/location-info';
import { getWeatherData } from '@/_lib/weather-info';
import LocationSwitcher from './LocationSwitcher';

export default async function CurrentLocation({ lat, lon }) {
  const { continent, city, countryName } = await getLocationData(lat, lon);
  const locations = await getLocationLatLongList();
  const { dt } = await getWeatherData(lat, lon);

  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">{continent}</h2>
          <LocationSwitcher locations={locations} />
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {city} | {countryName}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date(dt * 1000).toLocaleTimeString()}</span> <span>{new Date(dt * 1000).toDateString()}</span>
        </div>
      </div>
    </div>
  );
}
