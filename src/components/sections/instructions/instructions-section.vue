<script setup lang="ts">
import SectionHeader from '@/components/sections/components/section-header.vue';
import BaseImage from '@/components/kit/base-image.vue';
import SectionSubHeader from '@/components/sections/components/section-sub-header.vue';
import { useInstructions } from '@/components/sections/instructions/useInstructions.ts';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { instructions, additionalTips } = useInstructions();
</script>

<template>
  <section
    class="flex flex-col items-center justify-start h-auto bg-primary py-10"
  >
    <section-header text="SECTIONS.INSTRUCTIONS.TITLE" />

    <base-image
      imageSrc="/images/instructions/smoker_instruction.webp"
      alt="Smoker instructions"
      class="w-full h-auto rounded-lg shadow-lg max-w-7xl"
    />

    <div class="max-w-7xl">
      <section-sub-header class="mt-16" text="SECTIONS.INSTRUCTIONS.SUBTITLE" />

      <ul class="list-disc pl-6 space-y-4">
        <li
          v-for="(key, index) in instructions"
          :key="index"
          class="flex items-start gap-3"
        >
          <div
            class="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-primary"
          >
            <span class="text-base">★</span>
          </div>
          <span class="leading-relaxed">{{ t(key) }}</span>
        </li>
      </ul>

      <div class="w-full p-10 mt-16 border border-quinary rounded-lg">
        <h3 class="text-xl font-bold mb-4 text-secondary uppercase">
          {{ t('SECTIONS.INSTRUCTIONS.ADDITIONAL_TIPS') }}
        </h3>

        <ul class="list-none list-outside space-y-4">
          <li
            v-for="(tip, index) in additionalTips"
            :key="index"
            class="flex items-start space-x-3"
          >
            <span
              class="flex items-center justify-center w-6 h-6 min-w-6 min-h-6 bg-quaternary text-white rounded-full"
            >
              💡
            </span>
            <p class="text-lg leading-relaxed text-white" v-html="t(tip)"></p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
