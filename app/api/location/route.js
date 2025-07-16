import { getLocations } from '@/_lib/location-data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const locations = getLocations();
  return NextResponse.json(locations);
}
