"use client"

import ProductGrid from "./product-grid";

export function FeaturedProducts() {
  return <ProductGrid category="featured" limit={4} />
}

