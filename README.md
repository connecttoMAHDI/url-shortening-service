# URL Shortening Service API

## Overview

This is a sample solution for [URL Shortening Service](https://roadmap.sh/projects/url-shortening-service) challenge from [roadmap.sh](roadmap.sh). This API provides functionality to shorten long URLs, retrieve them, update, delete, and track access statistics.

## Features

- Shorten long URLs
- Retrieve the original URL from a short URL
- Update an existing short URL
- Delete a short URL
- Retrieve statistics on how many times a short URL has been accessed
- **Redirecting feature: In Progress**

## API Routes (Prefixed with `/api/v1`)

### Create a new Short URL

**POST** `/shorten`

```json
{
  "url": "https://www.example.com/some/long/url"
}
```

### Retrieve an Original URL

**GET** `/shorten/{shortUrl}`

### Update an Existing Short URL

**PUT** `/shorten/{shortUrl}`

```json
{
  "url": "https://www.example.com/some/updated/url"
}
```

### Delete a Short URL

**DELETE** `/shorten/{shortUrl}`

### Get URL Statistics

**GET** `/shorten/{shortUrl}/stats`

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/connecttoMAHDI/url-shortening-service.git
   cd url-shortening-service
   ```
2. Install dependencies:
   ```sh
   composer install
   ```
3. Configure the environment:
   ```sh
   cp .env.example .env
   php artisan key:generate
   ```
4. Run database migrations:
   ```sh
   php artisan migrate
   ```
5. Seed database (optional):
   ```sh
   php artisan db:seed
   ```
6. Start the development server:
   ```sh
   php artisan serve
   ```

## Testing

A `url-shortening-service-api.json` file is included in the root of the project. This file can be imported into the **Talend API Tester** Chrome extension to test the API easily.

