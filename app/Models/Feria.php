<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feria extends Model
{
    use HasFactory;

    protected $table = 'ferias';
    public $timestamps = false;
    protected $fillable = [
        'id', // primary key, auto-increment, integer
        'nombre', // string
        'departamento',
        'fecha'
    ];
}

