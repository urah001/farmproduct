"use client"
import { useCart } from "@/components/ui/cart-provider";

export default function Rcart() {
  const { items, totalPrice } = useCart();
  return (
    <>
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
    </>
  );
}
