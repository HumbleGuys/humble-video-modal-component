<?php

namespace HumbleVideoModalComponent;

use Illuminate\Support\ServiceProvider as SupportServiceProvider;

class ServiceProvider extends SupportServiceProvider
{
    public function register(): void
    {
        $this->loadViewsFrom(__DIR__.'/resources', 'videoModal');
    }

    public function boot(): void
    {
    }
}
