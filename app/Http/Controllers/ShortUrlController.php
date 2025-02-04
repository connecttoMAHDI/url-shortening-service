<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShortUrlRequest;
use App\Http\Resources\ShortUrlResource;
use App\Models\ShortUrl;
use Symfony\Component\HttpFoundation\Response;

class ShortUrlController extends Controller
{
    /**
     * Create a new ShortUrl
     *
     * POST /api/v1/shorten
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(ShortUrlRequest $request)
    {
        $shortUrl = ShortUrl::create(['url' => $request->url]);

        return $this->successResponse(
            'ShortUrl created successfully.',
            new ShortUrlResource($shortUrl),
            Response::HTTP_CREATED
        );
    }

    /**
     * Retrieve a ShortUrl and increment access count
     *
     * GET /api/v1/shorten/{shortUrl}
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(ShortUrl $shortUrl)
    {
        $shortUrl->increment('access_count');

        return $this->successResponse(
            'ShortUrl retrieved successfully.',
            new ShortUrlResource($shortUrl)
        );
    }

    /**
     * Update an existing ShortUrl's original url
     *
     * PUT /api/v1/shorten/{shortUrl}
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(ShortUrlRequest $request, ShortUrl $shortUrl)
    {
        $shortUrl->update(['url' => $request->url]);
        // ? should I reset the access_count back to 0 when the url change?

        return $this->successResponse(
            'ShortUrl updated successfully.',
            new ShortUrlResource($shortUrl)
        );
    }

    /**
     * Delete a ShortUrl
     *
     * DELETE /api/v1/shorten/{shortUrl}
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(ShortUrl $shortUrl)
    {
        $shortUrl->delete();

        return $this->successResponse(
            statusCode: Response::HTTP_NO_CONTENT
        );
    }

    /**
     * Retrieve statistics for a ShortUrl
     *
     * GET /api/v1/shorten/{shortUrl}/stats
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function stats(ShortUrl $shortUrl)
    {
        $shortUrl->showStats = true;

        return $this->successResponse(
            'ShortUrl stats retrieved successfully.',
            new ShortUrlResource($shortUrl)
        );
    }
}
