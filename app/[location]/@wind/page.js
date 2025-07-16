import Wind from '@/_components/Wind';

export default function WindPage({ params: { location }, searchParams: { latitude, longitude } }) {
  return <Wind lat={latitude} lon={longitude} />;
}
