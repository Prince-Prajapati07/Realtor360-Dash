import type { LucideIcon } from 'lucide-react';
import { BadgeDollarSign, Handshake, Home, UserRound } from 'lucide-react';

export type StatTrend = 'up' | 'down';

export interface DashboardStat {
  label: string;
  value: string;
  trend: StatTrend;
  percent: string;
  icon: LucideIcon;
}

export const colors = {
  gold: '#D9A514',
  tan: '#E4C47C',
  cream: '#F8EEDB',
  ink: '#17171C',
  body: '#5F6B7A',
  muted: '#98A2B3',
  teal: '#0E9384',
  pink: '#F04452',
  purple: '#7C3AED',
} as const;

export const navItems = [
  'Home',
  'Developments',
  'Buildings',
  'Units',
  'Leads',
  'Companies',
  'Contacts',
  'Deals',
  'Activities',
  'Attorney Firms',
  'Reports',
  '...',
] as const;

export const stats: DashboardStat[] = [
  { label: 'Active Listing', value: '23', trend: 'down', percent: '-12%', icon: Home },
  { label: 'Active Leads', value: '120', trend: 'up', percent: '+12%', icon: UserRound },
  { label: 'Total Closed', value: '42', trend: 'up', percent: '+12%', icon: Handshake },
  { label: 'Total Revenue', value: 'Rs.22Cr.', trend: 'up', percent: '+12%', icon: BadgeDollarSign },
];

export interface DonutDatum {
  name: string;
  value: number;
  count: number;
  percent: string;
  fill: string;
}

export const leadSources: DonutDatum[] = [
  { name: 'Website', value: 24.83, count: 10, percent: '24.83%', fill: '#EEDFA6' },
  { name: 'Facebook', value: 6.78, count: 1, percent: '6.78%', fill: '#F0D36B' },
  { name: 'Reference', value: 30.6, count: 1, percent: '30.6%', fill: colors.gold },
  { name: 'Inbound Call', value: 37.87, count: 9, percent: '37.87%', fill: colors.cream },
];

export interface StageDatum {
  stage: string;
  angelPlaza: number;
  angelGarden: number;
  none: number;
}

export const stageDevelopmentData: StageDatum[] = [
  { stage: 'Interested', angelPlaza: 3, angelGarden: 2.6, none: 2.2 },
  { stage: 'Site Visit Done', angelPlaza: 3.7, angelGarden: 3.4, none: 2.8 },
  { stage: 'Unit Shortlisted', angelPlaza: 3.5, angelGarden: 3.1, none: 2.8 },
  { stage: 'Contracts Signed', angelPlaza: 3.7, angelGarden: 3.4, none: 2.8 },
  { stage: 'Offer Initiated', angelPlaza: 3.1, angelGarden: 2.8, none: 2.5 },
  { stage: 'Offer Accepted', angelPlaza: 3.7, angelGarden: 3.4, none: 2.8 },
];

export interface SalesDatum {
  owner: string;
  angelPlaza: number;
  angelGarden: number;
  none: number;
}

export const salesPeopleData: SalesDatum[] = [
  { owner: ' ', angelPlaza: 5, angelGarden: 6.2, none: 6.7 },
  { owner: '  ', angelPlaza: 2.4, angelGarden: 5.6, none: 4.2 },
];

export const pipelineRows = [
  { development: 'None', count: 14 },
  { development: 'Angel Plaza', count: 3 },
  { development: 'Angel Garden', count: 1 },
] as const;

export const reminders = [
  {
    title: 'Submit Final Offer- Villa Deal',
    body: 'Finalize and send offer documents.',
  },
  {
    title: 'Review Contract with Legal',
    body: 'Ensure attorney reviews apartment deal contract today.',
  },
  {
    title: 'Call Jessica Chen – Follow-up',
    body: 'Discuss her feedback after site visit to Angel Plaza.',
  },
] as const;

export interface ScheduleItem {
  title: string;
  detail: string;
  color: '#0E9384' | '#F04452' | '#D9A514';
}

export const scheduleItems: ScheduleItem[] = [
  { title: 'Visit Client- Angel Plaza', detail: 'Sector 45, Gurugram, Haryana', color: '#0E9384' },
  { title: 'Visit Client – Site Walkthrough', detail: 'Whitefield Road, Bengaluru, Karnataka', color: '#0E9384' },
  { title: 'Follow Up – Jessica Chen', detail: 'jessica.chen@email.com', color: '#F04452' },
  { title: 'Follow Up – Roger Bouchard', detail: 'roger.bouchard@clientmail.com', color: '#F04452' },
  { title: 'Submit Final Offer – Villa Deal', detail: 'Finalize and send offer documents.', color: '#D9A514' },
  {
    title: 'Submit Internal Review – Apartment PricingFinal Offer – Villa Deal',
    detail: 'Update CRM with latest market rates.',
    color: '#D9A514',
  },
];

export const contacts = [
  { name: 'John Doe', location: 'New York', initials: 'JD', tone: 'from-[#8A5A30] to-[#D4A373]' },
  { name: 'Jessica Chen', location: 'California LA', initials: 'JC', tone: 'from-[#2F80ED] to-[#95C8FF]' },
  { name: 'Evan Chris', location: 'New York', initials: 'EC', tone: 'from-[#0E9384] to-[#7CD6CB]' },
  { name: 'Jack B.', location: 'Ohio Columbus', initials: 'JB', tone: 'from-[#7C3AED] to-[#C4B5FD]' },
  { name: 'Emily Paris', location: 'California LA', initials: 'EP', tone: 'from-[#F04452] to-[#FDB0B7]' },
] as const;

export interface ListingRow {
  property: string;
  type: string;
  units: string;
  price: string;
  activeLeads: string;
  views: string;
  status: string;
  statusTone: 'teal' | 'green' | 'red';
}

export const listings: ListingRow[] = [
  { property: 'Maplewood House', type: 'House', units: '12', price: 'Rs.85L', activeLeads: '+35', views: '125', status: '8/12 Occupied', statusTone: 'teal' },
  { property: 'Serenity Villa', type: 'Villa', units: '9300', price: 'Rs.2.8Cr', activeLeads: '+40', views: '930', status: 'Available', statusTone: 'green' },
  { property: 'Rosehill Cottage', type: 'House', units: '25', price: 'Rs.1.1Cr', activeLeads: '+15', views: '355', status: 'Available', statusTone: 'green' },
  { property: 'Skyline Edge', type: 'Apartment', units: '17', price: 'Rs.75L', activeLeads: '+11', views: '425', status: 'Sold Out', statusTone: 'red' },
];
