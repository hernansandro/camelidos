<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\CalificacionController;
use App\Http\Controllers\ConcursoController;
use App\Http\Controllers\FeriaController;
use App\Http\Controllers\JuradoController;
use App\Http\Controllers\ParticipanteController;
use App\Http\Controllers\PremioController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/mensaje', function (Request $request) {
    $nombre = $request->query('nombre');
    $apellido = $request->query('apellido');
    $estado = $request->query('estado');

    return "Hello: $nombre $apellido usted es $estado";
});

Route::get('/latino', function (Request $request) {
    $numero = $request->query('numero');
    //$numero = 5;
    //return view('welcome');

    // Generamos el cuadro latino
    $n = $numero;

    $cuadro = array_fill(0, $n, array_fill(0, $n, 0));

    // Llenamos la primera fila con números secuenciales del 1 al n
    for ($i = 0; $i < $n; $i++) {
        $cuadro[0][$i] = $i + 1;
    }

    // Llenamos el resto de la matriz
    for ($i = 1; $i < $n; $i++) {
        // Desplazamos cada fila una posición hacia abajo
        for ($j = 0; $j < $n; $j++) {
            $cuadro[$i][$j] = $cuadro[$i - 1][($j + 1) % $n];
        }
    }

    // Mostramos el cuadro latino
    echo "Cuadro Latino de tamaño $numero x $numero:<br>";
    echo "<table border='1'>";
    for ($i = 0; $i < $numero; $i++) {
        echo "<tr>";
        for ($j = 0; $j < $numero; $j++) {
            echo "<td>{$cuadro[$i][$j]}</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
});




Route::group(['prefix' => '/', 'as' => 'ferias.'], function () {
    Route::get('/', [FeriaController::class, 'index'])->name('index');
});

Route::group(['prefix' => '/', 'as' => 'calificaciones.'], function () {
    Route::get('/', [CalificacionController::class, 'index'])->name('index');
});

Route::group(['prefix' => '/', 'as' => 'concursos.'], function () {
    Route::get('/', [ConcursoController::class, 'index'])->name('index');
});

Route::group(['prefix' => '/', 'as' => 'participantes.'], function () {
    Route::get('/', [ParticipanteController::class, 'index'])->name('index');
});

Route::group(['prefix' => '/', 'as' => 'jurados.'], function () {
    Route::get('/', [JuradoController::class, 'index'])->name('index');
});

Route::group(['prefix' => '/', 'as' => 'premios.'], function () {
    Route::get('/', [PremioController::class, 'index'])->name('index');
});

Route::group(['prefix' => '/', 'as' => 'usuarios.'], function () {
    Route::get('/', [UserController::class, 'index'])->name('index');
});

