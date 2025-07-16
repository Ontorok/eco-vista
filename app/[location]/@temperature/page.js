import CurrentTemperature from '@/_components/CurrentTemperature';

export default function CurrentTemperaturePage({ params: { location }, searchParams: { latitude, longitude } }) {
  return <CurrentTemperature lat={latitude} lon={longitude} />;
}
