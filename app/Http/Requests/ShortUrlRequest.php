<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShortUrlRequest extends FormRequest
{
    public function rules(): array
    {
        if ($this->method() === 'put') {
            return ['url' => 'sometimes|url'];
        }
        return ['url' => 'required|url'];
    }
}
