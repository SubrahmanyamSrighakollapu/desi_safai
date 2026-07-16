import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminIndexPage() {
  const hasSession = Boolean((await cookies()).get("admin_session")?.value);

  redirect(hasSession ? "/admin/dashboard" : "/admin/login");
}
