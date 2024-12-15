<script setup lang="ts">
defineProps({
  ingredients: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<template>
  <ul class="list-disc list-inside text-gray-700 space-y-2">
    <li v-for="(item, index) in ingredients" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
