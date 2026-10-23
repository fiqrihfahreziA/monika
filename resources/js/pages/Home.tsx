import React, { useState } from 'react';
import Dinkes from './Dashboard/Dinkes';
import Puskesmas from './Dashboard/Puskesmas';

export default function Home() {
    // Gimmick Auth: State untuk menentukan role saat ini
    // Default-nya 'dinkes'
    const [role, setRole] = useState<'dinkes' | 'puskesmas'>('dinkes');

    return (
        <div className="min-h-screen bg-gray-100">
            
            {/* ========================================== */}
            {/* GIMMICK AUTH: Tombol Switch Role (Palsu)   */}
            {/* Hapus bagian ini kalau sudah pakai Auth asli */}
            {/* ========================================== */}
            <div className="bg-slate-900 text-white p-4 flex justify-center items-center gap-4 text-sm">
                <span className="font-bold text-gray-400">[GIMMICK AUTH]:</span>
                <span>Pilih Role:</span>
                
                <button 
                    onClick={() => setRole('dinkes')}
                    className={`px-4 py-1 rounded ${role === 'dinkes' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                    Admin Dinkes
                </button>
                
                <button 
                    onClick={() => setRole('puskesmas')}
                    className={`px-4 py-1 rounded ${role === 'puskesmas' ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                    Admin Puskesmas
                </button>
            </div>

            {/* ========================================== */}
            {/* LOGIKA RENDER HALAMAN BERDASARKAN ROLE     */}
            {/* ========================================== */}
            <div>
                {role === 'dinkes' ? (
                    <Dinkes />
                ) : (
                    <Puskesmas />
                )}
            </div>

        </div>
    );
}