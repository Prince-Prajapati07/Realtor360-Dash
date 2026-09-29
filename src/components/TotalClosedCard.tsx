export function TotalClosedCard() {
  return (
    <article className="card h-[104px] px-5 py-3">
      <h2 className="chart-title">Total Deals Closed</h2>
      <div className="relative mt-1.5 h-7 overflow-hidden rounded-lg bg-[#F4F4F4]">
        <div className="h-full w-[43%] rounded-l-lg bg-[linear-gradient(90deg,#D9A514_0%,#E8C95B_45%,#F8EEDB_100%)]" />
        <div className="absolute left-[43%] top-[-4px] h-10 border-l border-dashed border-gold" />
      </div>
      <div className="mt-1.5 flex items-end justify-between">
        <div>
          <span className="text-[22px] font-medium leading-none text-[#292B30]">42</span>
          <span className="ml-2 text-[11px] font-medium text-body">Closed Deals</span>
        </div>
        <div>
          <span className="text-[22px] font-medium leading-none text-[#292B30]">132</span>
          <span className="ml-2 text-[11px] font-medium text-body">On Progress</span>
        </div>
      </div>
    </article>
  );
}
