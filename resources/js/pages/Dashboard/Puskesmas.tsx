import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Puskesmas() {
    return (
        <DashboardLayout>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Dashboard Admin Puskesmas 🏥
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Selamat datang, Admin Puskesmas. Ini adalah data operasional Puskesmas Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <p className="text-sm text-gray-500">Pasien Hari Ini</p>
                            <p className="text-3xl font-bold text-blue-600">45</p>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <p className="text-sm text-gray-500">Antrian Poli Umum</p>
                            <p className="text-3xl font-bold text-yellow-500">12</p>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <p className="text-sm text-gray-500">Stok Obat Menipis</p>
                            <p className="text-3xl font-bold text-red-500">3 Item</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Daftar Pasien Terbaru</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Pasien</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Keluhan</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">Budi Santoso</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Demam</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">Siti Aminah</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Batuk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}