import CurrentTemperature from '@/_components/CurrentTemperature';
import { sleep } from '@/_utils/common-utils';

export default async function CurrentTemperaturePage() {
  await sleep(3000);
  return <CurrentTemperature />;
}
