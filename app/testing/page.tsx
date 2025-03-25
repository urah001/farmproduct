/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/ui/cart-provider"
import Image from "next/image"

// Strapi API URL NEXT_PUBLIC_STRAPI_KEY
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  featured: boolean
  new: boolean
  slug: string
}

export default function ProductGrid({ category = "", featured = false, limit = 8 }) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_URL}/api/posts?populate=image`)
        const data = await res.json()
  
        console.log("API Response:", data) // Debugging
  
        if (!data.data || !Array.isArray(data.data)) {
          console.log("Unexpected API response format:", data)
          return
        }
  
        const fetchedProducts = data.data.map((item: any) => ({
          id: item.id,
          name: item.attributes?.name || "Unknown Product",
          price: item.attributes?.price || 0,
          image: item.attributes?.image?.data?.attributes?.url
            ? `${API_URL}${item.attributes.image.data.attributes.url}`
            : "/placeholder.svg",
          category: item.attributes?.category || "Uncategorized",
          featured: item.attributes?.featured || false,
          new: item.attributes?.new || false,
          slug: item.attributes?.slug || "",
        }))
  
        setProducts(fetchedProducts)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
  
    fetchProducts()
  }, [])
  

  let filteredProducts = [...products]

  if (category === "featured" || featured) {
    filteredProducts = filteredProducts.filter((product) => product.featured)
  } else if (category === "new") {
    filteredProducts = filteredProducts.filter((product) => product.new)
  } else if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            height={300}
            width={300}
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
        <p className="font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => addItem({ ...product, quantity: 1 })}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
