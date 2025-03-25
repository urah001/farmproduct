"use client";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { CategoryList } from "@/components/ui/category-list";

export default function CategoryPage() {
  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">All Service Categories</h1>
            <p className="text-muted-foreground">
              Browse our collection of high-skilled service renderers
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Filter</Button>
            <select className="border rounded p-2">
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="text-center py-12">Loading products...</div>
          }
        >
          <CategoryList limit={10} />
        </Suspense>
      </div>
    </main>
  );
}
