# Dashboard

## Enabling/Disabling dashboard

- Type: `Boolean`
- Default: `true`
- .env parameter: `BUGPHIX_DASHBOARD_ENABLE`

If you only need the extension and want to disable the dashboard functionality, `.env` file config is available. Just set the value to `true` or `false`

## Accessing dashboard

- Type: `String`
- Default: `bugphix`
- .env parameter: `BUGPHIX_DASHBOARD_URL`

By default the dashboard url will be `http://localhost:8080/bugphix/issues` or equivalent. To change your dashboard link,
you can update the provided config file or simply add/update this in your `.env` file.

::: warning
Default admin url will not show unless it is on local environment. You must either change the default value or put a middleware by updating the config file.
:::


## Adding middleware

Middleware is available in config file, this is to make your admin dashboard more secured.

```php{9,10}
    /*
    |--------------------------------------------------------------------------
    | Dashboard settings
    |--------------------------------------------------------------------------
    */
    'dashboard' => [
        'url' => env('BUGPHIX_DASHBOARD_URL', 'bugphix'), 
        'enable' => env('BUGPHIX_DASHBOARD_ENABLE', true),
        'middleware' => ['auth'],
        'logout_url' => env('APP_URL') . '/logout',
    ],
```

::: tip
If you added a middleware with authentication, better to add a logout url so the logout button will appear on dashboard.
:::