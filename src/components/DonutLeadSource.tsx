import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { leadSources } from '../data/dashboardData';

export function DonutLeadSource() {
  return (
    <article className="card h-[235px] px-5 py-3.5">
      <h2 className="chart-title">Deals by Lead Source</h2>
      <div className="relative mx-auto mt-0 h-[190px] max-w-[520px]">
        <ResponsiveContainer height="100%" width="100%">
          <PieChart>
            <Pie
              cx="50%"
              cy="53%"
              data={leadSources}
              dataKey="value"
              endAngle={450}
              innerRadius={34}
              isAnimationActive={false}
              outerRadius={82}
              paddingAngle={0}
              startAngle={90}
              stroke="none"
            >
              {leadSources.map((entry) => (
                <Cell fill={entry.fill} key={entry.name} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0">
          <Callout className="left-[80px] top-[72px]" label="Website" value="10 (24.83%)" />
          <Callout className="right-[45px] top-[53px]" label="Inbound Call" value="9 (37.87%)" />
          <Callout className="left-[39px] top-[142px]" label="Facebook" value="1 (6.78%)" />
          <Callout className="right-[19px] top-[145px]" label="Reference" value="1 (30.6%)" />
          <svg className="absolute inset-0 h-full w-full overflow-visible" fill="none" viewBox="0 0 520 190">
            <path d="M183 58C158 44 128 50 105 73" stroke="#6F7176" strokeWidth="2" />
            <path d="M106 73l3-15M106 73l15 3" stroke="#6F7176" strokeLinecap="round" strokeWidth="2" />
            <path d="M347 57C369 42 398 41 410 58" stroke="#6F7176" strokeWidth="2" />
            <path d="M410 58l-4-15M410 58l-13 4" stroke="#6F7176" strokeLinecap="round" strokeWidth="2" />
            <path d="M178 151C161 173 133 180 107 173" stroke="#6F7176" strokeWidth="2" />
            <path d="M107 173l13-12M107 173l14 7" stroke="#6F7176" strokeLinecap="round" strokeWidth="2" />
            <path d="M336 177C365 194 401 185 430 160" stroke="#6F7176" strokeWidth="2" />
            <path d="M430 160l-16-2M430 160l-8 14" stroke="#6F7176" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </article>
  );
}

interface CalloutProps {
  className: string;
  label: string;
  value: string;
}

function Callout({ className, label, value }: CalloutProps) {
  return (
    <div className={`absolute text-[10px] font-medium leading-[1.05] text-[#686D75] ${className}`}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}
