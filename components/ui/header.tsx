"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Settings, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "./cart-provider";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();

  const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Find Services" },
    { href: "/categories", label: "Service Categories" },
    { href: "/about", label: "About" },
    // { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="ml-4 md:ml-0 flex items-center gap-2">
          <Settings className="h-6 w-6" />
          <span className="font-bold text-xl">RunAM</span>
        </Link>
        <nav className="mx-6 hidden md:flex items-center gap-6 text-sm">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`transition-colors hover:text-primary ${
                pathname === route.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[200px] md:w-[300px]"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {items.length > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center -mt-1 -mr-1">
                  {items.length}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
