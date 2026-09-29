import { ChevronLeft, ChevronRight } from 'lucide-react';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const;
const monthCells = Array.from({ length: 35 }, (_, index) => {
  const day = index - 1;
  return day > 0 && day <= 31 ? day : null;
});

export function CalendarCard() {
  return (
    <article className="card h-[220px] overflow-hidden px-3 py-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[26px] font-medium leading-none tracking-[-.02em] text-[#303238]">July 2025</h2>
        <div className="flex items-center gap-6 text-black">
          <ChevronLeft size={25} strokeWidth={3} />
          <ChevronRight size={25} strokeWidth={3} />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-7 text-center text-[10px] font-medium text-[#202226]">
        {days.map((day, index) => (
          <div key={`${day}-${index}`}>{day}</div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-y-1.5 text-center text-[10px] font-medium text-[#303238]">
        {monthCells.map((day, index) => (
          <CalendarDay day={day} key={`${day ?? 'blank'}-${index}`} />
        ))}
      </div>
    </article>
  );
}

interface CalendarDayProps {
  day: number | null;
}

function CalendarDay({ day }: CalendarDayProps) {
  if (day === null) {
    return <span />;
  }

  if (day === 8) {
    return <span className="mx-auto flex h-5 w-5 items-center justify-center rounded bg-gold text-white">{day}</span>;
  }

  const underline = day === 10 ? 'after:bg-teal' : day === 11 ? 'after:bg-gold' : day === 14 ? 'after:bg-pink' : '';

  return (
    <span
      className={
        underline
          ? `relative mx-auto inline-flex h-5 w-5 items-center justify-center after:absolute after:bottom-0 after:h-px after:w-4 ${underline}`
          : 'mx-auto inline-flex h-5 w-5 items-center justify-center'
      }
    >
      {day}
    </span>
  );
}
