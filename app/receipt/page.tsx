"use client";

import { useCart } from "@/components/ui/cart-provider";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import dayjs from "dayjs";

export default function ReceiptPage() {
  const { items, totalPrice } = useCart();
  const { user } = useKindeAuth();
  
  const currentDate = dayjs().format("MMMM D, YYYY h:mm A");

  return (
    <div className="max-w-md mx-auto border border-gray-300 shadow-sm p-6 mt-10 font-mono bg-white">
      <div className="text-center border-b border-dashed pb-4 mb-4">
        <h2 className="text-xl font-bold">FamerHome Market</h2>
        <p className="text-sm">Receipt</p>
        <p className="text-xs text-gray-500">{currentDate}</p>
      </div>

      {user && (
        <div className="text-sm mb-4">
          <p>
            <strong>Name:</strong> {user!.given_name} {user!.family_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}

      {/* Items */}
      <div className="border-b border-dashed pb-4 mb-4">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <div>
                <p>{item.name}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p>₦{(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm">No items in cart</p>
        )}
      </div>

      <div className="text-sm space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>₦{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>₦0.00</span>
        </div>
        <div className="flex justify-between font-bold text-base">
          <span>Total:</span>
          <span>₦{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Footer Note */}
      <div className="border-t border-dashed pt-4 text-center text-xs text-gray-500">
        Thank you for supporting local farmers!
      </div>
    </div>
  );
}
