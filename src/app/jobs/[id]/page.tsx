import { notFound } from 'next/navigation';
import jobs from '@/data/jobs.json';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ApplyModal } from '@/components/jobs/ApplyModal';
import { MapPin, DollarSign, Calendar, CheckCircle } from 'lucide-react';
import type { Job } from '@/lib/types';

interface JobDetailsPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  const job: Job | undefined = jobs.find(j => j.id.toString() === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-secondary/20 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-3xl font-bold">{job.title}</CardTitle>
                  <Badge variant="secondary" className="text-base">{job.type}</Badge>
                </div>
                <CardDescription className="text-lg font-medium text-primary">
                  {job.company}
                </CardDescription>
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-muted-foreground">
                  <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> {job.location}</div>
                  <div className="flex items-center"><DollarSign className="h-4 w-4 mr-2" /> {job.salary}</div>
                  <div className="flex items-center"><Calendar className="h-4 w-4 mr-2" /> Posted on {new Date(job.postedDate).toLocaleDateString()}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-foreground">
                  <h3 className="font-semibold text-xl mb-2">Job Description</h3>
                  <p>{job.description}</p>

                  <h3 className="font-semibold text-xl mt-6 mb-2">Responsibilities</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-xl mt-6 mb-2">Benefits</h3>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Ready to Apply?</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center">
                <p className="text-muted-foreground mb-4">
                  Click the button below to start your application.
                </p>
                <ApplyModal />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
