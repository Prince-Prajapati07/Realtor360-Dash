import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { colors, salesPeopleData } from '../data/dashboardData';
import { ChartLegend } from './ChartLegend';

export function SalesPeopleChart() {
  return (
    <article className="card h-[132px] px-5 py-3">
      <h2 className="chart-title">Deals by Sales People by Development</h2>
      <div className="mt-0 h-[78px]">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={salesPeopleData} layout="vertical" margin={{ bottom: 18, left: 0, right: 16, top: 4 }}>
            <CartesianGrid horizontal={false} stroke="#BBBBBE" />
            <XAxis
              axisLine={false}
              dataKey="value"
              domain={[0, 20]}
              label={{ value: 'Record Count', position: 'insideBottom', offset: -9, fill: '#5F636A', fontSize: 13 }}
              tick={{ fill: '#626871', fontSize: 10 }}
              ticks={[0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20]}
              tickLine={false}
              type="number"
            />
            <YAxis
              axisLine={false}
              dataKey="owner"
              label={{ value: 'Deal Owner', angle: -90, position: 'insideLeft', fill: '#5F636A', fontSize: 13 }}
              tick={false}
              tickLine={false}
              type="category"
              width={27}
            />
            <Tooltip cursor={{ fill: 'rgba(217,165,20,.08)' }} />
            <Bar barSize={22} dataKey="angelPlaza" fill={colors.gold} isAnimationActive={false} radius={[5, 5, 5, 5]} stackId="a" />
            <Bar barSize={22} dataKey="angelGarden" fill="#EDD899" isAnimationActive={false} radius={[0, 5, 5, 0]} stackId="a" />
            <Bar barSize={22} dataKey="none" fill={colors.cream} isAnimationActive={false} radius={[0, 5, 5, 0]} stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend />
    </article>
  );
}
