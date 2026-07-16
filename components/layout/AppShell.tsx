"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import Header from "@/components/layout/Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <main className={isAdminRoute ? "min-h-screen bg-slate-950" : ""}>{children}</main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingButtons />}
    </>
  );
}
