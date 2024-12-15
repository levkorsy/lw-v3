<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h3 class="text-2xl font-bold text-center mb-4">
    {{ title }}
  </h3>
</template>
