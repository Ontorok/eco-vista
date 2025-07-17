import NoLocationFound from '@/_components/common/NoLocationFound';
import CurrentLocation from '@/_components/CurrentLocation';
import { getResolvedLatLong } from '@/_lib/location-info';

export default async function LocationPage({ params: { location }, searchParams: { latitude, longitude } }) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <CurrentLocation lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
}
