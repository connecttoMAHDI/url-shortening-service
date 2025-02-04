<?php

namespace Database\Seeders;

use App\Models\ShortUrl;
use Illuminate\Database\Seeder;

class ShortUrlSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ShortUrl::create([
            'url' => 'https://www.amazon.com/Samsung-Factory-Unlocked-Smartphone-Warranty/dp/B08N2MSSZY/ref=sr_1_1?crid=3RRL6HSD89GR8&keywords=samsung+galaxy+s21&qid=1707054321&sprefix=samsung+galaxy+s21%2Caps%2C212&sr=8-1',
        ]);
        ShortUrl::create([
            'url' => 'https://www.google.com/search?q=best+laptops+for+gaming+under+1000&oq=best+laptops+for+gaming+under+1000&aqs=chrome..69i57.3423j0j1&sourceid=chrome&ie=UTF-8',
        ]);
        ShortUrl::create([
            'url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s&ab_channel=RickAstley&autoplay=1&cc_load_policy=1&mute=1',
        ]);
        ShortUrl::create([
            'url' => 'https://www.google.com/maps/place/Eiffel+Tower/@48.8588443,2.2943506,17z/data=!3m1!4b1!4m9!3m8!1s0x47e66fddf9f6b2a9:0x529f57f46eb97c1!5m2!4m1!1i2!8m2!3d48.8588443!4d2.2943506!16zL20vMDZfNHI',
        ]);
        ShortUrl::create([
            'url' => 'https://twitter.com/TwitterDev/status/1451234567890123456?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1451234567890123456%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fexample.com',
        ]);
        ShortUrl::create([
            'url' => 'https://en.wikipedia.org/wiki/Artificial_intelligence#History?oldid=1023456789&useskin=vector',
        ]);
        ShortUrl::create([
            'url' => 'https://www.facebook.com/permalink.php?story_fbid=1234567890123456&id=987654321098765&substory_index=0&__cft__[0]=AZX0ExampleData&__tn__=%2CO%2CP-R',
        ]);
    }
}
