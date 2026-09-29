import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import type { DashboardStat } from '../data/dashboardData';

interface StatCardProps {
  stat: DashboardStat;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;
  const isUp = stat.trend === 'up';

  return (
    <article className="card flex h-[76px] items-center px-3 py-2.5">
      <div className="mr-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F6F6] text-gold">
        <Icon size={19} fill="currentColor" strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <div className="text-[15px] font-semibold leading-none text-[#2D2F34]">{stat.label}</div>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-[22px] font-semibold leading-none tracking-[-.01em] text-[#333438]">{stat.value}</span>
          <span
            className={
              isUp
                ? 'inline-flex items-center gap-0.5 rounded-full bg-[#D1FADF] px-2 py-1 text-[10px] font-semibold leading-none text-[#12B76A]'
                : 'inline-flex items-center gap-0.5 rounded-full bg-[#FEE4E2] px-2 py-1 text-[10px] font-semibold leading-none text-[#F04438]'
            }
          >
            {stat.percent}
            {isUp ? <ArrowUpRight size={12} strokeWidth={2.4} /> : <ArrowDownRight size={12} strokeWidth={2.4} />}
          </span>
        </div>
      </div>
    </article>
  );
}
