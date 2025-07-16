import Image from 'next/image';

export default function AirQualityIndexItem({ component, value, requiredUnit = false }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
        <Image width={18} height={18} className="max-w-[18px]" src="/icon_air_element.png" alt="icon" />
        {component}
      </div>
      <span className="text-right text-sm text-white lg:text-base">
        {value} {requiredUnit && 'µg/m³'}
      </span>
    </div>
  );
}
