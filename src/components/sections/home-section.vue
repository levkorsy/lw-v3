<script setup lang="ts">
import SmokeCanvas from '@/components/kit/smoke-canvas.vue';
import BaseButton from '@/components/kit/base-button.vue';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import scrollIntoView from '@/helpers/scroll-into-view.ts';

const handleLetsTry = () => {
  scrollIntoView('#smoke-sip-enjoy', 'start');
};
</script>

<template>
  <section
    class="flex items-center justify-center w-full h-screen bg-primary relative"
  >
    <smoke-canvas />

    <div
      class="absolute items-center justify-center text-center pointer-events-none"
    >
      <h1 class="text-4xl md:text-5xl mb-4 leading-tight">
        Elevate Your Cocktail Experience with
        <p class="text-tertiary font-bold mt-4">Leo's Will:</p>
      </h1>
      <p class="text-4xl md:text-5xl mb-6">
        The Ultimate Smoker for <br />Perfect Old-Fashioned Cocktails.
      </p>

      <base-button class="pointer-events-auto" @click="handleLetsTry">
        <div
          class="group text-2xl p-1 px-8 border-white border-2 hover:border-secondary hover:bg-secondary transition-all duration-500 ease-in-out"
        >
          Lets Get Started
          <font-awesome-icon
            :icon="faArrowRight"
            class="ml-2 transition-transform duration-500 transform group-hover:rotate-90 w-5 h-5"
          />
        </div>
      </base-button>
    </div>
  </section>
</template>

<style scoped></style>
