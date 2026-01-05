import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';

export default function MnWftcDemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Demo: Minnesota Child & Working Families Credit</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-6 text-left">
            <p className="font-semibold text-pe-dark">
              Explore how Minnesota's CWFC affects families
            </p>

            <ul className="list-disc list-inside space-y-4 ml-6">
              <li><strong>Child component:</strong> $1,750 per child under 18</li>
              <li><strong>Working families component:</strong> 4% phase-in, ~$379 max</li>
              <li><strong>Phase-out:</strong> 12% rate starting at $29,500 (single) / $35,000 (joint)</li>
              <li>Interact with federal EITC and CTC</li>
            </ul>

            <p className="text-pe-teal font-semibold pt-4">
              Let's model a reform in the PolicyEngine app →
            </p>

            <p className="text-gray-500 text-xl pt-2">
              policyengine.org/us/policy
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
