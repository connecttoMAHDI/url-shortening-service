<?php

namespace App\Http\Controllers;

use App\Models\ShortUrl;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ShortUrlController extends Controller
{
    public function index()
    {
        return Inertia::render('Index');
    }

    // Not needed now
    // public function create() {}

    public function store(Request $request)
    {
        $payload = $request->validate([
            'url' => 'required|string|url',
        ]);

        $shortUrl = ShortUrl::create([
            ...$payload,
            'short_code' => Str::random(10),
        ]);

        return to_route('index')
            ->with(
                'success',
                [
                    'shortified-url' => url($shortUrl->short_code),
                    'stats' => url($shortUrl->short_code . '/stats'),
                ]
            );
    }

    public function show(string $code)
    {
        $shortUrl = ShortUrl::firstWhere('short_code', $code);

        if (! $shortUrl) {
            return Inertia::render('NotFound');
        }

        $shortUrl->increment('access_count');

        return redirect($shortUrl->url);
    }

    // Not needed now
    // public function edit(string $id) {}

    // Not needed now
    // public function update(Request $request, string $id) {}

    // Not needed nowF
    // public function destroy(string $id) {}

    public function stats(string $code)
    {
        $shortUrl = ShortUrl::firstWhere('short_code', $code);

        if (! $shortUrl) {
            return Inertia::render('NotFound');
        }

        return Inertia::render('Stats', [
            'uniqueShortCode' => $shortUrl->short_code,
            'originalUrl' => $shortUrl->url,
            'timesAccessed' => $shortUrl->access_count
        ]);
    }
}
