<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FeriaController;
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
