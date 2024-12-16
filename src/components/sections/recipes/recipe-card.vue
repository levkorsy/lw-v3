<script setup lang="ts">
import RecipeTitle from './recipe-title.vue';
import RecipeDescription from './recipe-description.vue';
import RecipeIngredients from './recipe-ingredients.vue';
import RecipeInstructions from './recipe-instructions.vue';
import RecipeAlternative from './recipe-alternative.vue';
import RecipePreferred from './recipe-preferred.vue';
import RecipeImage from '@/components/sections/recipes/recipe-image.vue';

// Пропсы
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  isActive: { type: Boolean, default: false },
});
</script>

<template>
  <article
    class="transition-all duration-500 ease-in-out cursor-pointer shadow-lg rounded-lg bg-white overflow-hidden"
    :class="isActive ? 'col-span-2 row-span-2 p-6' : 'h-64 p-4'"
  >
    <div v-if="isActive" class="mt-4 overflow-auto">
      <recipe-title :title="recipe.title" class="text-xl font-bold" />

      <recipe-description :description="recipe.description" />

      <recipe-ingredients :ingredients="recipe.ingredients" />

      <recipe-instructions :instructions="recipe.instructions" />

      <recipe-alternative :alternative="recipe.alternative" />

      <recipe-preferred :preferred="recipe.preferred" />
    </div>

    <div v-else class="h-48 flex items-center justify-center text-center">
      <recipe-image :image-src="recipe.image" />

      <p class="text-gray-700 text-lg">Click to see full recipe</p>
    </div>
  </article>
</template>

<style scoped>
.col-span-2 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
}
</style>
