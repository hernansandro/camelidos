<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Concurso extends Model
{
    use HasFactory;
    protected $table = 'concursos';
    public $timestamps = false;
    protected $fillable = [
        'id', // primary key, auto-increment, integer
        'feria_id', // string
        'nombre',
        'categoria',
        'especie'
    ];
}
