// app/(protected)/pickup/page.tsx
"use client";

import { useState } from "react";
//import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pickupStations = [
  { id: 1, name: "Lokoja Central Station", address: "Opposite GTBank, Lokoja" },
  { id: 2, name: "Okene Pickup Hub", address: "Along LG Secretariat, Okene" },
  { id: 3, name: "Ankpa Drop-off", address: "Ankpa Express, by First Bank" },
];

export default function PickupPage() {
  const [selectedStation, setSelectedStation] = useState<number | null>(null);
  //const router = useRouter();

//   const handleContinue = () => {
//     if (!selectedStation) return;
//     localStorage.setItem("pickup_station", JSON.stringify(pickupStations.find(s => s.id === selectedStation)));
//     router.push("/receipt");
//   };

  return (
    <div className="container py-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Choose a Pickup Station</h2>
      <div className="space-y-4">
        {pickupStations.map((station) => (
          <Card
            key={station.id}
            onClick={() => setSelectedStation(station.id)}
            className={`cursor-pointer transition ${
              selectedStation === station.id ? "border-blue-500 ring-2 ring-blue-300" : ""
            }`}
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{station.name}</h3>
              <p className="text-sm text-gray-500">{station.address}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <Button onClick={handleContinue} className="mt-6 w-full"> */}
      <Button className="mt-6 w-full">
        <Link href={"receipt"}>
        Continue to Receipt
        </Link>
      </Button>
    </div>
  );
}
