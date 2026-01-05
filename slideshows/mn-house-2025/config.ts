import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
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
import DemoIntroSlide from './slides/DemoIntroSlide';
import MicrofoundedDemoSlide from './slides/MicrofoundedDemoSlide';
import HouseholdDemoSlide from './slides/HouseholdDemoSlide';
import MnWftcDemoSlide from './slides/MnWftcDemoSlide';
import PolicyReformDemoSlide from './slides/PolicyReformDemoSlide';
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
    // === MAX (CEO) - Intro & Live Coding ===
    CoverSlide,
    LiveCodingIntroSlide,    // Kick off AI coding exercise
    IntroSlide,
    WhatIsPolicyEngineSlide,
    UsersSlide,

    // === DAVID (Lead State Tax Analyst) - Microsimulation Deep Dive ===
    HowDoesItWorkSlide,
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimReformStaticSlide,
    MicrosimDynamicsSlide,
    MicrosimDataSlide,
    MicrosimWeightsSlide,
    MicrosimAggregateSlide,
    OurApproachSlide,

    // === PAVEL (Director of Growth) - App Demos ===
    DemoIntroSlide,
    MicrofoundedDemoSlide,
    HouseholdDemoSlide,
    MnWftcDemoSlide,         // MN-specific CWFC demo
    PolicyReformDemoSlide,
    WhatsComingSlide,

    // === MAX - Wrap Up ===
    LiveCodingRevealSlide,   // See what Claude built
    EndSlide,
  ],
};
