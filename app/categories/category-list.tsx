"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllCategory } from "../data/fetchCat";

type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export function CategoryList({ limit = 3 }: { limit: number }) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategory().then((data) => setCategories(data));
  }, []);

  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.slice(0, limit).map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`}>
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full h-full">
                  <Image
                    alt={category.name || "fresh food"}
                    src={category.image || "/placeholder.svg"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <h3 className="text-white font-medium text-lg">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
