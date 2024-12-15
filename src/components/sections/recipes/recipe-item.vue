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
  <article class="bg-secondary p-6 rounded-lg shadow-md text-primary">
    <recipe-title :title="recipe.title" />
    <recipe-description :description="recipe.description" />

    <recipe-ingredients :ingredients="recipe.ingredients" />

    <recipe-instructions :instructions="recipe.instructions" />

    <recipe-alternative :alternative="recipe.alternative" />

    <recipe-preferred :preferred="recipe.preferred" />
  </article>
</template>
