import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "@/components/admin/AdminDashboard";
import { API_BASE_URL } from "@/lib/api";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

interface DashboardResponse {
  success: boolean;
  stats: {
    totalQueries: number;
    newQueries: number;
    todayQueries: number;
  };
  latestQuery: {
    name: string;
    service: string;
    created_at: string;
  } | null;
}

interface AdminResponse {
  success: boolean;
  admin: {
    id: number;
    name: string;
    email: string;
  };
}

interface QueriesResponse {
  success: boolean;
  queries: Array<{
    id: number;
    name: string;
    phone: string;
    location: string;
    service: string;
    message: string;
    status: string;
    created_at: string;
  }>;
}

async function fetchWithSession<T>(path: string, cookieHeader: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      cookie: cookieHeader,
    },
    cache: "no-store",
  });

  if (response.status === 401) {
    redirect("/admin/login");
  }

  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }

  return (await response.json()) as T;
}

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  if (!cookieStore.get("admin_session")?.value) {
    redirect("/admin/login");
  }

  const [adminData, dashboardData, queriesData] = await Promise.all([
    fetchWithSession<AdminResponse>("/admin/me", cookieHeader),
    fetchWithSession<DashboardResponse>("/admin/dashboard", cookieHeader),
    fetchWithSession<QueriesResponse>("/admin/queries", cookieHeader),
  ]);

  return (
    <AdminDashboard
      admin={adminData.admin}
      stats={dashboardData.stats}
      latestQuery={dashboardData.latestQuery}
      queries={queriesData.queries}
    />
  );
}
