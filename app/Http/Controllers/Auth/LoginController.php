<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class LoginController extends Controller
{
   public function login(Request $request)
{
    $data = $request->validate([
        'login'    => ['required', 'string'],
        'password' => ['required', 'string', 'min:6'],
    ]);

    // 1. Cek apakah email atau username ada di database
    $user = User::where('email', $data['login'])
        ->orWhere('username', $data['login'])
        ->first();

    if (! $user) {
        return response()->json([
            'message' => 'Email atau Username tidak terdaftar.'
        ], 401); // 401 Unauthorized
    }

    // 2. Cek apakah password cocok
    if (! Hash::check($data['password'], $user->password)) {
        return response()->json([
            'message' => 'Password yang Anda masukkan salah.'
        ], 401); // 401 Unauthorized
    }

    // 3. Cek status verifikasi
    if ($user->status_verifikasi !== 'approved') {
        return response()->json([
            'message'            => 'Akun Anda belum diverifikasi oleh admin puskesmas.',
            'status_verifikasi'  => $user->status_verifikasi,
            'catatan_verifikasi' => $user->catatan_verifikasi,
        ], 403); // 403 Forbidden
    }

    // 4. Cek apakah akun aktif
    if (! $user->is_active) {
        return response()->json([
            'message' => 'Akun Anda dinonaktifkan. Hubungi admin.',
        ], 403); // 403 Forbidden
    }

    // 5. Login sukses
    Auth::login($user, $request->boolean('remember'));
    $request->session()->regenerate();

    return response()->json([
        'message' => 'Login berhasil!',
        'user' => [
            'id'                => $user->id,
            'name'              => $user->name,
            'username'          => $user->username,
            'email'             => $user->email,
            'role'              => $user->role,
            'puskesmas_id'      => $user->puskesmas_id,
            'status_verifikasi' => $user->status_verifikasi,
        ],
    ]);
}

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logout berhasil.']);
    }

    public function me(Request $request): JsonResponse
    {
        $user = $request->user();

        return response()->json([
            'user' => [
                'id'                => $user->id,
                'name'              => $user->name,
                'username'          => $user->username,
                'email'             => $user->email,
                'role'              => $user->role,
                'puskesmas_id'      => $user->puskesmas_id,
                'status_verifikasi' => $user->status_verifikasi,
            ],
        ]);
    }
}