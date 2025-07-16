import Image from 'next/image';

export default function AirQualityIndexItem() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
        <Image
          width={18}
          height={18}
          className="max-w-[18px]"
          src="/icon_air_element.png"
          alt="icon"
        />
        Air Quality Index
      </div>
      <span className="text-right text-sm text-white lg:text-base">
        201.94 µg/m³
      </span>
    </div>
  );
}
