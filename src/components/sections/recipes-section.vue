<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section
    class="flex flex-col items-center justify-start h-auto bg-primary py-10"
  >
    <h2 class="text-4xl font-bold mb-6 text-center">
      {{ t('SECTIONS.SMOKE_SIP_ENJOY.TITLE') }}
    </h2>
  </section>
</template>

<style scoped></style>
