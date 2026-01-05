import { SlideshowConfig, SlideshowMetadata } from './types';
import { mnHouse2025Config } from '@/slideshows/mn-house-2025/config';

// Register all slideshows here
export const slideshows: SlideshowConfig[] = [
  mnHouse2025Config,
];

export function getSlideshowById(id: string): SlideshowConfig | undefined {
  return slideshows.find(s => s.id === id);
}

export function getAllSlideshowMetadata(): SlideshowMetadata[] {
  return slideshows.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    date: s.date,
    location: s.location,
    slideCount: s.slides.length,
  }));
}
