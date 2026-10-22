<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('diagnosis_kunjungans', function (Blueprint $table) {
            $table->id();

            $table->foreignId('kunjungan_id')
                ->constrained('kunjungan')
                ->cascadeOnDelete();

            $table->foreignId('penyakit_id')
                ->constrained('penyakit')
                ->restrictOnDelete();

            $table->enum('jenis_diagnosis', [
                'utama',
                'sekunder',
            ])->default('utama');

            $table->timestamps();

            $table->unique(
                ['kunjungan_id', 'penyakit_id'],
                'diagnosis_kunjungan_penyakit_unique'
            );

            $table->index(
                ['penyakit_id', 'kunjungan_id'],
                'diagnosis_penyakit_kunjungan_idx'
            );
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diagnosis_kunjungans');
    }
};
