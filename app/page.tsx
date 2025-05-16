// app/page.tsx
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
//import { CategoryList } from "./category-list";
import ProductPage from "./products/page";
import { CategoryList } from "./categories/category-list";

export default async function Home() {
   const { isAuthenticated } = getKindeServerSession();
   const userIsAuthenticated = await isAuthenticated();

  // a boolean expression to check if user is logged ( true ) or not ( false )
  //it !userIsAuthenticated : if user is not
   if (!userIsAuthenticated) {
     return redirect("/landing");
   }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Find by Category
            </h2>
            <Link href="/categories" className="text-primary hover:underline">
              View all
            </Link>
          </div>
        </section>
        {/* <CategoryList limit={2} /> */}
        <CategoryList limit={4}/>

        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Products
            </h2>
            <Link href="/products" className="text-primary hover:underline">
              View all
            </Link>
          </div>
          <ProductPage />
        </section>

        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">New Product</h2>
            <Link href="/products" className="text-primary hover:underline">
              View all
            </Link>
          </div>
          <ProductPage />
          {/* <ProductGrid category="new" /> */}
        </section>
      </div>
    </main>
  );
}
