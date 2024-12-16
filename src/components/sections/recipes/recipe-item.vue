<script setup lang="ts">
import { defineProps } from 'vue';
import RecipeTitle from './recipe-title.vue';
import RecipeDescription from './recipe-description.vue';
import RecipeIngredients from './recipe-ingredients.vue';
import RecipeInstructions from './recipe-instructions.vue';
import RecipeAlternative from './recipe-alternative.vue';
import RecipePreferred from './recipe-preferred.vue';

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
    <!-- Заголовок рецепта (всегда видимый) -->
    <div class="flex items-center justify-between">
      <recipe-title :title="recipe.title" class="text-xl font-bold" />
    </div>

    <!-- Контент рецепта -->
    <div v-if="isActive" class="mt-4 overflow-auto">
      <!-- Описание рецепта -->
      <recipe-description :description="recipe.description" />

      <!-- Ингредиенты -->
      <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Ingredients:</h3>
        <recipe-ingredients :ingredients="recipe.ingredients" />
      </div>

      <!-- Инструкции -->
      <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Instructions:</h3>
        <recipe-instructions :instructions="recipe.instructions" />
      </div>

      <!-- Альтернативный способ -->
      <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Alternative:</h3>
        <recipe-alternative :alternative="recipe.alternative" />
      </div>

      <!-- Рекомендуемые продукты -->
      <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Preferred Whiskey:</h3>
        <recipe-preferred :preferred="recipe.preferred" />
      </div>
    </div>
    <!-- Превью карточки -->
    <div v-else class="h-48 flex items-center justify-center text-center">
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
