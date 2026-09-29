import { colors } from '../data/dashboardData';

const legend = [
  { label: 'Angel Plaza', color: colors.gold },
  { label: 'Angel Garden', color: '#EDD899' },
  { label: 'None', color: colors.cream },
] as const;

export function ChartLegend() {
  return (
    <div className="flex items-center gap-5 pl-0 text-[12px] font-medium text-[#5B6069]">
      {legend.map((item) => (
        <span className="inline-flex items-center gap-2" key={item.label}>
          <span className="h-4 w-4 rounded-full" style={{ backgroundColor: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
