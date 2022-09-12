<x-layout>
    <x-videoModal::base>
        <x-videoModal::closeButton />

        hejhej
    </x-videoModal::base>

    <button
        type="button"
        @click="$store.videoModal.play('https://www.youtube.com/watch?v=Mkx3e_HK7N4')"
        x-data
    >
        play video
    </button>
</x-layout>