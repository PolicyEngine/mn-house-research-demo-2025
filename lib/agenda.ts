export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  speakerIds?: string[]; // IDs from the speakers registry
  slideshowId?: string; // Link to slideshow if exists
  type: 'talk' | 'demo' | 'panel' | 'break' | 'networking';
  hasQA?: boolean; // Whether to include Q&A slide at end
}

export const agenda: AgendaItem[] = [
  { time: '45 minutes', title: 'Modeling Minnesota Tax Policy with PolicyEngine', speakerIds: ['max-ghenis'], slideshowId: 'mn-house-2025', type: 'talk' },
];
