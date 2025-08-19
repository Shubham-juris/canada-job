import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary text-primary-foreground py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold">About Canada Jobs</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Connecting talent with opportunity across the Great White North.
        </p>
      </header>

      <div className="container mx-auto py-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <div className="prose max-w-none text-foreground space-y-4">
                <p>
                  At Canada Jobs, our mission is to bridge the gap between talented professionals and the best companies in Canada. We believe that finding a fulfilling career is a cornerstone of a happy life, and we are dedicated to making that search as simple, efficient, and transparent as possible.
                </p>
                <p>
                  We strive to be the most trusted and user-friendly job portal in the country, offering a comprehensive platform that serves both job seekers and employers. By leveraging technology and a deep understanding of the Canadian job market, we provide the tools and resources necessary for success.
                </p>
                <h3 className="font-semibold text-xl">What We Do</h3>
                <p>
                  We curate a wide range of job opportunities from various industries, including Information Technology, Healthcare, Finance, and Engineering. Our platform is designed to help you navigate your career path with confidence. Whether you are a recent graduate or a seasoned professional, Canada Jobs is here to support your journey.
                </p>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <Image 
                src="https://placehold.co/600x800.png" 
                alt="Diverse team working together"
                layout="fill"
                objectFit="cover"
                data-ai-hint="office team"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
