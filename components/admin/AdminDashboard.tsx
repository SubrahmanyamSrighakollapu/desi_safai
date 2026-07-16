"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard, MailQuestion, LogOut, Search, Bell,
  TrendingUp, Users, CalendarCheck, MessageSquare,
  ChevronRight, Clock, MapPin, Phone, Sparkles, Menu, X,
} from "lucide-react";
import { apiRequest } from "@/lib/api";
import { cn } from "@/lib/utils";

type TabKey = "dashboard" | "queries";

interface AdminDashboardProps {
  admin: { id: number; name: string; email: string };
  stats: { totalQueries: number; newQueries: number; todayQueries: number };
  latestQuery: { name: string; service: string; created_at: string } | null;
  queries: Array<{
    id: number; name: string; phone: string; location: string;
    service: string; message: string; status: string; created_at: string;
  }>;
}

const STATUS_STYLES: Record<string, string> = {
  new:        "bg-blue-500/15 text-blue-300 border-blue-500/20",
  pending:    "bg-amber-500/15 text-amber-300 border-amber-500/20",
  resolved:   "bg-green-500/15 text-green-300 border-green-500/20",
  cancelled:  "bg-red-500/15 text-red-300 border-red-500/20",
};

const NAV = [
  { key: "dashboard" as TabKey, label: "Dashboard", icon: LayoutDashboard },
  { key: "queries"   as TabKey, label: "Queries",   icon: MailQuestion },
];

