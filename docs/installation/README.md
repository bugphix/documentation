# Installation 

## Server requirements

- Laravel
- PHP >= 7.2.0
- BCMath PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

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