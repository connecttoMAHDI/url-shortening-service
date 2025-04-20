<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShortUrlRequest extends FormRequest
{
    public function rules(): array
    {
        return ['url' => 'required|string|url'];
    }
}
