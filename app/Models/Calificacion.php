<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calificacion extends Model
{
    use HasFactory;

    protected $table = 'calificacions';
    public $timestamps = false;
    protected $fillable = [
        'id', // primary key, auto-increment, integer
        'participante_id', // string
        'jurado_id',
        'concurso_id',
        'fecha',
        'peso',
        'altura',
        'longitud',
        'anca',
        'grupa',
        'mecha',
        'puntaje', //sumatoria valor numerico
        'calificacion' //Color rojo, verde, amarillo, azul, ninguno -* valor categorico
    ];
}
