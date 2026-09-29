import { ChevronDown, Info, Search } from 'lucide-react';
import { navItems } from '../data/dashboardData';

export function Navbar() {
  return (
    <header className="flex h-16 items-center border-b border-[#ECECEE] bg-white px-8 shadow-[0_1px_2px_rgba(16,24,40,.04)]">
      <div className="mr-8 flex shrink-0 items-center gap-2">
        <div className="relative h-7 w-6 text-gold">
          <span className="absolute left-[10px] top-0 h-7 w-px bg-gold" />
          <span className="absolute left-[5px] top-[4px] h-5 w-px bg-gold" />
          <span className="absolute left-[15px] top-[4px] h-5 w-px bg-gold" />
          <span className="absolute inset-x-0 top-[5px] h-[18px] rounded-full border-2 border-gold" />
        </div>
        <span className="text-[20px] font-extrabold tracking-[-.01em] text-[#37383D]">REALTOR360</span>
      </div>

      <nav className="flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden">
        {navItems.map((item) => (
          <a
            className={
              item === 'Home'
                ? 'rounded-xl bg-gold px-4 py-3 text-[14px] font-medium leading-none text-white'
                : 'whitespace-nowrap rounded-xl px-2.5 py-3 text-[14px] font-medium leading-none text-[#2E3035]'
            }
            href="#"
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>

      <button
        aria-label="Information"
        className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-purple"
        type="button"
      >
        <Info size={20} strokeWidth={2.4} />
      </button>

      <label className="ml-3 flex h-10 w-[152px] shrink-0 items-center rounded-lg bg-search px-3">
        <span className="sr-only">Search</span>
        <input
          className="min-w-0 flex-1 bg-transparent text-[12px] font-medium text-ink outline-none placeholder:text-[#777D86]"
          placeholder="Search..."
        />
        <Search className="text-[#2E3035]" size={22} strokeWidth={2.5} />
      </label>

      <div className="ml-7 flex shrink-0 items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#D7E8FA] to-[#A8C2DE] text-[13px] font-bold text-[#593B24] ring-4 ring-[#EDF2F7]">
          R
        </div>
        <ChevronDown size={17} strokeWidth={2.5} />
      </div>
    </header>
  );
}
