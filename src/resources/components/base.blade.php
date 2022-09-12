<div
    x-data="videoModal"
    x-transition:enter="videoModal-enter"
    x-transition:enter-start="videoModal-enter-start"
    x-transition:enter-end="videoModal-enter-end"
    x-transition:leave="videoModal-leave"
    x-transition:leave-start="videoModal-leave-start"
    x-transition:leave-end="videoModal-leave-end"
    x-show="isOpen"
    id="videoModal"
    {{ $attributes->merge(['class' => 'videoModal']) }}
    role="region"
    tabindex="-1"
    x-cloak
>
    {!! $slot !!}
</div>

@once
    @push('head')
        <link rel="stylesheet" href="{{ asset('../vendor/humble-guys/humble-video-modal-component/public/resources/dist/style.css?v=0.0.1') }}">
        <script module defer src="{{ asset('../vendor/humble-guys/humble-video-modal-component/public/resources/dist/humble-video-modal-component.umd.js?v=0.0.1') }}"></script>
    @endpush   
@endonce 