import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Food that fit Your Health [placeholder]
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Get quality , fresh and affordable foods and crops straight from
              the farm [ this is just a placeholder ] .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                {/* takes you to a place where food and crops are seen in random order */}
                <Link href="/products">find crops</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                {/* browse by by categories : take to the page where all crops are grouped by categories */}
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl">
          {/* change this image */}
              <Image
                src="/serviceFeatured.jpg"
                alt="Featured products showcase"
                layout="fill" /* Stretches image to fit the parent */
                objectFit="cover" /* Ensures the image covers the area */
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
