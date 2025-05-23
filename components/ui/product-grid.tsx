"use client";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "./cart-provider";
import Image from "next/image";
import { allProducts } from "@/app/data/product";


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  new: boolean;
  slug: string;
}

export default function ProductGrid({
  category = "",
  featured = false,
  limit = 8,
}) {
  let products = [...allProducts];
  // the conditionallogic for the new and featured
  if (category === "featured" || featured) {
    products = products.filter((product) => product.featured);
  } else if (category === "new") {
    products = products.filter((product) => product.new);
  } else if (category) {
    products = products.filter((product) => product.category === category);
  }

  if (limit) {
    products = products.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            height={100}
            width={100}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          {product.new && (
            <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/products/${product.slug}`} className="hover:underline">
          <h3 className="font-medium text-lg mb-2">{product.name}</h3>
        </Link>
        <p className="font-bold">{product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => addItem({ ...product, quantity: 1 })}
        >
          order service
        </Button>
      </CardFooter>
    </Card>
  );
}
