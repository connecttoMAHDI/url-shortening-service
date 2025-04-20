
# URL Shortening Service - Web App

## Overview

This is a web application for the [URL Shortening Service](https://roadmap.sh/projects/url-shortening-service) challenge from [roadmap.sh](https://roadmap.sh). The app is built using Laravel for the backend and React with Inertia.js for the frontend, making it a seamless Single Page Application (SPA). The app allows users to shorten long URLs, retrieve original URLs, track access statistics, and manage their short URLs.

## Features

- Shorten long URLs
- Retrieve the original URL from a short URL
- View statistics on how many times a short URL has been accessed
- Clean and modern user interface built with React and styled with ShadCN
- **Real-time** updates using Inertia.js without full page reloads

## Technologies Used

- **Frontend**: React, Inertia.js, ShadCN
- **Backend**: Laravel
- **Database**: MySQL
- **Routing**: Inertia.js (backend and frontend integration)

## API Routes

The following routes are used in the application. They are handled by the `ShortUrlController` in Laravel.

### Home Page

**GET** `/`

Renders the main page where users can shorten URLs.

### Create a New Short URL

**POST** `/`

This endpoint allows you to submit a long URL to shorten.

```json
{
  "url": "https://www.example.com/some/long/url"
}
```

### Retrieve the Original URL

**GET** `/{shortUrl}`

Redirects to the original long URL for the given short URL code.

### Retrieve Stats for a Short URL

**GET** `/{shortUrl}/stats`

Displays the statistics for the given short URL, including the number of times it has been accessed.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/connecttoMAHDI/url-shortening-service.git
   cd url-shortening-service
   ```

2. Install dependencies for Laravel:
   ```sh
   composer install
   ```

3. Install dependencies for React:
   ```sh
   npm install
   ```

4. Configure the environment:
   ```sh
   cp .env.example .env
   php artisan key:generate
   ```
   - Optionally, you can set the `CODE_LENGTH` value in your `.env` file to adjust the length of the generated short codes. If not provided, the default value is 12.
   ```env
   CODE_LENGTH=12
   ```

5. Run database migrations:
   ```sh
   php artisan migrate
   ```

6. Seed the database (optional):
   ```sh
   php artisan db:seed
   ```

7. Start the development server for Laravel:
   ```sh
   php artisan serve
   ```

8. In a separate terminal, run the React development server:
   ```sh
   npm run dev
   ```

## Testing

The web app is designed to be easy to test via the user interface.

## Deployment

To deploy this app to production, you'll need to build the React frontend using:

```sh
npm run build
```

Then, deploy the Laravel backend as usual, ensuring your frontend is served from the appropriate public directory.
