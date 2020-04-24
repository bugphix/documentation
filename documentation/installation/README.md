# Installation 

## Server requirements

- [Check Laravel 6 requirements](https://laravel.com/docs/6.x#server-requirements)
- [Check Laravel 7 requirements](https://laravel.com/docs/7.x#server-requirements)

## Download package

```sh
composer require bugphix/bugphix-laravel
```

## Publish config files

```sh
php artisan vendor:publish --tag=bugphix-config
```

## Run bugphix installer
```sh
php artisan bugphix:install
```

### Optional

### Create symlink to dashboard files manually

```sh
php artisan bugphix:assets-symlink
```

### Test command

```sh
php artisan bugphix:test
```