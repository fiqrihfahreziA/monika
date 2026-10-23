import { ReactNode, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const { auth } = usePage().props as any;
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-slate-100 flex">
            {/* SIDEBAR */}
            <aside
                className={`${
                    isSidebarOpen ? 'w-64' : 'w-20'
                } bg-slate-900 text-slate-300 transition-all duration-300 flex flex-col hidden md:flex`}
            >
                <div className="h-16 flex items-center justify-center border-b border-slate-800">
                    <span className={`text-xl font-bold text-white ${!isSidebarOpen && 'hidden'}`}>
                        MONIKA
                    </span>
                    {!isSidebarOpen && <span className="text-xl font-bold text-white">M</span>}
                </div>

                <nav className="flex-1 py-4 px-2 space-y-2">
                    <Link
                        href="/dinkes"
                        className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        {isSidebarOpen && <span>Dashboard</span>}
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        {isSidebarOpen && <span>Puskesmas</span>}
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        {isSidebarOpen && <span>Laporan</span>}
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex items-center gap-3 px-4 py-2 w-full text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        {isSidebarOpen && <span>Logout</span>}
                    </Link>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* HEADER */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 rounded-md hover:bg-slate-100 text-slate-500"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <h1 className="text-lg font-semibold text-slate-800">Sistem Monitoring Penyakit</h1>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium text-slate-800">{auth?.user?.name || 'Admin'}</p>
                            <p className="text-xs text-slate-500 capitalize">{auth?.user?.role?.replace('_', ' ') || 'Administrator'}</p>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                            {auth?.user?.name?.charAt(0) || 'A'}
                        </div>
                    </div>
                </header>

                {/* PAGE CONTENT */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}