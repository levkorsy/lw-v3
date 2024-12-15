<script setup lang="ts">
import InstructionGroup from './instruction-group.vue';

defineProps({
  instructions: {
    type: Array as () => { title: string; steps: string[] }[],
    required: true,
  },
});
</script>

<template>
  <div>
    <instruction-group
      v-for="(group, index) in instructions"
      :key="index"
      :title="group.title"
      :steps="group.steps"
    />
  </div>
</template>
