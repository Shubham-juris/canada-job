import jobs from '@/data/jobs.json';
import { JobCard } from '@/components/jobs/JobCard';
import type { Job } from '@/lib/types';

export function LatestJobs() {
  const latestJobs: Job[] = jobs.slice(0, 4);

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Job Postings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
