"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    bio: "A student.",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
  });

  const [orders] = useState([
    {
      id: 1,
      name: "Plumbing Service",
      image: "/plumbing.jpg",
      price: 5000,
      quantity: 2,
      status: "Completed",
    },
    {
      id: 2,
      name: "Electrical Repair",
      image: "/electrician.jpg",
      price: 7000,
      quantity: 1,
      status: "Pending",
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="shadow-lg border rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-8">
          <div className="flex justify-center">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src="/avatar.jpg" alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl font-bold mt-3">{user.name}</CardTitle>
          <p className="text-sm opacity-80">{user.bio}</p>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-500" />
              <span className="text-gray-800">{user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-500" />
              <span className="text-gray-800">{user.phone}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5 text-blue-700" />
                </Button>
              </a>
              <a href={user.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5 text-gray-900" />
                </Button>
              </a>
              <a href={user.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5 text-blue-500" />
                </Button>
              </a>
            </div>

            <Button className="w-full mt-4">Edit Profile</Button>
          </div>
        </CardContent>
      </Card>

      {/* Past Orders Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Past Orders</h2>
        {orders.length > 0 ? (
          <div className="grid gap-4">
            {orders.map((order) => (
              <Card key={order.id} className="p-4 flex items-center gap-4 border rounded-lg">
                <div className="w-16 h-16 relative">
                  <Image
                    src={order.image}
                    alt={order.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{order.name}</h3>
                  <p className="text-sm text-gray-600">₦{order.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
                  <p className={`text-sm font-medium ${order.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
                    {order.status}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No past orders yet.</p>
        )}
      </div>
    </div>
  );
}
