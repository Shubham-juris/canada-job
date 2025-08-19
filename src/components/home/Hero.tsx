"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/jobs?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/jobs');
    }
  };

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="city skyline"
      ></div>
      <div className="relative container mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Job in Canada
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/80">
          Your next career move is just a search away.
        </p>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-lg">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full h-12 text-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" size="lg" className="h-12 w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
