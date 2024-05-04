<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jurado extends Model
{
    use HasFactory;

    protected $table = 'jurados';
    public $timestamps = false;
    protected $fillable = [
        'id', // primary key, auto-increment, integer
        'nombre', // string
        'ci',
        'estado',
        'concursos'
    ];
}
