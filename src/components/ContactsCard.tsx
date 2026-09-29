import { Phone } from 'lucide-react';
import { contacts } from '../data/dashboardData';

export function ContactsCard() {
  return (
    <article className="card h-[222px] overflow-hidden px-5 py-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="chart-title">Leads Contacts</h2>
        <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7F8F8] text-[#2F3338]" type="button">
          ↗
        </button>
      </div>
      <div className="space-y-3">
        {contacts.map((contact) => (
          <div className="flex items-center" key={contact.name}>
            <div className={`mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${contact.tone} text-[11px] font-bold text-white`}>
              {contact.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] font-semibold leading-none text-[#303238]">{contact.name}</div>
              <div className="mt-1 truncate text-[10px] font-medium leading-none text-[#68707A]">{contact.location}</div>
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8F8] text-black" type="button">
              <Phone size={15} fill="currentColor" />
            </button>
          </div>
        ))}
      </div>
    </article>
  );
}
