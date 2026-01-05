import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-14 relative z-10">
        {/* Decorative element */}
        <div className="w-20 h-1 bg-white/30 rounded-full" />

        <SlideTitle isCover>
          Modeling Minnesota<br />
          Tax Policy
        </SlideTitle>

        {/* Speaker info */}
        <div className="text-center space-y-2">
          <p className="text-3xl font-semibold text-white">Max Ghenis</p>
          <p className="text-xl text-white/70 font-light tracking-wide">CEO, PolicyEngine</p>
        </div>

        {/* Event details */}
        <div className="flex items-center gap-10 pt-6">
          <div className="text-center">
            <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Presented to</p>
            <p className="text-white font-medium text-lg">Minnesota House Research</p>
          </div>
          <div className="w-px h-14 bg-white/20" />
          <div className="text-center">
            <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Date</p>
            <p className="text-white font-medium text-lg">January 6, 2025</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
