# Dashboard

[[toc]]


## Enabling/Disabling dashboard

If you only need the extension and want to disable the dashboard functionality, `.env` file config is available. Just set the value to `true` or `false`

- Default value: `true`

```
BUGPHIX_DASHBOARD_ENABLE=
```

## Accessing dashboard

By default the dashboard url will be `http://localhost:8080/bugphix/issues` or equivalent. To change your dashboard link,
you can update the provided config file or simply add/update this in your `.env` file.

- Default value: `bugphix`

```
BUGPHIX_DASHBOARD_URL=
```

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
        'url' => env('BUGPHIX_DASHBOARD_URL', 'bugphix'), // Update this if you need to change the bugphix prefix
        'enable' => env('BUGPHIX_DASHBOARD_ENABLE', true), // If you need to hide the dashboard functions.
        'middleware' => ['auth'], // add middleware on your admin dashboard
        'logout_url' => env('APP_URL') . '/logout', // add logout link on your admin dashboard
    ],
```

::: tip
If you added a middleware with authentication, better to add a logout url so the dashboard will show the logout button.
:::