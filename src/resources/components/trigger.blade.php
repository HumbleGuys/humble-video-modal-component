@props([
    'video',
    'autoIncludeModal' => true
])

<button
    x-data
    type="button"
    {{ $attributes }}
    @click="$store.videoModal.play('{{ $video }}')"
>
    {!! $slot !!}
</button>

@if ($autoIncludeModal)
    @once
        @push('bottom')
            <x-videoModal::base>
                <x-videoModal::backdrop />
        
                <x-videoModal::closeButton />
        
                <x-videoModal::player />
            </x-videoModal::base>
        @endpush   
    @endonce 
@endif