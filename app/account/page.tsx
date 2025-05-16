/// eslint-disable react-hooks/rules-of-hooks 
// "use client";
// stephengamer246
// import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default async function AccountPage() {
  const {getUser} = getKindeServerSession(); 
  const  user  = await getUser();

  
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading account...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-lg border rounded-2xl">
        <CardHeader className="flex flex-col items-center justify-center py-6 bg-gray-50">
          <Avatar className="w-20 h-20 mb-4">
            <AvatarImage src={user!.picture || "/avatar.jpg"} alt={user!.given_name || "User"} />
            <AvatarFallback>{(user!.given_name || "U")[0]}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-xl font-bold">
            {user!.given_name} {user!.family_name}
          </CardTitle>
          <p className="text-gray-600">{user!.email}</p>
        </CardHeader>

        <CardContent className="space-y-4 mt-4">
          <div className="text-sm text-gray-500">
            <strong>First Name:</strong> {user!.given_name}
          </div>
          <div className="text-sm text-gray-500">
            <strong>Last Name:</strong> {user!.family_name}
          </div>
          <div className="text-sm text-gray-500">
            <strong>Email:</strong> {user!.email}
          </div>

          {/* Optional: Add edit profile later if you use a DB */}
          <Button className="w-full mt-4">Edit Profile (Coming Soon)</Button>

          <LogoutLink>
            <Button variant="destructive" className="w-full">
              Logout
            </Button>
          </LogoutLink>
        </CardContent>
      </Card>
    </div>
  );
}
