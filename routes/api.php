<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalificacionController;
use App\Http\Controllers\ConcursoController;
use App\Http\Controllers\FeriaController;
use App\Http\Controllers\JuradoController;
use App\Http\Controllers\ParticipanteController;
use App\Http\Controllers\PremioController;
//use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => '/ferias', 'as' => 'ferias.'], function () {
    Route::get('/', [FeriaController::class, 'list']);
    Route::get('/{id}', [FeriaController::class, 'get'])
		->where('id', '[1-9][0-9]*');
    Route::post('/', [FeriaController::class, 'store']);
    Route::put('/{id}', [FeriaController::class, 'update'])
    	->where('id', '[1-9][0-9]*');
    Route::delete('/{id}', [FeriaController::class, 'delete'])
     	->where('id', '[1-9][0-9]*');
    Route::put('/', [FeriaController::class, 'reorder']);
});

Route::group(['prefix' => '/calificaciones', 'as' => 'calificaciones.'], function () {
  Route::get('/', [CalificacionController::class, 'list']);
  Route::get('/{id}', [CalificacionController::class, 'get'])
  ->where('id', '[1-9][0-9]*');
  Route::post('/', [CalificacionController::class, 'store']);
  Route::put('/{id}', [CalificacionController::class, 'update'])
    ->where('id', '[1-9][0-9]*');
  Route::delete('/{id}', [CalificacionController::class, 'delete'])
     ->where('id', '[1-9][0-9]*');
  Route::put('/', [CalificacionController::class, 'reorder']);
});

Route::group(['prefix' => '/concursos', 'as' => 'concursos.'], function () {
  Route::get('/', [ConcursoController::class, 'list']);
  Route::get('/{id}', [ConcursoController::class, 'get'])
  ->where('id', '[1-9][0-9]*');
  Route::post('/', [ConcursoController::class, 'store']);
  Route::put('/{id}', [ConcursoController::class, 'update'])
    ->where('id', '[1-9][0-9]*');
  Route::delete('/{id}', [ConcursoController::class, 'delete'])
     ->where('id', '[1-9][0-9]*');
  Route::put('/', [ConcursoController::class, 'reorder']);
});

Route::group(['prefix' => '/jurados', 'as' => 'jurados.'], function () {
  Route::get('/', [JuradoController::class, 'list']);
  Route::get('/{id}', [JuradoController::class, 'get'])
  ->where('id', '[1-9][0-9]*');
  Route::post('/', [JuradoController::class, 'store']);
  Route::put('/{id}', [JuradoController::class, 'update'])
    ->where('id', '[1-9][0-9]*');
  Route::delete('/{id}', [JuradoController::class, 'delete'])
     ->where('id', '[1-9][0-9]*');
  Route::put('/', [JuradoController::class, 'reorder']);
});

Route::group(['prefix' => '/participantes', 'as' => 'participantes.'], function () {
  Route::get('/', [ParticipanteController::class, 'list']);
  Route::get('/{id}', [ParticipanteController::class, 'get'])
  ->where('id', '[1-9][0-9]*');
  Route::post('/', [ParticipanteController::class, 'store']);
  Route::put('/{id}', [ParticipanteController::class, 'update'])
    ->where('id', '[1-9][0-9]*');
  Route::delete('/{id}', [ParticipanteController::class, 'delete'])
     ->where('id', '[1-9][0-9]*');
  Route::put('/', [ParticipanteController::class, 'reorder']);
});

Route::group(['prefix' => '/premios', 'as' => 'premios.'], function () {
  Route::get('/', [PremioController::class, 'list']);
  Route::get('/{id}', [PremioController::class, 'get'])
  ->where('id', '[1-9][0-9]*');
  Route::post('/', [PremioController::class, 'store']);
  Route::put('/{id}', [PremioController::class, 'update'])
    ->where('id', '[1-9][0-9]*');
  Route::delete('/{id}', [PremioController::class, 'delete'])
     ->where('id', '[1-9][0-9]*');
  Route::put('/', [PremioController::class, 'reorder']);
});

// Route::group(['prefix' => '/usuarios', 'as' => 'usuarios.'], function () {
//   Route::get('/', [UserController::class, 'list']);
//   Route::get('/{id}', [UserController::class, 'get'])
//   ->where('id', '[1-9][0-9]*');
//   Route::post('/', [UserController::class, 'store']);
//   Route::put('/{id}', [UserController::class, 'update'])
//     ->where('id', '[1-9][0-9]*');
//   Route::delete('/{id}', [UserController::class, 'delete'])
//      ->where('id', '[1-9][0-9]*');
//   Route::put('/', [UserController::class, 'reorder']);
// });

