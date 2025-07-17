import NoLocationFound from '@/_components/common/NoLocationFound';
import CurrentWeather from '@/_components/CurrentWeather';
import { getResolvedLatLong } from '@/_lib/location-info';

export default async function CurrentWeatherPage({ params: { location }, searchParams: { latitude, longitude } }) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <CurrentWeather lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
}
