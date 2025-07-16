import AirQualityIndex from '@/_components/AirQualityIndex';

export default function AirQualityIndexPage({ params: { location }, searchParams: { latitude, longitude } }) {
  return <AirQualityIndex lat={latitude} lon={longitude} />;
}
