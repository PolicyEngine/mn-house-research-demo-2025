import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function LiveCodingIntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Live coding: MN Working Families Credit visualizer</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <p className="mb-8">
            Let's kick off an AI coding exercise while we talk. This prompt will build a
            custom visualization tool for Minnesota's Child & Working Families Credit:
          </p>

          <div className="bg-gray-100 p-6 rounded-lg font-mono text-xl text-left mb-8">
            <p>Build a React+Vite app visualizing Minnesota's Child & Working Families Credit using PolicyEngine-US.</p>
            <br />
            <p>Stack: React frontend + local Flask API (port 5001) that calls policyengine_us.Simulation</p>
            <br />
            <p>UI: PolicyEngine app styling (teal #319795, Inter font). Controls for credit amount per child, phase-out rate, phase-out thresholds. Toggle for single/joint. Chart with lines for 1/2/3 children vs earnings.</p>
            <br />
            <p>Test each integration point returns real data before moving on. Verify UI states visually in browser.</p>
          </div>

          <p className="text-pe-teal font-semibold">
            We'll check back on the results at the end!
          </p>
        </SlideContent>
      </div>
    </Slide>
  );
}
