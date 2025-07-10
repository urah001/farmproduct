
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function UserInfoBox() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // const saleId  = self.crypto.randomUUID();

  return (
    <div className="text-sm space-y-1">
      <p><strong>Name:</strong> {user?.given_name} {user?.family_name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      {/* <p>saleID : { saleId }</p> */}
    </div>
  );
}
