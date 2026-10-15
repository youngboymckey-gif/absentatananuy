<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResortController;
use App\Models\Resort;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// --- PUBLIC PAGES ---
Route::get('/', function () {
    // Kukunin ang 3 pinakabag-o nga resorts para ipakita sa landing page
    $resorts = Resort::latest()->take(3)->get();
    
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'resorts' => $resorts,
    ]);
})->name('welcome');

Route::get('/about', function () { return Inertia::render('About'); })->name('about');
Route::get('/services', function () { return Inertia::render('Services'); })->name('services');
Route::get('/contact', function () { return Inertia::render('Contact'); })->name('contact');


// --- AUTHENTICATED PAGES (Kinahanglan naka-login) ---
Route::middleware(['auth', 'verified'])->group(function () {
    
    // Dashboard
    Route::get('/dashboard', function () {
        $resorts = Resort::latest()->get();
        return Inertia::render('Dashboard', ['resorts' => $resorts]);
    })->name('dashboard');

    // Profile Management (Default sa Breeze)
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // CRUD para sa Resorts
    Route::resource('resorts', ResortController::class);
});

require __DIR__.'/auth.php';