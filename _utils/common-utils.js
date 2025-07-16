function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getAQIRating = (aqi) => {
  switch (aqi) {
    case 1:
      return 'Good';
    case 2:
      return 'Fair';
    case 3:
      return 'Moderate';
    case 4:
      return 'Poor';
    case 5:
      return 'Very Poor';
    default:
      return 'unknown';
  }
};

const getReadableKey = (key) => {
  switch (key) {
    case 'co':
      return 'Carbon monoxide';
    case 'no':
      return 'Nitrogen monoxide';
    case 'no2':
      return 'Nitrogen dioxide';
    case 'o3':
      return 'Ozone';
    case 'so2':
      return 'Sulphur dioxide';
    case 'pm2_5':
      return 'Fine particles matter';
    case 'pm10':
      return 'Coarse particulate matter';
    case 'nh3':
      return 'Ammonia';
    default:
      return 'unknown';
  }
};
export { getAQIRating, getReadableKey, sleep };
