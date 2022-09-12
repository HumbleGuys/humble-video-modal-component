@props([
    'video'
])

<button
    x-data
    type="button"
    {{ $attributes }}
    @click="$store.videoModal.play('{{ $video }}')"
>
    {!! $slot !!}
</button>