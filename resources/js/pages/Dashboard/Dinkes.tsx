import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dinkes() {
    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto space-y-6">
                
                {/* WELCOME BANNER */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            Dashboard Admin Dinkes 🏢
                        </h2>
                        <p className="text-blue-100 max-w-xl">
                            Selamat datang kembali! Berikut adalah ringkasan data monitoring penyakit tingkat Kabupaten/Kota hari ini.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                        <p className="text-sm text-blue-100">Tanggal Hari Ini</p>
                        <p className="text-xl font-semibold">
                            {new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                </div>

                {/* STATS CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10"></div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Total Puskesmas</p>
                                <p className="text-3xl font-bold text-slate-800">24</p>
                            </div>
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10"></div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Total Pasien (Global)</p>
                                <p className="text-3xl font-bold text-slate-800">12,450</p>
                            </div>
                            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-orange-50 rounded-bl-full -z-10"></div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Laporan Masuk Bulan Ini</p>
                                <p className="text-3xl font-bold text-slate-800">18</p>
                            </div>
                            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TABLE SECTION */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-slate-800">Rekap Kunjungan per Puskesmas</h3>
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Lihat Semua</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-100">
                                    <th className="px-6 py-4 font-medium">Nama Puskesmas</th>
                                    <th className="px-6 py-4 font-medium">Total Kunjungan</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">PS</div>
                                            <span className="font-medium text-slate-800">Puskesmas Sukamaju</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">1,200</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Aktif</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Detail</button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">PS</div>
                                            <span className="font-medium text-slate-800">Puskesmas Sejahtera</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">980</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">Aktif</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Detail</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}