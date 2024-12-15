<script setup lang="ts">
defineProps({
  preferred: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<template>
  <ul class="list-disc list-inside space-y-2 text-gray-700">
    <li v-for="(item, index) in preferred" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
