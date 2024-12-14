<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import { onMounted, ref } from 'vue';
import useVideoTrigger from '@/composables/useVideoTrigger.ts';

const aboutVideo = ref(null);

onMounted(() => {
  useVideoTrigger(aboutVideo);
});
</script>

<template>
  <section
    id="smoke-sip-enjoy"
    class="flex flex-col items-center justify-center h-screen bg-primary"
  >
    <h2 class="text-4xl font-bold mb-6 text-center">
      {{ t('SECTIONS.SMOKE_SIP_ENJOY.TITLE') }}
    </h2>

    <div class="w-full max-w-7xl">
      <video
        ref="aboutVideo"
        muted
        playsinline
        loop
        loading="lazy"
        preload="auto"
        class="w-full h-auto rounded-lg shadow-lg"
      >
        <source src="/videos/backround-vid.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>
<style scoped>
video {
  object-fit: cover;
}
</style>
