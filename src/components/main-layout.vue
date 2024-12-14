<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BaseNavbar from './kit/base-navbar.vue';
import ViewsContainer from './kit/views-container.vue';
import BaseFooter from './kit/base-footer.vue';

const isNavbarVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isNavbarVisible.value = entry.isIntersecting;
    },
    { threshold: 0.5 } // Показывать/скрывать навбар при видимости второй секции
  );

  const secondSection = document.querySelector('#smoke-sip-enjoy');
  if (secondSection) {
    observer.observe(secondSection);
  }
});
</script>

<template>
  <div class="flex flex-col w-full h-screen">
    <!-- Навбар с анимацией появления и скрытия -->
    <div
      class="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out"
      :class="
        isNavbarVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      "
    >
      <base-navbar class="h-[53px]" />
    </div>

    <!-- Контент с прокруткой -->
    <div class="flex-1 overflow-y-auto">
      <views-container />

      <base-footer class="h-[80px] bg-gray-900 text-white" />
    </div>
  </div>
</template>

<style scoped></style>
