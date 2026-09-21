import { STATS } from "@/lib/clinic-data";

export function StatsBar() {
  return (
    <section className="bg-primary text-primary-foreground py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center space-y-1">
              <p className="text-3xl md:text-4xl font-bold">
                {stat.value}
                <span className="text-primary-foreground/70">{stat.suffix}</span>
              </p>
              <p className="text-sm text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
