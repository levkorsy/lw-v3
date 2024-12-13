<template>
  <main class="flex flex-col w-full">
    <home id="home" class="min-h-screen w-full" />
    <smoke-sip-enjoy id="smoke-sip-enjoy" class="mb-4" />
    <recipes id="recipes" class="mb-4" />
    <instructions id="instructions" class="mb-4" />
    <tips id="tips" class="mb-4" />
  </main>
</template>

<script setup lang="ts">
import Home from '@/components/sections/home.vue';
import SmokeSipEnjoy from '@/components/sections/smoke-sip-enjoy.vue';
import Recipes from '@/components/sections/recipes.vue';
import Instructions from '@/components/sections/instructions.vue';
import Tips from '@/components/sections/tips.vue';
</script>

<style scoped>
</style>
