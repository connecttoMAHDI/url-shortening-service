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
            $code = Str::random(env('CODE_LENGTH', 6));
            $model->code ??= $code;
        });
    }

    public function getRouteKeyName()
    {
        return 'code';
    }

    protected $fillable = [
        'url',
        'code',
        'access_count',
    ];

    protected $casts = [
        'last_accessed_at' => 'datetime:Y-m-d\TH:i:s\Z',
    ];
}
