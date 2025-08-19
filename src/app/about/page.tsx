import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Integrity",
    description: "We believe in honest and transparent relationships with both job seekers and employers.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We continuously seek innovative solutions to improve the job search experience.",
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Transparency",
    description: "We provide clear and straightforward information to empower your career decisions.",
  },
];

const whyChooseUsItems = [
    "Comprehensive Job Listings",
    "User-Friendly Interface",
    "Dedicated Support Team",
    "Career Development Resources"
];

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
        <Card className="overflow-hidden mb-16">
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

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {values.map((value) => (
                    <Card key={value.title} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                                {value.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="mb-2">{value.title}</CardTitle>
                            <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <Card className="bg-secondary/30">
            <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us?</h2>
                    <p className="text-muted-foreground mb-6">
                        We are committed to providing the best platform for your job search in Canada. Here’s what makes us different:
                    </p>
                    <ul className="space-y-4">
                        {whyChooseUsItems.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <Check className="h-6 w-6 mr-3 p-1 bg-primary text-primary-foreground rounded-full" />
                                <span className="text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="relative min-h-[300px] md:min-h-[400px] order-first md:order-last">
                    <Image
                        src="https://placehold.co/600x400.png"
                        alt="Happy professionals"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="happy professional"
                    />
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
}
