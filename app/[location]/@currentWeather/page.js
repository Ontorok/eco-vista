import CurrentWeather from '@/_components/CurrentWeather';

export default async function CurrentWeatherPage({ params: { location }, searchParams: { latitude, longitude } }) {
  return <CurrentWeather lat={latitude} lon={longitude} />;
}
