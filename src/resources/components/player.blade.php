<div {{ $attributes->merge(['class' => 'videoModal__player']) }}>
    <template x-if="currentVideo && videoType === 'youtube'">
        <div x-data="youtubePlayer(currentVideo)">
            <div class="videoModal__playerInner">
                <div id="videoModalYoutube"></div>
            </div>
        </div>
    </template>

    <template x-if="currentVideo && videoType === 'vimeo'">
        <div x-data="vimeoPlayer(currentVideo)">
            <div class="videoModal__playerInner">
                <div id="videoModalVimeo"></div>
            </div>
        </div>
    </template>
</div>