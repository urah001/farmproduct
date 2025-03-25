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
              Bring am make we help you run am
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Connecting skilled professionals with those who need
              them—effortlessly. Find the right expert for any task. Hire with
              confidence. Bringing services closer to you, one click at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products">find service</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl">
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
