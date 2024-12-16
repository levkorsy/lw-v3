<script setup lang="ts">
import SectionHeader from '@/components/sections/components/section-header.vue';
import { useRecipes } from '@/components/sections/recipes/useRecipes.ts';
import RecipeItem from '@/components/sections/recipes/recipe-item.vue';
import { ref } from 'vue';

const { recipes } = useRecipes();

const activeRecipe = ref<number | null>(null);

const toggleRecipe = (index: number) => {
  activeRecipe.value = activeRecipe.value === index ? null : index;
};
</script>

<template>
  <section
    class="flex flex-col items-center justify-start h-auto bg-primary py-10"
  >
    <section-header text="SECTIONS.RECIPES.TITLE" />

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <recipe-item
        v-for="(recipe, index) in recipes"
        :key="recipe.title + index"
        :recipe="recipe"
        :is-active="activeRecipe === index"
        @click="toggleRecipe(index)"
      />
    </div>
  </section>
</template>

<style scoped></style>
