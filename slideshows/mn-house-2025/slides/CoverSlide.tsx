import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col justify-center space-y-16">
        <SlideTitle isCover>
          Modeling Minnesota Tax Policy<br />
          with PolicyEngine
        </SlideTitle>

        <div className="text-3xl text-white space-y-3 text-left">
          <p className="font-medium">Max Ghenis</p>
          <p>Minnesota House Research Department</p>
          <p className="text-2xl">January 6, 2025</p>
        </div>
      </div>
    </Slide>
  );
}
