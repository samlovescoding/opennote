<?php

use App\Http\Controllers\CalendarController;
use App\Http\Controllers\EisenhowerMatrixController;
use App\Http\Controllers\HabitController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\StopwatchController;
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
    Route::get('/', [HomeController::class, 'index'])->name("home");
    Route::get('/calendar', [CalendarController::class, 'index'])->name("calendar");
    Route::get('/eisenhower-matrix', [EisenhowerMatrixController::class, 'index'])->name("eisenhower-matrix");
    Route::get('/projects', [ProjectController::class, 'index'])->name("projects");
    Route::get('/stopwatch', [StopwatchController::class, 'index'])->name("stopwatch");
    Route::get('/habits', [HabitController::class, 'index'])->name("habits");
    Route::get('/settings', [SettingsController::class, 'index'])->name("settings");
});
