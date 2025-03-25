import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Home & Domestics",
    image: "/homeServ.jpg?height=200&width=200",
    slug: "Home",
  },
  {
    id: 2,
    name: "Beauty & Personal care",
    image: "/beauty.svg?height=200&width=200",
    slug: "Beauty",
  },
  {
    id: 3,
    name: "Event & Entertainment",
    image: "/eventServ.svg?height=200&width=200",
    slug: "home-kitchen",
  },
  {
    id: 4,
    name: "Transport & Logistics",
    image: "/transportServ.svg?height=200&width=200",
    slug: "logistics-transport",
  },
  {
    id: 5,
    name: "Digital & Tech ",
    image: "/techServ.svg?height=200&width=200",
    slug: "digital-tech",
  },
  {
    id: 6,
    name: "Education & Training ",
    image: "/eductionServ.svg?height=200&width=200",
    slug: "training-ed",
  },
  {
    id: 7,
    name: "Repairs & maintainance ",
    image: "/eductionServ.svg?height=200&width=200",
    slug: "repairs",
  },
];

export function CategoryList({ limit = 3 }: { limit: number }) {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-4">
        {/* <h2 className="text-3xl font-bold tracking-tight mb-8">
          Shop by Category
        </h2> */}
        {/* <Link href="/categories" className="text-primary hover:underline">
          View all
        </Link> */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.slice(0, limit).map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`}>
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full h-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    layout="fill" /* Stretches image to fit the parent */
                    objectFit="cover" /* Ensures the image covers the area */
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
