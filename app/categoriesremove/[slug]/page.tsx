"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { allProducts } from "@/app/data/product"; // ✅ Import products


export default function CategorySlug() {
  const { slug } = useParams();
  const categoryProducts = allProducts.filter((p) => p.category === slug);

  if (categoryProducts.length === 0) {
    return (
      <div className="container px-4 md:px-6 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-6">Sorry, no products found in this category.</p>
        <Button asChild>
        <Link href="/categories">Back to categorys</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/categories">
            <ChevronLeft className="h-4 w-4" />
            Back to All category
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-6 capitalize">{slug} workers</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`} // ✅ Fix template literal syntax
              className="block border rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg font-bold">₦{product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
