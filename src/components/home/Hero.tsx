"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import bg from '@/assets/toronto-street-view.jpg';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
};

const jobList: Job[] = [
  { id: 1, title: "Senior Frontend Developer", company: "Tech Solutions Inc.", location: "Toronto, ON" },
  { id: 2, title: "Backend Engineer", company: "CloudNova", location: "Vancouver, BC" },
  { id: 3, title: "Product Manager", company: "Maple Innovations", location: "Calgary, AB" },
  { id: 4, title: "Data Scientist", company: "AI Labs", location: "Toronto, ON" },
  // You can replace this with API call later
];

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/jobs?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/jobs');
    }
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      const results = jobList.filter(job =>
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        job.company.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredJobs(results);
    } else {
      setFilteredJobs([]);
    }
  };

  const handleSuggestionClick = (job: Job) => {
    setSearchQuery(job.title);
    setFilteredJobs([]);
    router.push(`/jobs/${job.id}`); // 👈 navigate directly to job details
  };

  return (
    <section className="relative h-[82vh] min-h-[400px] flex items-center justify-center text-white bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bg.src || bg})` }}
        data-ai-hint="city skyline"
      ></div>

      <div className="relative container mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Job in Canada
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/80">
          Your next career move is just a search away.
        </p>
        <div className="max-w-2xl mx-auto relative">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-lg"
          >
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full h-12 text-foreground"
                value={searchQuery}
                onChange={(e) => handleInputChange(e.target.value)}
              />
              {/* 🔽 Suggestions Dropdown */}
              {filteredJobs.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 bg-white text-black rounded-md shadow-lg max-h-56 overflow-auto z-20">
                  {filteredJobs.map((job) => (
                    <li
                      key={job.id}
                      onClick={() => handleSuggestionClick(job)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <div className="font-medium">{job.title}</div>
                      <div className="text-sm text-gray-500">
                        {job.company} – {job.location}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
