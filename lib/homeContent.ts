import {
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  HandHeart,
  HeartHandshake,
  Home,
  LineChart,
  MessagesSquare,
  Repeat,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon
} from 'lucide-react';

export type IconTitle = { icon: LucideIcon; title: string };
export type StepItem = { title: string; description: string; icon: LucideIcon };

export const trustCards: IconTitle[] = [
  { icon: ShieldCheck, title: 'BCBA-Supervised Care' },
  { icon: ClipboardCheck, title: 'Individualized Plans' },
  { icon: LineChart, title: 'Progress You Can See' },
  { icon: HandHeart, title: 'Caregiver Partnership' }
];

export const processSteps: StepItem[] = [
  { title: 'Contact Us', description: 'Share your goals, concerns, and schedule needs.', icon: Users },
  { title: 'Assessment', description: 'A BCBA evaluates strengths and priority skills.', icon: BrainCircuit },
  { title: 'Therapy Begins', description: 'Consistent sessions begin with supportive coaching.', icon: Home },
  { title: 'Progress Reviews', description: 'We review data together and refine the plan.', icon: BarChart3 }
];

export const values: IconTitle[] = [
  { title: 'Compassion & Dignity', icon: HeartHandshake },
  { title: 'Evidence-Based Methods', icon: ClipboardCheck },
  { title: 'Clear Communication', icon: MessagesSquare },
  { title: 'Collaborative Care', icon: Users },
  { title: 'Consistency', icon: Repeat },
  { title: 'Real-World Skills', icon: Sparkles }
];
