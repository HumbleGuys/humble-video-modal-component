<div {{ $attributes->merge(['class' => 'videoModal__player']) }}>
    <template x-if="currentVideo && videoType === 'youtube'">
        <div x-data="youtubePlayer(currentVideo)">
            <div class="videoModal__playerInner">
                <div id="videoModalYoutube"></div>
            </div>
        </div>
    </template>
</div>