export default function AdminDashboard({ admin, stats, latestQuery, queries }: AdminDashboardProps) {
  const router = useRouter();
  const [tab, setTab]           = useState<TabKey>("dashboard");
  const [search, setSearch]     = useState("");
  const [loggingOut, setLoggingOut] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return queries;
    return queries.filter((r) =>
      [r.name, r.phone, r.location, r.service, r.message].some((f) => f.toLowerCase().includes(q))
    );
  }, [queries, search]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await apiRequest("/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  };

  const statCards = [
    { label: "Total Queries",  value: stats.totalQueries,  icon: MessageSquare, color: "from-blue-600 to-blue-500",    iconBg: "bg-blue-500/20 text-blue-300" },
    { label: "New Queries",    value: stats.newQueries,    icon: TrendingUp,    color: "from-violet-600 to-violet-500", iconBg: "bg-violet-500/20 text-violet-300" },
    { label: "Today's Leads",  value: stats.todayQueries,  icon: CalendarCheck, color: "from-emerald-600 to-emerald-500", iconBg: "bg-emerald-500/20 text-emerald-300" },
    { label: "Total Customers",value: Math.max(stats.totalQueries, 0), icon: Users, color: "from-rose-600 to-rose-500", iconBg: "bg-rose-500/20 text-rose-300" },
  ];

  /* ── Sidebar ── */
  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <aside className={cn(
      "flex flex-col h-full bg-[#0f1535] border-r border-white/5",
      mobile ? "w-full" : "w-64 min-h-screen"
    )}>
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-900/40">
          <Sparkles size={16} className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-none">Desi Safai</p>
          <p className="text-slate-400 text-xs mt-0.5">Admin Panel</p>
        </div>
      </div>

      {/* Nav label */}
      <p className="px-6 pt-6 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Menu</p>

      {/* Nav items */}
      <nav className="px-3 space-y-1">
        {NAV.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => { setTab(key); setSidebarOpen(false); }}
            className={cn(
              "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
              tab === key
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-900/30"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <span className="flex items-center gap-3">
              <Icon size={17} />
              {label}
            </span>
            <ChevronRight size={14} className={cn("transition-transform", tab === key ? "opacity-100" : "opacity-0")} />
          </button>
        ))}
      </nav>

      {/* Snapshot card */}
      <div className="mx-3 mt-6 rounded-2xl bg-white/5 border border-white/5 p-4">
        <p className="text-xs font-bold text-slate-300 mb-3 flex items-center gap-2">
          <Bell size={13} className="text-blue-400" /> Quick Snapshot
        </p>
        <div className="space-y-2">
          {[
            { label: "Total",  val: stats.totalQueries },
            { label: "New",    val: stats.newQueries },
            { label: "Today",  val: stats.todayQueries },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between text-xs">
              <span className="text-slate-400">{s.label}</span>
              <span className="font-bold text-white">{s.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Admin info + logout */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {admin.name.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate">{admin.name}</p>
            <p className="text-slate-400 text-xs truncate">{admin.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-300 transition-all text-sm font-semibold"
        >
          <LogOut size={15} />
          {loggingOut ? "Signing out…" : "Logout"}
        </button>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-[#070b1a] flex">
      {/* Desktop sidebar */}
      <div className="hidden lg:block flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="w-64 flex-shrink-0">
            <Sidebar mobile />
          </div>
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="sticky top-0 z-40 flex items-center gap-4 px-4 sm:px-6 py-4 bg-[#070b1a]/90 backdrop-blur border-b border-white/5">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-colors"
          >
            <Menu size={18} />
          </button>

          {/* Search */}
          <div className="flex items-center gap-2.5 flex-1 max-w-sm bg-white/5 border border-white/8 rounded-xl px-4 py-2.5">
            <Search size={15} className="text-slate-400 flex-shrink-0" />
            <input
              value={tab === "queries" ? search : ""}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search queries…"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              disabled={tab !== "queries"}
            />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Notification bell */}
            <div className="relative w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-slate-300 hover:bg-white/10 transition-colors cursor-pointer">
              <Bell size={16} />
              {stats.newQueries > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {stats.newQueries > 9 ? "9+" : stats.newQueries}
                </span>
              )}
            </div>
            {/* Avatar */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-blue-900/30">
              {admin.name.slice(0, 2).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 space-y-6">

          {/* Page title */}
          <div>
            <h1 className="text-xl font-bold text-white">
              {tab === "dashboard" ? "Business Overview" : "Contact Queries"}
            </h1>
            <p className="text-slate-400 text-sm mt-0.5">
              {tab === "dashboard"
                ? "Track leads and review summary metrics."
                : `${filtered.length} records found`}
            </p>
          </div>

          {/* ── DASHBOARD TAB ── */}
          {tab === "dashboard" && (
            <>
              {/* Stat cards */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {statCards.map((card, i) => (
                  <div
                    key={i}
                    className="relative bg-[#0f1535] border border-white/5 rounded-2xl p-5 overflow-hidden hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", card.iconBg)}>
                        <card.icon size={20} />
                      </div>
                      <span className="text-xs text-slate-500 font-medium">All time</span>
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">{card.value}</p>
                    <p className="text-sm text-slate-400">{card.label}</p>
                    {/* Bottom gradient line */}
                    <div className={cn("absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r", card.color)} />
                  </div>
                ))}
              </div>

              {/* Latest query + recent list */}
              <div className="grid lg:grid-cols-5 gap-4">
                {/* Latest query highlight */}
                <div className="lg:col-span-2 bg-[#0f1535] border border-white/5 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Latest Query</p>
                  {latestQuery ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {latestQuery.name.slice(0, 1).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white font-bold">{latestQuery.name}</p>
                          <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/20">
                            {latestQuery.service}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock size={12} />
                        {new Date(latestQuery.created_at).toLocaleString("en-IN")}
                      </div>
                      <div className="h-px bg-white/5" />
                      <button
                        onClick={() => setTab("queries")}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-300 text-sm font-semibold hover:bg-blue-600/20 transition-colors"
                      >
                        View All Queries <ChevronRight size={14} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <MessageSquare size={32} className="text-slate-600 mb-3" />
                      <p className="text-slate-400 text-sm">No queries yet</p>
                    </div>
                  )}
                </div>

                {/* Recent queries mini-list */}
                <div className="lg:col-span-3 bg-[#0f1535] border border-white/5 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Recent Queries</p>
                  {queries.length === 0 ? (
                    <p className="text-slate-400 text-sm py-6 text-center">No queries received yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {queries.slice(0, 5).map((q) => (
                        <div key={q.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 hover:bg-white/5 transition-colors border border-white/5">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {q.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-semibold truncate">{q.name}</p>
                            <p className="text-slate-400 text-xs truncate">{q.service}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className={cn("inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border", STATUS_STYLES[q.status] ?? STATUS_STYLES.new)}>
                              {q.status ?? "new"}
                            </span>
                            <p className="text-slate-500 text-[10px] mt-1">
                              {new Date(q.created_at).toLocaleDateString("en-IN")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* ── QUERIES TAB ── */}
          {tab === "queries" && (
            <div className="bg-[#0f1535] border border-white/5 rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-white font-bold">{filtered.length} Queries</p>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-xl px-4 py-2 sm:w-72">
                  <Search size={14} className="text-slate-400 flex-shrink-0" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search name, service, phone…"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="text-slate-400 hover:text-white">
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-white/5">
                      {["Customer", "Service", "Location", "Message", "Status", "Received"].map((h) => (
                        <th key={h} className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-widest text-slate-500">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filtered.map((q) => (
                      <tr key={q.id} className="hover:bg-white/3 transition-colors group">
                        <td className="px-5 py-4 align-top">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              {q.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold whitespace-nowrap">{q.name}</p>
                              <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                                <Phone size={10} /> {q.phone}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 align-top">
                          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/20 whitespace-nowrap">
                            {q.service}
                          </span>
                        </td>
                        <td className="px-5 py-4 align-top">
                          <p className="text-slate-300 text-sm flex items-center gap-1.5 whitespace-nowrap">
                            <MapPin size={11} className="text-slate-500 flex-shrink-0" /> {q.location}
                          </p>
                        </td>
                        <td className="px-5 py-4 align-top max-w-xs">
                          <p className="text-slate-400 text-sm line-clamp-2">{q.message}</p>
                        </td>
                        <td className="px-5 py-4 align-top">
                          <span className={cn("inline-block px-2.5 py-1 rounded-full text-xs font-bold border capitalize", STATUS_STYLES[q.status] ?? STATUS_STYLES.new)}>
                            {q.status ?? "new"}
                          </span>
                        </td>
                        <td className="px-5 py-4 align-top">
                          <p className="text-slate-400 text-xs whitespace-nowrap flex items-center gap-1">
                            <Clock size={10} className="flex-shrink-0" />
                            {new Date(q.created_at).toLocaleString("en-IN")}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filtered.length === 0 && (
                <div className="py-16 text-center">
                  <Search size={32} className="text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm">No queries matched your search.</p>
                  <button onClick={() => setSearch("")} className="mt-3 text-blue-400 text-sm hover:underline">
                    Clear search
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
