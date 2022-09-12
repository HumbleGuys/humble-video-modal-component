<button
    type="button"
    {{ $attributes->merge([
        'class' => 'videoModal__closeButton', 
        'title' => 'Stäng', 
        'aria-label' => 'Stäng'
    ]) }}
    @click="close"
>
    @if ($slot->isNotEmpty())
        {!! $slot !!}
    @else
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="videoModal__closeButtonIcon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    @endif
</button>