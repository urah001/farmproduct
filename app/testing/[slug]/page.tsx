"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/ui/cart-provider";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/app/data/fetchData";

interface ProductType {
  id: number;
  name: string;
  price: number;
  slug: string;
  description: string;
  image: string;
  features: string[];
};

export default function ProductSlug() {
  const { slug } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    async function fetchData() {
      //const res = await fetch("http://localhost:1337/api/posts?populate=*");
      const res = await getAllProducts();
      //const data = await res.json();
      const filteredData = [...res];
      const found = filteredData.find((p: ProductType) => p.slug === slug);
      setProduct(found || null);
    }

    fetchData();
  }, [slug]);

  if (!product) {
    return (
      <div className="container px-4 md:px-6 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">
          Sorry, the product youre looking for doesnt exist.
        </p>
        <Button asChild className="cursor-pointer">
          <Link href="/products">Back to Fresh Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Services
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-lg overflow-hidden border relative w-full h-80">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">
              ₦{product.price.toFixed(2)}
            </p>
            <p>{product.description}</p>
            <div>
              <h3 className="font-medium mb-2">Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-medium">Time:</span>
                <div className="flex items-center">
                  <Button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full"
                onClick={() => addItem({ ...product, quantity })}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
