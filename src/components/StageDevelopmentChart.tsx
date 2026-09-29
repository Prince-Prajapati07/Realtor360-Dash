import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { colors, stageDevelopmentData } from '../data/dashboardData';
import { ChartLegend } from './ChartLegend';

export function StageDevelopmentChart() {
  return (
    <article className="card h-[235px] px-5 py-3.5">
      <h2 className="chart-title">Deals by Stages by Development</h2>
      <div className="relative mt-2 h-[151px] pl-6">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[12px] font-medium text-[#5F636A]">
          Record Count
        </div>
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={stageDevelopmentData} margin={{ bottom: 20, left: 4, right: 26, top: 6 }}>
            <CartesianGrid stroke="#BBBBBE" strokeDasharray="0" vertical={false} />
            <XAxis
              angle={-45}
              axisLine={{ stroke: '#BBBBBE' }}
              dataKey="stage"
              height={62}
              interval={0}
              tick={{ fill: '#626871', fontSize: 10 }}
              textAnchor="end"
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              domain={[0, 10]}
              interval={0}
              ticks={[0, 2.5, 5, 7.5, 10]}
              tick={{ fill: '#626871', fontSize: 10 }}
              tickFormatter={(value: number) => `${value}`}
              tickLine={false}
              width={36}
            />
            <Tooltip cursor={{ fill: 'rgba(217,165,20,.08)' }} />
            <Bar dataKey="angelPlaza" fill={colors.gold} isAnimationActive={false} stackId="a" />
            <Bar dataKey="angelGarden" fill="#EDD899" isAnimationActive={false} stackId="a" />
            <Bar dataKey="none" fill={colors.cream} isAnimationActive={false} radius={[6, 6, 0, 0]} stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="-mt-1 text-center text-[12px] font-medium text-[#5F636A]">Stage</div>
      <ChartLegend />
    </article>
  );
}
