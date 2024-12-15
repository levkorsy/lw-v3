<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  steps: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<template>
  <div class="mb-6">
    <h5 class="text-lg font-semibold mb-2">{{ title }}</h5>
    <ul class="list-decimal list-inside space-y-1 text-gray-700">
      <li v-for="(step, index) in steps" :key="index">
        {{ step }}
      </li>
    </ul>
  </div>
</template>
