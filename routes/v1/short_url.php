<?php

use App\Http\Controllers\ShortUrlController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'shorten',
    'controller' => ShortUrlController::class,
], function () {
    Route::post('/', 'store')
        ->name('shorten.store');
    Route::get('/{shortUrl}', 'show')
        ->name('shorten.show');
    Route::put('/{shortUrl}', 'update')
        ->name('shorten.update');
    Route::delete('/{shortUrl}', 'destroy')
        ->name('shorten.destroy');
    Route::get('/{shortUrl}/stats', 'stats')
        ->name('shorten.stats');
});
