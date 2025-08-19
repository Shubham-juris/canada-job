"use client";

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import jobs from '@/data/jobs.json';
import { JobCard } from '@/components/jobs/JobCard';
import { FilterBar } from '@/components/jobs/FilterBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Job } from '@/lib/types';

export default function JobsPage() {
  const searchParams = useSearchParams();
  const [allJobs] = useState<Job[]>(jobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(allJobs);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const searchQuery = useMemo(() => searchParams.get('search') || '', [searchParams]);

  useEffect(() => {
    let jobsToFilter = allJobs;

    if (searchQuery) {
        jobsToFilter = jobsToFilter.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTypes.length > 0) {
      jobsToFilter = jobsToFilter.filter(job => selectedTypes.includes(job.type));
    }

    if (selectedCategories.length > 0) {
      jobsToFilter = jobsToFilter.filter(job => selectedCategories.some(cat => job.category?.toLowerCase() === cat.toLowerCase()));
    }
    
    setFilteredJobs(jobsToFilter);
  }, [searchQuery, selectedTypes, selectedCategories, allJobs]);

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

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

        {searchQuery && (
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              Showing results for: <span className="font-semibold text-primary">{searchQuery}</span>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filter Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <FilterBar
                  selectedTypes={selectedTypes}
                  onTypeChange={handleTypeChange}
                  selectedCategories={selectedCategories}
                  onCategoryChange={handleCategoryChange}
                />
              </CardContent>
            </Card>
          </div>
          <main className="md:col-span-3">
             {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
                </div>
            ) : (
                <Card>
                    <CardContent className="pt-6">
                        <p className="text-center text-muted-foreground">
                        No jobs found matching your criteria.
                        </p>
                    </CardContent>
                </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
