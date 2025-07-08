"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
//import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Previous Page
        </Button>

        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Marketplace</h1>
          <p className="text-xl mb-6">
            We offer a wide variety of quality products designed to meet your needs,
            we have it all! Explore our categories and discover what suits you best.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <p>
                Our mission is to provide a seamless shopping experience with products that cater to
                every customer. We believe in reliability, affordability, and excellent service.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Wide Selection of Quality Products</li>
                <li>Secure and Easy Checkout Process</li>
                <li>Fast Delivery and Reliable Support</li>
                <li>Exclusive Deals and Discounts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today!</h2>
          <p className="text-lg mb-6">
            Become part of our community and get access to exclusive offers, new product releases,
            and more. Sign up now and start exploring!
          </p>
          {/* <Button size="lg" className="w-full">
            <Link href="/signup">Join Now</Link>
          </Button> */}
        </section>
      </div>
    </main>
  );
}
