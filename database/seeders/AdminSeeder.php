<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        // Admin utama
        User::updateOrCreate(
            ['username' => 'admin'],
            [
                'name'               => 'Administrator',
                'email'              => 'admin@monika.test',
                'password'           => Hash::make('password123'),
                'role'               => 'admin',
                'puskesmas_id'       => null,
                'status_verifikasi'  => 'approved',
                'verified_at'        => now(),
                'is_active'          => true,
                'email_verified_at'  => now(),
            ]
        );

        // Contoh petugas puskesmas (opsional, untuk tes login role lain)
        User::updateOrCreate(
            ['username' => 'petugas01'],
            [
                'name'               => 'Petugas Puskesmas Contoh',
                'email'              => 'petugas01@monika.test',
                'password'           => Hash::make('password123'),
                'role'               => 'petugas_puskesmas',
                'puskesmas_id'       => null, // isi kalau tabel puskesmas sudah ada datanya
                'status_verifikasi'  => 'approved',
                'verified_at'        => now(),
                'is_active'          => true,
                'email_verified_at'  => now(),
            ]
        );

        // Contoh akun pending (untuk tes tampilan "belum diverifikasi")
        User::updateOrCreate(
            ['username' => 'pending01'],
            [
                'name'               => 'Akun Pending',
                'email'              => 'pending01@monika.test',
                'password'           => Hash::make('password123'),
                'role'               => 'petugas_puskesmas',
                'puskesmas_id'       => null,
                'status_verifikasi'  => 'pending',
                'is_active'          => false,
            ]
        );

        $this->command->info('Admin seeder selesai: admin / password123');
    }
}