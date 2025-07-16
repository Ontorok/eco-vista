import CurrentWeather from '@/_components/CurrentWeather';
import { sleep } from '@/_utils/common-utils';

export default async function CurrentWeatherPage() {
  await sleep(5000);
  return <CurrentWeather />;
}
