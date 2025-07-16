'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LocationDetector() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set('latitude', position.coords.latitude);
        params.set('longitude', position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathname, searchParams]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-slate-700 to-slate-500 ">
      <Image src={`/network.gif`} alt="Geolocation" width={500} height={500} />
    </div>
  );
}
