// app/protected/page.tsx
import { redirect } from "next/navigation";

export default function ProtectedPage() {
  // Optional: Redirect to home after login
  return redirect("/");
}
