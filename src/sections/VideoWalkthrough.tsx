
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Play } from 'lucide-react';

export const VideoWalkthrough = () => {
  return (
    <section id="how" className="py-24 bg-grey-50 dark:bg-[#111827]">
      <Container className="flex flex-col items-center">
        <SectionHeading
          label="Watch & Learn"
          title="See Trevon in action"
          subtitle="From creating your first event to managing complex multi-day trips — watch how effortless planning can be."
          className="mb-16"
        />

        <div className="w-full max-w-5xl aspect-video rounded-3xl bg-white dark:bg-white/5 shadow-xl border border-grey-200 dark:border-white/10 overflow-hidden relative cursor-pointer group">
          <div className="absolute inset-0 bg-linear-to-br from-brand-navy/5 to-brand-navy/10 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-brand-navy/5">
            <div className="w-20 h-20 rounded-full bg-brand-coral text-white flex items-center justify-center shadow-[0_0_0_12px_rgba(254,105,96,0.15)] group-hover:shadow-[0_0_0_16px_rgba(254,105,96,0.2)] group-hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 ml-1 fill-current" />
            </div>
            <p className="mt-8 text-brand-navy dark:text-white font-medium text-lg">
              How to use Trevon — Full Walkthrough
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            'Create your event or trip',
            'Invite your crew',
            'Plan together in real-time',
            'Experience it stress-free',
          ].map((step, idx) => (
            <div key={idx} className="flex items-center gap-3 text-grey-700 dark:text-grey-300 font-medium">
              <div className="w-8 h-8 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center text-sm font-bold">
                {idx + 1}
              </div>
              {step}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
