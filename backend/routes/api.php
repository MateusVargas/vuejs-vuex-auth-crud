<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login',[UserController::class,'login']);
Route::post('register',[UserController::class,'register']);
Route::post('logout',[UserController::class,'logout'])->middleware('auth:sanctum');

Route::group(['prefix'=>'books','middleware'=>'auth:sanctum'],function(){
	Route::get('/',[BookController::class,'index']);
	Route::post('add',[BookController::class,'store']);
	Route::get('edit/{id}',[BookController::class,'edit']);
	Route::put('update/{id}',[BookController::class,'update']);
	Route::delete('delete/{id}',[BookController::class,'delete']);
});
