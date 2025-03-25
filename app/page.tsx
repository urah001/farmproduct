import Link from "next/link";
import ProductGrid from "@/components/ui/product-grid";
import { FeaturedProducts } from "@/components/ui/featured-products";
import { HeroSection } from "@/components/ui/hero-section";
import { CategoryList } from "@/components/ui/category-list";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <div className="container px-4 md:px-6 py-8">
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Find by Category
            </h2>
            <Link href="/products" className="text-primary hover:underline">
              View all
            </Link>
          </div>
        </section>
        <CategoryList limit={2} />

        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Workers
            </h2>
            <Link href="/products" className="text-primary hover:underline">
              View all
            </Link>
          </div>
          <FeaturedProducts />
        </section>
        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">New Workers</h2>
            <Link href="/products" className="text-primary hover:underline">
              View all
            </Link>
          </div>
          <ProductGrid category="new" />
        </section>
      </div>
    </main>
  );
}
