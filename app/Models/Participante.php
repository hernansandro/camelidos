<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participante extends Model
{
    use HasFactory;
    protected $table = 'participantes';
    public $timestamps = false;
    protected $fillable = [
        'id', // primary key, auto-increment, integer
        'nombre', // string
        'ci',
        'genero',
        'departamento',
        'arete',
        'tipo',
        'sexo',
        'color',
        'estado',
        'concurso_id'
    ];
}
