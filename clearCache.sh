#!/bin/bash

echo "Clearing application cache..."
php artisan cache:clear

echo "Clearing route cache..."
php artisan route:clear

echo "Clearing view cache..."
php artisan view:clear

echo "Clearing config cache..."
php artisan config:clear

echo "Clearing compiled classes..."
php artisan clear-compiled

echo "Clearing compiled services..."
php artisan optimize:clear

echo "Restarting queue workers..."
php artisan queue:restart

echo "Clearing event cache..."
php artisan event:clear

composer dump-autoload

echo "All caches cleared successfully!"