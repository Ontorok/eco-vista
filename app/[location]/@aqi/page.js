import AirQualityIndex from '@/_components/AirQualityIndex';
import NoLocationFound from '@/_components/common/NoLocationFound';
import { getResolvedLatLong } from '@/_lib/location-info';

export default async function AirQualityIndexPage({ params: { location }, searchParams: { latitude, longitude } }) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AirQualityIndex lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationFound />;
  }
}
