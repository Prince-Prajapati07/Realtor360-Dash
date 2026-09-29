import { ActiveListingTable } from './components/ActiveListingTable';
import { CalendarCard } from './components/CalendarCard';
import { ContactsCard } from './components/ContactsCard';
import { DonutLeadSource } from './components/DonutLeadSource';
import { Navbar } from './components/Navbar';
import { PipelineTable } from './components/PipelineTable';
import { ReminderCard } from './components/ReminderCard';
import { SalesPeopleChart } from './components/SalesPeopleChart';
import { ScheduleCard } from './components/ScheduleCard';
import { StageDevelopmentChart } from './components/StageDevelopmentChart';
import { StatCard } from './components/StatCard';
import { TotalClosedCard } from './components/TotalClosedCard';
import { stats } from './data/dashboardData';

export default function App() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar />
      <main className="px-6 py-5">
        <section className="space-y-3">
          <div className="grid grid-cols-4 gap-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>

          <div className="grid grid-cols-[38.3%_38.3%_1fr] gap-3">
            <div className="col-span-2 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <DonutLeadSource />
                  <StageDevelopmentChart />
                </div>

                <div className="space-y-3">
                  <SalesPeopleChart />
                  <PipelineTable />
                  <TotalClosedCard />
                </div>
              </div>

              <div className="grid grid-cols-[73.5%_1fr] gap-3">
                <ActiveListingTable />
                <ContactsCard />
              </div>
            </div>

            <aside className="space-y-3">
              <ReminderCard />
              <CalendarCard />
              <ScheduleCard />
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
