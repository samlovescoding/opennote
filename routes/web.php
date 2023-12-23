<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

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

Route::get('/login', [LoginController::class, 'view'])->name("login");
Route::post('/login', [LoginController::class, 'store']);
Route::get('/register', [RegisterController::class, 'view'])->name("register");
Route::post('/register', [RegisterController::class, 'store']);
Route::get('/logout', [LogoutController::class, 'store']);

Route::middleware("auth")->group(function () {

    // Personal Space
    Route::get('/', fn () => inertia('index'))->name("home");
    // Route::get('/calendar', fn () => inertia('index'))->name("calendar");
    // Route::get('/eisenhower-matrix', fn () => inertia('eisenhower-matrix'))->name("eisenhower-matrix");
    Route::get('/projects', fn () => inertia('projects'))->name("projects");
    Route::get('/stopwatch', fn () => inertia('stopwatch'))->name("stopwatch");
    // Route::get('/habits', fn () => inertia('habits'))->name("habits");
    Route::get('/settings', fn () => inertia('settings'))->name("settings");
});
