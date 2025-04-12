/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllCategory } from "@/app/data/fetchCat";

type Product = {
  id: number;
  slug: string;
  image: string;
  name: string;
  price: number;
  category: string; // optional: if you're using it in the filter
  description?: string;
};

export default function CategorySlug() {
  const { slug } = useParams();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const allCategories = await getAllCategory();
      // Assuming you want to collect all products from matching category slug
      const selectedCategory = allCategories.find(
        (cat: any) => cat.slug === slug
      );
      const products = selectedCategory?.products || [];
      setCategoryProducts(products);
      setLoading(false);
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (categoryProducts.length === 0) {
    return (
      <div className="container px-4 md:px-6 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-6">Sorry, no products found in this category.</p>
        <Button asChild>
          <Link href="/categoriesTest">Back to categories</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <Button
          variant="ghost"
          asChild
          className="mb-6"
          onClick={() => window.history.back()}
        >
          {/* <Link href="/categories">  */}
          <div className="cursor-pointer">
            <ChevronLeft className="h-4 w-4" />
          Back to All category
          </div>
          {/* </Link>  */}
        </Button>

        <h1 className="text-3xl font-bold mb-6 capitalize">{slug} Products</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="block border rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-60">
                <Image
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg font-bold">
                  ₦{product.price?.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
