<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Premio extends Model
{
    use HasFactory;

    protected $table = 'premios';
    public $timestamps = false;
    protected $fillable = [
        'id', // primary key, auto-increment, integer
        'feria_id', // string
        'numero_ganadores',
        'monto_total'
    ];
}
