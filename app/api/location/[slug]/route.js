import { getLocationByName } from '@/_lib/location-data';
import { NextResponse } from 'next/server';

export async function GET(_request, { params }) {
  const locationName = params.slug;
  const location = getLocationByName(locationName);

  return NextResponse.json(location);
}
