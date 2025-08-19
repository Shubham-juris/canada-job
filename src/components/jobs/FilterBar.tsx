"use client";

import { Button } from "@/components/ui/button";

interface FilterBarProps {
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

export function FilterBar({ selectedTypes, onTypeChange, selectedCategories, onCategoryChange }: FilterBarProps) {
  const jobTypes = ["Full-time", "Part-time", "Contract", "Remote"];
  const categories = ["IT", "Management", "Clerical", "Finance", "Healthcare", "Engineering", "Hospitality", "Marketing"];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Job Type</h3>
        <div className="flex flex-wrap gap-2">
          {jobTypes.map(type => (
            <Button
              key={type}
              variant={selectedTypes.includes(type) ? "default" : "outline"}
              onClick={() => onTypeChange(type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategories.includes(category) ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
