import { scheduleItems } from '../data/dashboardData';

export function ScheduleCard() {
  return (
    <article className="border-t border-[#C9CBCD] bg-white px-3 py-3">
      <h2 className="mb-3 text-[14px] font-medium text-[#2D2F34]">My Schedule</h2>
      <div className="space-y-2.5">
        {scheduleItems.map((item) => (
          <div className="border-l-2 py-0.5 pl-2.5" key={`${item.title}-${item.detail}`} style={{ borderColor: item.color }}>
            <div className="text-[11px] font-semibold leading-tight text-[#303238]">{item.title}</div>
            <div className="text-[9px] font-medium leading-tight text-[#6C727B]">{item.detail}</div>
          </div>
        ))}
      </div>
    </article>
  );
}
