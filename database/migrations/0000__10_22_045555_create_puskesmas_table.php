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
        Schema::create('puskesmas', function (Blueprint $table) {
                $table->string('role', 30)
                ->default('petugas_puskesmas');

            $table->foreignId('puskesmas_id')
                ->nullable()
                ->constrained('puskesmas')
                ->nullOnDelete();

                $table->boolean('is_active')->default(true);

                $table->index(
                    ['role', 'puskesmas_id'],
                    'users_role_puskesmas_idx'
                );
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('puskesmas');
    }
};
