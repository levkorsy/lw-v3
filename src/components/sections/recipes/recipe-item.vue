<script setup lang="ts">
import RecipeTitle from './recipe-title.vue';
import RecipeDescription from './recipe-description.vue';
import RecipeIngredients from './recipe-ingredients.vue';
import RecipeInstructions from './recipe-instructions.vue';
import RecipeAlternative from './recipe-alternative.vue';
import RecipePreferred from './recipe-preferred.vue';

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="bg-white p-6 rounded-lg shadow-md">
    <recipe-title :title="recipe.title" />
    <recipe-description :description="recipe.description" />

    <h3 class="text-xl font-bold mt-4">Ingredients</h3>
    <recipe-ingredients :ingredients="recipe.ingredients" />

    <h3 class="text-xl font-bold mt-4">Instructions</h3>
    <recipe-instructions :instructions="recipe.instructions" />

    <h3 class="text-xl font-bold mt-4">Alternative</h3>
    <recipe-alternative :alternative="recipe.alternative" />

    <h3 class="text-xl font-bold mt-4">Preferred Whiskey</h3>
    <recipe-preferred :preferred="recipe.preferred" />
  </article>
</template>
