import React, { ReactNode } from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

interface SlideHeaderProps {
  children: ReactNode;
  showLogo?: boolean;
}

export default function SlideHeader({ children, showLogo = false }: SlideHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          {children}
        </div>
        {showLogo && (
          <div className="flex-shrink-0 pt-2">
            <Image
              src={assetPath("/logos/profile_teal.svg")}
              alt="PolicyEngine"
              width={56}
              height={56}
              className="opacity-80"
            />
          </div>
        )}
      </div>
      <div className="w-32 accent-bar mt-5"></div>
    </div>
  );
}
