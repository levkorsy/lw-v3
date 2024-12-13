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
import Home from '@/components/sections/home-section.vue';
import SmokeSipEnjoy from '@/components/sections/smoke-sip-enjoy.vue';
import Recipes from '@/components/sections/recipes-section.vue';
import Instructions from '@/components/sections/instructions-section.vue';
import Tips from '@/components/sections/tips-section.vue';
</script>

<style scoped></style>
