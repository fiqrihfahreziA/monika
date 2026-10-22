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
        Schema::create('kunjungans', function (Blueprint $table) {
             $table->id();

            $table->foreignId('puskesmas_id')
                ->constrained('puskesmas')
                ->restrictOnDelete();

            $table->foreignId('pasien_id')
                ->nullable()
                ->constrained('pasien')
                ->nullOnDelete();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->date('tanggal_kunjungan');

            $table->string('jenis_kunjungan', 50)->nullable();

            $table->enum('status', [
                'draft',
                'submitted',
                'validated',
                'rejected',
            ])->default('draft');

            $table->foreignId('validated_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamp('validated_at')->nullable();

            $table->timestamps();

            $table->index(
                ['puskesmas_id', 'tanggal_kunjungan', 'status'],
                'kunjungan_puskesmas_tanggal_status_idx'
            );

            $table->index(
                ['tanggal_kunjungan', 'status'],
                'kunjungan_tanggal_status_idx'
            );
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kunjungans');
    }
};
