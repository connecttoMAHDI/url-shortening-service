<?php

use App\Http\Controllers\ShortUrlController;
use Illuminate\Support\Facades\Route;

Route::group(
    [
        'controller' => ShortUrlController::class,
    ],
    function () {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'store')->name('store');
        Route::get('/{code}', 'show')->name('show');
        Route::get('/{code}/stats', 'stats')->name('stats');
    }
);
