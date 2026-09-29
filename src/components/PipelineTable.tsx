import { pipelineRows } from '../data/dashboardData';

export function PipelineTable() {
  return (
    <article className="card h-[235px] px-5 py-3.5">
      <h2 className="chart-title">Deals in Pipeline by Development</h2>
      <div className="mt-5 overflow-hidden rounded-md">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#F4F7F7]">
              <th className="px-3 py-2 text-[12px] font-medium text-[#33363B]">Development Name</th>
              <th className="px-3 py-2 text-right text-[12px] font-medium text-[#33363B]">Record Count</th>
            </tr>
          </thead>
          <tbody>
            {pipelineRows.map((row) => (
              <tr key={row.development}>
                <td className="px-3 py-3 text-[12px] font-medium text-[#33363B]">{row.development}</td>
                <td className="px-3 py-3 text-right text-[12px] font-medium text-[#33363B]">{row.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
