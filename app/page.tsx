import { requireAuth } from "@/module/utils/auth-utils";
import { redirect } from "next/navigation";

export default async function Home() {
  await requireAuth();
  return redirect("/dashboard");
}
