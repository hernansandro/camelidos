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
        Schema::create('calificacions', function (Blueprint $table) {
            $table->id();
            $table->string('participante_id');
            $table->string('jurado_id');
            $table->string('concurso_id');
            $table->string('fecha');
            $table->string('peso');
            $table->string('altura');
            $table->string('longitud');
            $table->string('anca');
            $table->string('grupa');
            $table->string('mecha');
            $table->string('puntaje');
            $table->string('calificacion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calificacions');
    }
};
