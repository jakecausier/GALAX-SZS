<script setup>
  import { ref, onMounted } from 'vue';
  import OvenPlayer from 'ovenplayer';

  const videoContainer = ref(null);
  const player = ref(null);
  const streamUrl = ref('wss://eu.stream.comfytheatre.co.uk:3334/live/galax/abr');

  onMounted(() => {
    initPlayer();
  });

  const initPlayer = () => {
    player.value = OvenPlayer.create(videoContainer.value, {
      sources: [
        {
          label: 'WebRTC',
          type: 'webrtc',
          file: streamUrl.value
        },
        {
          label: 'Low-Latency HLS',
          type: 'hls',
          file: streamUrl.value
        }
      ]
    })
  };
</script>
<template>
  <div class="aspect-video">
    <div ref="videoContainer" />
  </div>
</template>
