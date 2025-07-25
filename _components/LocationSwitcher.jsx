'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LocationSwitcher({ locations }) {
  const [showLocations, setShowLocations] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setShowLocations((prev) => !prev)}>
        <Image width={36} height={36} className="size-9" src="/link.svg" alt="link icon" />
      </button>
      {showLocations && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer">
            {locations.map((location) => (
              <li key={location}>
                <Link href={`/${location.location}?latitude=${location.latitude}&longitude=${location.longitude}`}>
                  {location.location}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
