<x-layout>
    <x-videoModal::trigger
        video="https://www.youtube.com/watch?v=Mkx3e_HK7N4"
        class="myTriggerButton"
    >
        play video
    </x-videoModal::trigger>

    <x-videoModal::base class="myVideoModal">
        <x-videoModal::backdrop class="myVideoModal__backdrop" />

        <x-videoModal::closeButton class="myVideoModal__closeButton" />

        <x-videoModal::player class="myVideoModal__player" />
    </x-videoModal::base>
</x-layout>