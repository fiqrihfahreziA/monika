import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// ============================================
// Types & Interfaces
// ============================================

type ActivityType = "success" | "info" | "danger" | "warning";

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

interface Activity {
  id: number;
  title: string;
  time: string;
  type: ActivityType;
}

interface QuickAction {
  label: string;
  icon: string;
  color: string;
  onClick?: () => void;
}

// ============================================
// Component
// ============================================

export default function Dashboard(): JSX.Element {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    await logout();
    navigate("/login");
  };

  // Contoh data statis — ganti dengan data dari API
  const stats: Stat[] = [
    { label: "Total Users", value: "1,234", icon: "👥", color: "bg-blue-500" },
    { label: "Orders", value: "56", icon: "🛒", color: "bg-green-500" },
    { label: "Revenue", value: "Rp 12.5M", icon: "💰", color: "bg-purple-500" },
    { label: "Pending", value: "8", icon: "⏳", color: "bg-yellow-500" },
  ];

  const recentActivities: Activity[] = [
    { id: 1, title: "Order baru #1234", time: "5 menit lalu", type: "success" },
    { id: 2, title: "User baru terdaftar", time: "1 jam lalu", type: "info" },
    { id: 3, title: "Pembayaran diterima", time: "2 jam lalu", type: "success" },
    { id: 4, title: "Order dibatalkan #1230", time: "3 jam lalu", type: "danger" },
  ];

  const quickActions: QuickAction[] = [
    { label: "Tambah Data", icon: "➕", color: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700" },
    { label: "Lihat Laporan", icon: "📊", color: "bg-green-50 hover:bg-green-100 text-green-700" },
    { label: "Pengaturan", icon: "⚙️", color: "bg-purple-50 hover:bg-purple-100 text-purple-700" },
    { label: "Profil Saya", icon: "👤", color: "bg-yellow-50 hover:bg-yellow-100 text-yellow-700" },
  ];

  // Type-safe style mapping
  const typeStyles: Record<ActivityType, string> = {
    success: "bg-green-100 text-green-700",
    info: "bg-blue-100 text-blue-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 capitalize">
                {user?.role}
              </p>
            </div>
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
              {user?.name?.charAt(0)?.toUpperCase() ?? "U"}
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">
            Halo, {user?.name} 👋
          </h2>
          <p className="text-indigo-100">
            Selamat datang kembali! Berikut ringkasan aktivitas kamu hari ini.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg`}
                >
                  {stat.icon}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                Aktivitas Terbaru
              </h3>
              <button className="text-sm text-indigo-600 hover:underline">
                Lihat semua
              </button>
            </div>
            <ul className="divide-y divide-gray-100">
              {recentActivities.map((a) => (
                <li
                  key={a.id}
                  className="py-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${typeStyles[a.type]}`}
                    >
                      {a.type}
                    </span>
                    <span className="text-sm text-gray-700">{a.title}</span>
                  </div>
                  <span className="text-xs text-gray-400">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Aksi Cepat
            </h3>
            <div className="space-y-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={action.onClick}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-colors ${action.color}`}
                >
                  {action.icon} {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}