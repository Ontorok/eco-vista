import AirQualityIndexItem from './AirQualityIndexItem';

export default function AirQualityIndex() {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-6">
      <div className="card">
        <h6 className="feature-name">Air Pollution &amp; Quality</h6>
        <div className="mt-3 space-y-2 lg:space-y-3">
          <AirQualityIndexItem />
          <AirQualityIndexItem />
          <AirQualityIndexItem />
          <AirQualityIndexItem />
          <AirQualityIndexItem />
          <AirQualityIndexItem />
          <AirQualityIndexItem />
        </div>
      </div>
    </div>
  );
}
