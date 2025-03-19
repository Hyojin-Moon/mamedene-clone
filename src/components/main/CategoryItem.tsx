import React from "react";

interface CategoryProps {
  category: {
    id: number;
    name: string;
    image: string;
  };
}

const CategoryItem: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={category.image} alt={category.name} className="h-12 w-12 object-cover rounded-md" />
      <span className="text-xs mt-2">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
