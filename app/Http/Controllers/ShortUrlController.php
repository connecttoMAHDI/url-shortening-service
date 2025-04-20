<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShortUrlRequest;
use App\Models\ShortUrl;
use Inertia\Inertia;

class ShortUrlController extends Controller
{
    public function index()
    {
        $count = ShortUrl::count();

        return Inertia::render('Index', [
            'shortenedUrlsCount' => $count,
        ]);
    }

    public function store(ShortUrlRequest $request)
    {
        $payload = $request->validated();
        $shortUrl = ShortUrl::create($payload);

        return back()
            ->with(
                'success',
                [
                    'shortifiedUrl' => url($shortUrl->code),
                    'statsUrl' => url($shortUrl->code . '/stats'),
                ]
            );
    }

    public function show(string $code)
    {
        $shortUrl = ShortUrl::firstWhere('code', $code);

        if (! $shortUrl) {
            return Inertia::render('NotFound');
        }

        $shortUrl->increment('access_count');
        $shortUrl->last_accessed_at = now();
        $shortUrl->save();

        return redirect($shortUrl->url);
    }

    public function stats(string $code)
    {
        $shortUrl = ShortUrl::firstWhere('code', $code);

        if (! $shortUrl) {
            return Inertia::render('NotFound');
        }

        return Inertia::render('Stats', [
            'uniqueCode' => $shortUrl->code,
            'originalUrl' => $shortUrl->url,
            'timesAccessed' => $shortUrl->access_count,
            'lastAccessedAt' => $shortUrl->last_accessed_at,
        ]);
    }
}
