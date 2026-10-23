<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController; 

Route::get('/', function () {
    return Inertia::render('Home');
});



Route::post('/login',  [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
Route::get('/me',      [LoginController::class, 'me']);


Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');

// Route::get('/kategori-penyakit', function () {
//     return Inertia::render('KategoriPenyakit/Index');
// });

// Route::get('/kunjungan', function () {
//     return Inertia::render('Kunjungan/Index');
// });

// Route::get('/pasien', function () {
//     return Inertia::render('Pasien/Index');
// });

// Route::get('/penyakit', function () {
//     return Inertia::render('Penyakit/Index');
// });

// Route::get('/puskesmas', function () {
//     return Inertia::render('Puskesmas/Index');
// });

// Route::get('/users', function () {
//     return Inertia::render('Users/Index');
// });