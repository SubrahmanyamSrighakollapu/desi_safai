import type { Metadata } from "next";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.18),_transparent_25%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-4 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm font-semibold text-blue-200">
            Admin Portal
          </p>
          <h1 className="max-w-lg text-5xl font-bold leading-tight">
            Manage leads and track every contact request in one place.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Sign in to access the dashboard overview and the Queries tab for all form submissions coming from the website contact page.
          </p>
          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            {[
              "Protected admin authentication",
              "Instant redirect after login",
              "Dashboard summary cards",
              "Queries table with newest requests first",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <AdminLoginForm />
        </div>
      </div>
    </section>
  );
}
