import { listings } from '../data/dashboardData';

const statusClass = {
  teal: 'bg-[#D7FAF4] text-[#0E9384]',
  green: 'bg-[#D1FADF] text-[#12B76A]',
  red: 'bg-[#FEE4E2] text-[#F04438]',
} as const;

export function ActiveListingTable() {
  return (
    <article className="card h-[222px] overflow-hidden px-5 py-4">
      <h2 className="chart-title mb-3">Active Listing</h2>
      <table className="w-full table-fixed border-collapse text-left">
        <thead>
          <tr className="rounded-md bg-[#F4F7F7] text-[14px] font-medium text-[#313338]">
            <th className="w-[32%] rounded-l-md px-2.5 py-2.5 font-medium">Property</th>
            <th className="w-[8%] px-2.5 py-2.5 font-medium">Type</th>
            <th className="w-[8%] px-2.5 py-2.5 font-medium">Units</th>
            <th className="w-[10%] px-2.5 py-2.5 font-medium">Price</th>
            <th className="w-[14%] px-2.5 py-2.5 font-medium">Active Leads</th>
            <th className="w-[8%] px-2.5 py-2.5 font-medium">Views</th>
            <th className="w-[20%] rounded-r-md px-2.5 py-2.5 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr className="text-[13px] font-medium text-[#303238]" key={listing.property}>
              <td className="px-2.5 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 shrink-0 rounded-md bg-[linear-gradient(135deg,#D7B66B,#785D40)]" />
                  <span className="whitespace-nowrap">{listing.property}</span>
                </div>
              </td>
              <td className="px-2.5 py-2.5">{listing.type}</td>
              <td className="px-2.5 py-2.5">{listing.units}</td>
              <td className="px-2.5 py-2.5">{listing.price}</td>
              <td className="px-2.5 py-2.5">
                <div className="flex items-center">
                  <span className="h-6 w-6 rounded-full border border-white bg-[#8A5A30]" />
                  <span className="-ml-2 h-6 w-6 rounded-full border border-white bg-[#487FA8]" />
                  <span className="-ml-2 rounded-full bg-[#F1F2F3] px-1.5 py-1 text-[9px] font-semibold text-[#555B63]">
                    {listing.activeLeads}
                  </span>
                </div>
              </td>
              <td className="px-2.5 py-2.5">{listing.views}</td>
              <td className="px-2.5 py-2.5">
                <span className={`rounded-full px-3 py-1 text-[12px] font-medium ${statusClass[listing.statusTone]}`}>
                  {listing.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
