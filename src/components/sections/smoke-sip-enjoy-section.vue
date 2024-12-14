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
    class="flex flex-col items-center justify-start h-auto bg-primary py-10"
  >
    <!-- Заголовок -->
    <h2 class="text-4xl font-bold mb-6 text-center">
      {{ t('SECTIONS.SMOKE_SIP_ENJOY.TITLE') }}
    </h2>

    <!-- Видео -->
    <div class="w-full max-w-7xl mb-10">
      <video
        ref="aboutVideo"
        muted
        playsinline
        loop
        preload="auto"
        class="w-full h-auto rounded-lg shadow-lg"
      >
        <source src="/videos/backround-vid.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="flex flex-col items-center w-full max-w-7xl">
      <h3 class="mb-8 text-3xl">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.ABOUT_US') }}
      </h3>

      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <img
            src="/images/angel_leo.jpg"
            alt="Family photo"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div class="flex-1">
          <img
            src="/images/about_us_text.jpg"
            alt="About us"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <div class="w-full max-w-7xl mt-10 px-4">
      <h3 class="mb-8 text-3xl font-bold text-center">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PRODUCT.TITLE') }}
      </h3>

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PRODUCT.DESCRIPTION_LINE_1') }}
      </p>

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PRODUCT.DESCRIPTION_LINE_2') }}
      </p>
    </div>

    <div class="w-full max-w-7xl mt-10 px-4">
      <h3 class="mb-8 text-3xl font-bold text-center">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PHILOSOPHY.TITLE') }}
      </h3>

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PHILOSOPHY.DESCRIPTION_LINE_1') }}
      </p>

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PHILOSOPHY.DESCRIPTION_LINE_2') }}
      </p>
    </div>

    <div class="w-full max-w-7xl mt-10 px-4">
      <h3 class="mb-8 text-3xl font-bold text-center">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.JOIN_US.TITLE') }}
      </h3>

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.JOIN_US.DESCRIPTION_LINE_1') }}
      </p>
    </div>
  </section>
</template>
<style scoped>
video {
  object-fit: cover;
}
</style>
