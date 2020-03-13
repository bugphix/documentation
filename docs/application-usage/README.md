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

### First parameter ($userUnique)

- Type: `String`
- Default: `null`

Enter unique identifier for your user in able to search the data easily.

### Second parameter ($userMeta)

- Type: `Array`
- Default: `[]`

If you need to store more information about the user, include it in second parameter in array format.


## Updating config file

```php
<?php

return [
    /*
    |--------------------------------------------------------------------------
    | DSN 
    |--------------------------------------------------------------------------
    */
    'dsn' => env('BUGPHIX_DSN', ''),

    /*
    |--------------------------------------------------------------------------
    | Dashboard settings
    |--------------------------------------------------------------------------
    */
    'dashboard' => [
        'url' => env('BUGPHIX_DASHBOARD_URL', 'bugphix'),
        'enable' => env('BUGPHIX_DASHBOARD_ENABLE', true),
        // 'middleware' => ['auth'],
        // 'logout_url' => env('APP_URL') . '/logout',
    ],

    /*
    |--------------------------------------------------------------------------
    | Assets settings
    |--------------------------------------------------------------------------
    */
    'assets' => [
        'url' => env('APP_URL') . '/bugphix-assets'
    ],

    /*
    |--------------------------------------------------------------------------
    | Project settings
    |--------------------------------------------------------------------------
    */
    'project' => [
        'length' => 5,
        'prefix' => '',
    ],

    /*
    |--------------------------------------------------------------------------
    | Miscellaneous
    |--------------------------------------------------------------------------
    */
    'option' => [
        'date_format' => 'D, M d,y H:i:s A e',
        'dsn_slug' => '/bphix-dsn',
    ],
];
```

### dsn

- Type: `String`
- Default: `null`
- .env parameter: `BUGPHIX_DSN`
- Sample DSN: `https://bugphix.com/bphix-dsn/WIUF8/P5TK8NKEMO`

Update DSN parameter to pass the errors into another host and by updating this link, admin dashboard inside this app will automatically disabled. 
You will able to find your dsn inside the project details.

### dashboard.url

- Type: `String`
- Default: `bugphix`
- .env parameter: `BUGPHIX_DASHBOARD_URL`

It is recommended that you change your dashboard url. 

### dashboard.enable

- Type: `Boolean`
- Default: `true`
- .env parameter: `BUGPHIX_DASHBOARD_ENABLE`

If you wish to hide only the dashboard functionality set this to `false`, and bugphix will still continue to capture the errors.

### dashboard.middleware

- Type: `Array`
- Default: `null`

By default middleware is disabled, uncomment this section and add your middlewares in array format.

### dashboard.logout_url

- Type: `String`
- Default: `null`

Add the full logout url in able to show the logout button inside the dashboard.


### assets.url

- Type: `String`
- Default: `env('APP_URL') . '/bugphix-assets'`

In able to run bugphix dashboard, it requires the script and files to be hosted.
<br> 
Upon [installation](/installation/#run-bugphix-installer), bugphix should be able to create a symlink to your server, but if it happen that bugphix was unable to create symlink to the files, you can run artisan [command](/installation/#create-symlink) manually and it will create the assets link to your public folder.

### project.length

- Type: `Integer`
- Default: `5`
- Min: `5`
- Max: `80`

Modify the length of unique id for each group.

### project.prefix

- Type: `String`
- Default: `null`

Add custom prefix in generating group id

### option.date_format

- Type: `String`
- Default: `D, M d,y H:i:s A e`

You can change the date format in api return response

### option.dsn_slug

- Type: `String`
- Default: `/bphix-dsn`
- Sample: `https://bugphix.com/bphix-dsn`

If you have another bugphix installation into another hosting this will be the bugphix endpoint to submit errors. You can modify this but to make sure that the slug is available.