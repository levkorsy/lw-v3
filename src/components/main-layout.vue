<script setup lang="ts">
import BaseNavbar from './kit/base-navbar.vue';
import ViewsContainer from './kit/views-container.vue';
import BaseFooter from './kit/base-footer.vue';
</script>

<template>
  <div class="flex flex-col w-full h-screen">
    <base-navbar class="h-[53px]"/>

    <views-container class="flex-1 overflow-y-auto"/>

    <base-footer class="h-[80px] bg-gray-900 text-white"/>
  </div>
</template>

<style scoped>
</style>
