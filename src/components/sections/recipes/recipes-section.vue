<script setup lang="ts">
import SectionHeader from '@/components/sections/components/section-header.vue';
import { useRecipes } from '@/components/sections/recipes/useRecipes.ts';
import RecipeItem from '@/components/sections/recipes/recipe-item.vue';

const { recipes } = useRecipes();
</script>

<template>
  <section
    class="flex flex-col items-center justify-start h-auto bg-primary py-10"
  >
    <section-header text="SECTIONS.RECIPES.TITLE" />

    <img
      src="/images/different_glasses.webp"
      alt="Family photo"
      class="w-full h-auto rounded-lg shadow-lg max-w-5xl"
    />

    <div class="mt-10 w-full max-w-5xl">
      <recipe-item
        v-for="(recipe, index) in recipes"
        :key="recipe.title + index"
        :recipe="recipe"
      />
    </div>
  </section>
</template>

<style scoped></style>
