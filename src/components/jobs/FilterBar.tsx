import { Button } from "@/components/ui/button";

export function FilterBar() {
  const jobTypes = ["Full-time", "Part-time", "Contract", "Remote"];
  const categories = ["IT", "Healthcare", "Finance", "Engineering"];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Job Type</h3>
        <div className="flex flex-wrap gap-2">
          {jobTypes.map(type => (
            <Button key={type} variant="outline">{type}</Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button key={category} variant="outline">{category}</Button>
          ))}
        </div>
      </div>
    </div>
  );
}
