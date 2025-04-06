<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ShortUrl extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $shortCode = Str::random(env('SHORTCODE_LENGTH', 12));
            $model->short_code = $shortCode;
        });
    }

    public function getRouteKeyName()
    {
        return 'short_code';
    }

    protected $fillable = [
        'short_code',
        'url',
        'access_count',
    ];
}
