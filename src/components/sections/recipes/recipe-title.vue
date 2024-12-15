<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">
    {{ title }}
  </h2>
</template>
