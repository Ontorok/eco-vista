import { getLocations } from '@/_utils/location-utils';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const locations = getLocations();
  return NextResponse.json(locations);
}
