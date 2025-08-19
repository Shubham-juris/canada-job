import jobs from '@/data/jobs.json';
import { JobCard } from '@/components/jobs/JobCard';
import { FilterBar } from '@/components/jobs/FilterBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Job } from '@/lib/types';

export default function JobsPage() {
  const allJobs: Job[] = jobs;

  return (
    <div className="bg-secondary/20">
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
            Explore Job Openings
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find the perfect role for you from our curated list of jobs across Canada.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filter Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <FilterBar />
              </CardContent>
            </Card>
          </div>
          <main className="md:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {allJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
