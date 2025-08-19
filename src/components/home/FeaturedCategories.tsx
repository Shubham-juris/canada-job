import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, HeartPulse, Landmark, Wrench } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "IT & Technology", icon: Briefcase, href: "/jobs?category=it" },
  { name: "Healthcare", icon: HeartPulse, href: "/jobs?category=healthcare" },
  { name: "Finance", icon: Landmark, href: "/jobs?category=finance" },
  { name: "Engineering", icon: Wrench, href: "/jobs?category=engineering" },
];

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Job Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link href={category.href} key={category.name}>
                <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 group">
                  <CardHeader>
                    <div className="mx-auto bg-secondary p-4 rounded-full w-fit group-hover:bg-accent transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-accent-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
