import { reminders } from '../data/dashboardData';

const avatarPhotos = [
  'bg-[radial-gradient(circle_at_50%_32%,#F4C49B_0_22%,transparent_23%),linear-gradient(145deg,#3E2B24_0_38%,#C1844E_39%_100%)]',
  'bg-[radial-gradient(circle_at_52%_30%,#F3B995_0_22%,transparent_23%),linear-gradient(145deg,#20384D_0_40%,#75AADB_41%_100%)]',
  'bg-[radial-gradient(circle_at_50%_31%,#EFB287_0_22%,transparent_23%),linear-gradient(145deg,#6D4930_0_37%,#E6B16D_38%_100%)]',
  'bg-[radial-gradient(circle_at_50%_31%,#DFA17A_0_22%,transparent_23%),linear-gradient(145deg,#1F2937_0_42%,#7B8794_43%_100%)]',
] as const;

export function ReminderCard() {
  return (
    <article className="card h-[274px] px-3 py-3">
      <h2 className="text-[15px] font-semibold text-[#2D2F34]">Reminder</h2>
      <div className="mt-3 rounded-lg bg-[#F6EFE3] px-2.5 py-2">
        <div className="text-[12px] font-semibold leading-tight text-[#303238]">Follow-Ups</div>
        <div className="text-[10px] font-medium leading-tight text-[#626871]">15 leads need to be followed up.</div>
        <div className="mt-2 flex items-center pl-1">
          {avatarPhotos.map((photo, index) => (
            <span
              className={`-ml-1 block h-5 w-5 rounded-full border border-white bg-cover bg-center ${photo}`}
              key={photo}
              style={{ zIndex: 5 - index }}
            />
          ))}
          <span className="-ml-1 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#E6E7EA] text-[8px] font-bold text-[#5B6069]">
            +11
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-5">
        {reminders.map((reminder) => (
          <div key={reminder.title}>
            <h3 className="text-[12px] font-semibold leading-tight text-[#313338]">{reminder.title}</h3>
            <p className="mt-0.5 text-[10px] font-medium leading-[1.18] text-[#686E76]">{reminder.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
