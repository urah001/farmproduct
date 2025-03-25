"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/ui/cart-provider";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="text-3xl font-bold mb-6">Your Order</h1>
          <div className="border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you havent ordered anyonex yet.
            </p>
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Order</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      {/* <th className="text-left p-4">Product</th> */}
                      <th className="text-left p-4">Worker</th>
                      <th className="text-center p-4">Hours</th>
                      <th className="text-right p-4">Price</th>
                      <th className="text-right p-4">Total</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-t">
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                layout="fill" /* Stretches image to fit the parent */
                                objectFit="cover" /* Ensures the image covers the area */
                                className="rounded-lg"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                ₦{item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          ₦{item.price.toFixed(2)}
                        </td>
                        <td className="p-4 text-right font-medium">
                          ₦{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-4 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div className="border rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₦{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>₦{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button size="lg" className="w-full">
                {/* Proceed to Checkout */}
                Proceed to Connect
              </Button>
              {/* remove  below*/}
              {/* <div className="text-center text-sm text-muted-foreground">
                <p>or</p>
                <Link href="/products" className="underline">
                  Continue Shopping
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
