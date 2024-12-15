<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps({
  alternative: {
    type: Array as () => string[],
    required: true,
  },
});

const { t } = useI18n();
</script>

<template>
  <div class="border-l-4 border-gray-300 pl-4 text-gray-600">
    <h4 class="text-xl font-bold mt-4">
      {{ t('SECTIONS.RECIPES.ALTERNATIVE') }}
    </h4>

    <ul class="list-disc list-inside space-y-2">
      <li v-for="(item, index) in alternative" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
