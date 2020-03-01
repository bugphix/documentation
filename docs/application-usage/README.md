# Application usage

## Edit exception handler

- File: `/app/Exceptions/Handler.php`

```php{4,5,6}
public function report(Exception $exception)
{
    // add this code block before parent::report($exception);
    if (app()->bound('bugphix') && $this->shouldReport($exception)) {
        app('bugphix')->catchError($exception);
    }

    parent::report($exception);
}
```

## Capture user details

- `->configUser()`
- First param: any - unqiue identifier
- Second param: array - additional custom parameters

```php{6,7,8,9,10,11,12,13,14,15,16}
public function report(Exception $exception)
{
    // add this code block before parent::report($exception);
    if (app()->bound('bugphix') && $this->shouldReport($exception)) {

        if(Auth::check()){
            $userUnique = Auth::user()->id;
            $userMeta = array(
                'name' => Auth::user()->name,
                'email' => Auth::user()->email,
            );
        }

        app('bugphix')
            ->configUser($userUnique ?? '', $userMeta ?? [])
            ->catchError($exception);
    }

    parent::report($exception);
}
```


## Updating config file

- File: `/config/bugphix.php`

```php
<?php
    /*
    |--------------------------------------------------------------------------
    | DSN - Update this link to pass the errors into another host
    | and by updating this link, admin dashboard inside this app
    | will automatically disabled.
    |
    | dsn will look like: https://bugphix.com/bphix-dsn/WIUF8/P5TK8NKEMO
    |--------------------------------------------------------------------------
    */
    'dsn' => env('BUGPHIX_DSN', ''),

    /*
    |--------------------------------------------------------------------------
    | Dashboard settings
    |--------------------------------------------------------------------------
    */
    'dashboard' => [
        'url' => env('BUGPHIX_DASHBOARD_URL', 'bugphix'), // Update this if you need to change the bugphix prefix
        'enable' => env('BUGPHIX_DASHBOARD_ENABLE', true), // If you need to hide the dashboard functions.
        // 'middleware' => ['auth'], // add middleware on your admin dashboard
        // 'logout_url' => env('APP_URL') . '/logout', // add logout link on your admin dashboard
    ],

    /*
    |--------------------------------------------------------------------------
    | Assets settings
    |--------------------------------------------------------------------------
    */
    'assets' => [
        'url' => 'bugphix-assets' // modify this if you need to update the assets file path of bugphix, it will also accept full url
    ],

    /*
    |--------------------------------------------------------------------------
    | Project settings
    |--------------------------------------------------------------------------
    */
    'project' => [
        'length' => 5, // Min:5|Max:80, modify to change the length of unique id for each group
        'prefix' => '', // add custom prefix in generating group id
    ],

    /*
    |--------------------------------------------------------------------------
    | Miscellaneous
    |--------------------------------------------------------------------------
    */
    'option' => [
        'date_format' => 'D, M d,y H:i:s A e', // You can change the date format in api return response
        'dsn_slug' => '/bphix-dsn', // this will be slug url to get the requests coming from outside sources.
    ],

```