<script setup lang="ts">
defineProps({
  alternative: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<template>
  <div class="border-l-4 border-gray-300 pl-4 text-gray-600">
    <ul class="list-disc list-inside space-y-2">
      <li v-for="(item, index) in alternative" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
