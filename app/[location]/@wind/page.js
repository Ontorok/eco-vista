import NoLocationFound from '@/_components/common/NoLocationFound';
import Wind from '@/_components/Wind';
import { getResolvedLatLong } from '@/_lib/location-info';

export default async function WindPage({ params: { location }, searchParams: { latitude, longitude } }) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <Wind lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
}
