//import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import dayjs from "dayjs";
import Rcart from "../receiptData/receiptHead";
import UserInfoBox from "@/components/getFullname";
//import UserInfoBox from "../../components/getFullname";

export default function ReceiptPage() {
  //const { user } = useKindeAuth();

  const currentDate = dayjs().format("MMMM D, YYYY h:mm A");

  return (
    <div className="max-w-md mx-auto border border-gray-300 shadow-sm p-6 mt-10 font-mono bg-white">
      <div className="text-center border-b border-dashed pb-4 mb-4">
        <h2 className="text-xl font-bold">FamerHome Market</h2>
        <p className="text-sm">Pickup Order Summary</p>
        <p className="text-xs text-gray-500">{currentDate}</p>
      </div>
      <UserInfoBox/>
      <Rcart />

      <div className="text-sm mb-4">{/* <UserInfoBox/> */}</div>

      {/* Items */}

      {/* Footer Note */}
      <div className="border-t border-dashed pt-4 text-center text-xs text-gray-500">
        This order is not valid without presentation at the pickup point. Please
        present it at the selected station to finalize payment and collect your
        items.
      </div>
    </div>
  );
}

// add each product name
