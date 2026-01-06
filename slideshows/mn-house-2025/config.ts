import { SlideshowConfig } from '@/lib/types';
import LiveCodingIntroSlide from './slides/LiveCodingIntroSlide';
import IntroSlide from './slides/IntroSlide';
import WhatIsPolicyEngineSlide from './slides/WhatIsPolicyEngineSlide';
import UsersSlide from './slides/UsersSlide';
import HowDoesItWorkSlide from './slides/HowDoesItWorkSlide';
import MicrosimIntroSlide from './slides/MicrosimIntroSlide';
import MicrosimBaselineSlide from './slides/MicrosimBaselineSlide';
import MicrosimReformStaticSlide from './slides/MicrosimReformStaticSlide';
import MicrosimDynamicsSlide from './slides/MicrosimDynamicsSlide';
import MicrosimDataSlide from './slides/MicrosimDataSlide';
import MicrosimWeightsSlide from './slides/MicrosimWeightsSlide';
import MicrosimAggregateSlide from './slides/MicrosimAggregateSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import MicrofoundedDemoSlide from './slides/MicrofoundedDemoSlide';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import PolicyReformDemoSlide from './slides/PolicyReformDemoSlide';
import PythonDemoSlide from './slides/PythonDemoSlide';
import StateMapDemoSlide from './slides/StateMapDemoSlide';
import LiveCodingRevealSlide from './slides/LiveCodingRevealSlide';
import WhatsComingSlide from './slides/WhatsComingSlide';
import EndSlide from './slides/EndSlide';

export const mnHouse2025Config: SlideshowConfig = {
  id: 'mn-house-2025',
  title: 'Modeling Minnesota Tax Policy with PolicyEngine',
  description: 'Learn how to model and measure the impact of Minnesota tax policies using PolicyEngine',
  date: 'January 6, 2025',
  location: 'Minnesota House Research Department',
  slides: [
    // === MAX (CEO) - Intro & OBBBA Demo ===
    LiveCodingIntroSlide,    // Kick off AI coding exercise
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,
    HowDoesItWorkSlide,
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimReformStaticSlide,
    MicrosimDynamicsSlide,
    MicrosimDataSlide,
    MicrosimWeightsSlide,
    MicrosimAggregateSlide,
    OurApproachSlide,
    MicrofoundedDemoSlide,   // OBBBA demo

    // === DAVID (Lead State Tax Analyst) - Household & Reform Demos ===
    HouseholdDemoSlide,      // Minnesota household example
    PolicyReformDemoSlide,   // Tax rate reform demo

    // === PAVEL (Director of Growth) - Python & Tools ===
    PythonDemoSlide,         // Python example
    StateMapDemoSlide,       // State EITC/CTC map + RI calculator

    // === MAX - Wrap Up ===
    LiveCodingRevealSlide,   // Check back on AI coding result
    WhatsComingSlide,        // What's coming (incl. congressional districts)
    EndSlide,
  ],
};
