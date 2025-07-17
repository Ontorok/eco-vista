import NoLocationFound from '@/_components/common/NoLocationFound';
import CurrentTemperature from '@/_components/CurrentTemperature';
import { getResolvedLatLong } from '@/_lib/location-info';

export default async function CurrentTemperaturePage({ params: { location }, searchParams: { latitude, longitude } }) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <CurrentTemperature lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
}
