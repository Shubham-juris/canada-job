import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { LatestJobs } from "@/components/home/LatestJobs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedCategories />
      <LatestJobs />
      <section className="py-16 text-center bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Find Your Next Opportunity?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore thousands of job listings across Canada. Your dream job is just a click away.
          </p>
          <Button asChild size="lg">
            <Link href="/jobs">Browse All Jobs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
