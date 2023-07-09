<script setup>
  import { ref, onMounted } from 'vue';
  import moment from 'moment';
  import Overlay from './components/Overlay.vue';
  import Header from './components/Header.vue';
  import Video from './components/Video.vue';
  import Chat from './components/Chat.vue';

  const deadline = ref(1689120000);
  const timeRemaining = ref(null);
  const countdown = ref(null);
  const hideOverlay = ref(false);

  onMounted(() => {
    const deadlineDate = moment.unix(deadline.value);

    updateCountdown(deadlineDate);
    countdown.value = setInterval(() => {
      updateCountdown(deadlineDate);
    }, (3600 / 2));
  });

  const freezePage = () => {
    document.documentElement.classList.add('overflow-y-hidden');
  };

  const unfreezePage = () => {
    document.documentElement.classList.remove('overflow-y-hidden');
  };

  const removeOverlay = () => {
    unfreezePage();
    countdown.value = null;
    hideOverlay.value = true;
  };

  const updateCountdown = (date) => {
    timeRemaining.value = moment.utc().to(date, 'minutes');

    if (moment.utc().isAfter(date)) {
      removeOverlay();
    }
  };
</script>
<template>
  <Overlay
    v-if="!hideOverlay"
    :remaining="timeRemaining"
  />
  <template v-else>
    <Header />
    <div class="flex-grow flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-4 h-screen lg:h-auto max-h-screen w-full max-w-[1920px] mx-auto mt-[350px]">
      <Video class="lg:col-span-2 xl:col-span-3" />
      <Chat class="flex-grow" />
    </div>
  </template>
</template>
