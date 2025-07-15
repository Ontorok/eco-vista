import { getLocationByName } from '@/_utils/location-utils';
import { NextResponse } from 'next/server';

export async function GET(_request, { params }) {
  const locationName = params.slug;
  const location = getLocationByName(locationName);

  return NextResponse.json(location);
}
