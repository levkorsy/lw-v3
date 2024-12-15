<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="text-lg text-gray-600 mb-4 text-center leading-relaxed">
    {{ description }}
  </p>
</template>
