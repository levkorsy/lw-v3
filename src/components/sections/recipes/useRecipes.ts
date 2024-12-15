import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

type Recipe = {
  title: string;
  description: string;
  ingredients: string[];
  instructions: InstructionGroup[];
  alternative: string[];
  preferred: string[];
};

type InstructionGroup = {
  title: string;
  steps: string[];
};

export const useRecipes = () => {
  const { t } = useI18n();

  const recipes = computed<Recipe[]>(() => [
    {
      title: t('SECTIONS.RECIPES.SPRING_CHERRY.TITLE'),
      description: t('SECTIONS.RECIPES.SPRING_CHERRY.DESCRIPTION'),
      ingredients: [
        t('SECTIONS.RECIPES.SPRING_CHERRY.INGREDIENTS[0]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.INGREDIENTS[1]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.INGREDIENTS[2]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.INGREDIENTS[3]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.INGREDIENTS[4]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.INGREDIENTS[5]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.INGREDIENTS[6]'),
      ],
      instructions: [
        {
          title: t('SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.PREPARATION'),
          steps: [
            t('SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.PREPARATION[0]'),
            t('SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.PREPARATION[1]'),
          ],
        },
        {
          title: t(
            'SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.SMOKING_THE_GLASS'
          ),
          steps: [
            t(
              'SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.SMOKING_THE_GLASS[0]'
            ),
            t(
              'SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.SMOKING_THE_GLASS[1]'
            ),
            t(
              'SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.SMOKING_THE_GLASS[2]'
            ),
            t(
              'SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.SMOKING_THE_GLASS[3]'
            ),
            t(
              'SECTIONS.RECIPES.SPRING_CHERRY.INSTRUCTIONS.SMOKING_THE_GLASS[4]'
            ),
          ],
        },
      ],
      alternative: [
        t('SECTIONS.RECIPES.SPRING_CHERRY.ALTERNATIVE[0]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.ALTERNATIVE[1]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.ALTERNATIVE[2]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.ALTERNATIVE[3]'),
      ],
      preferred: [
        t('SECTIONS.RECIPES.SPRING_CHERRY.PREFERRED[0]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.PREFERRED[1]'),
        t('SECTIONS.RECIPES.SPRING_CHERRY.PREFERRED[2]'),
      ],
    },
    {
      title: t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.TITLE'),
      description: t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.DESCRIPTION'),
      ingredients: [
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INGREDIENTS[0]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INGREDIENTS[1]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INGREDIENTS[2]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INGREDIENTS[3]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INGREDIENTS[4]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INGREDIENTS[5]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INGREDIENTS[6]'),
      ],
      instructions: [
        {
          title: t(
            'SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.PREPARATION'
          ),
          steps: [
            t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.PREPARATION[0]'),
            t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.PREPARATION[1]'),
          ],
        },
        {
          title: t(
            'SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.SMOKING_THE_GLASS'
          ),
          steps: [
            t(
              'SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.SMOKING_THE_GLASS[0]'
            ),
            t(
              'SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.SMOKING_THE_GLASS[1]'
            ),
            t(
              'SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.SMOKING_THE_GLASS[2]'
            ),
            t(
              'SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.SMOKING_THE_GLASS[3]'
            ),
            t(
              'SECTIONS.RECIPES.SUMMER_APPLEWOOD.INSTRUCTIONS.SMOKING_THE_GLASS[4]'
            ),
          ],
        },
      ],
      alternative: [
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.ALTERNATIVE[0]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.ALTERNATIVE[1]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.ALTERNATIVE[2]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.ALTERNATIVE[3]'),
      ],
      preferred: [
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.PREFERRED[0]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.PREFERRED[1]'),
        t('SECTIONS.RECIPES.SUMMER_APPLEWOOD.PREFERRED[2]'),
      ],
    },
    {
      title: t('SECTIONS.RECIPES.FALL_HICKORY.TITLE'),
      description: t('SECTIONS.RECIPES.FALL_HICKORY.DESCRIPTION'),
      ingredients: [
        t('SECTIONS.RECIPES.FALL_HICKORY.INGREDIENTS[0]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.INGREDIENTS[1]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.INGREDIENTS[2]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.INGREDIENTS[3]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.INGREDIENTS[4]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.INGREDIENTS[5]'),
      ],
      instructions: [
        {
          title: t('SECTIONS.RECIPES.FALL_HICKORY.INSTRUCTIONS.PREPARATION'),
          steps: [
            t('SECTIONS.RECIPES.FALL_HICKORY.INSTRUCTIONS.PREPARATION[0]'),
            t('SECTIONS.RECIPES.FALL_HICKORY.INSTRUCTIONS.PREPARATION[1]'),
          ],
        },
        {
          title: t(
            'SECTIONS.RECIPES.FALL_HICKORY.INSTRUCTIONS.SMOKING_THE_GLASS'
          ),
          steps: [
            t(
              'SECTIONS.RECIPES.FALL_HICKORY.INSTRUCTIONS.SMOKING_THE_GLASS[0]'
            ),
            t(
              'SECTIONS.RECIPES.FALL_HICKORY.INSTRUCTIONS.SMOKING_THE_GLASS[1]'
            ),
            t(
              'SECTIONS.RECIPES.FALL_HICKORY.INSTRUCTIONS.SMOKING_THE_GLASS[2]'
            ),
            t(
              'SECTIONS.RECIPES.FALL_HICKORY.INSTRUCTIONS.SMOKING_THE_GLASS[3]'
            ),
          ],
        },
      ],
      alternative: [
        t('SECTIONS.RECIPES.FALL_HICKORY.ALTERNATIVE[0]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.ALTERNATIVE[1]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.ALTERNATIVE[2]'),
      ],
      preferred: [
        t('SECTIONS.RECIPES.FALL_HICKORY.PREFERRED[0]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.PREFERRED[1]'),
        t('SECTIONS.RECIPES.FALL_HICKORY.PREFERRED[2]'),
      ],
    },
    {
      title: t('SECTIONS.RECIPES.WINTER_OAK.TITLE'),
      description: t('SECTIONS.RECIPES.WINTER_OAK.DESCRIPTION'),
      ingredients: [
        t('SECTIONS.RECIPES.WINTER_OAK.INGREDIENTS[0]'),
        t('SECTIONS.RECIPES.WINTER_OAK.INGREDIENTS[1]'),
        t('SECTIONS.RECIPES.WINTER_OAK.INGREDIENTS[2]'),
      ],
      instructions: [
        {
          title: t('SECTIONS.RECIPES.WINTER_OAK.INSTRUCTIONS.PREPARATION'),
          steps: [
            t('SECTIONS.RECIPES.WINTER_OAK.INSTRUCTIONS.PREPARATION[0]'),
            t('SECTIONS.RECIPES.WINTER_OAK.INSTRUCTIONS.PREPARATION[1]'),
          ],
        },
      ],
      alternative: [
        t('SECTIONS.RECIPES.WINTER_OAK.ALTERNATIVE[0]'),
        t('SECTIONS.RECIPES.WINTER_OAK.ALTERNATIVE[1]'),
      ],
      preferred: [
        t('SECTIONS.RECIPES.WINTER_OAK.PREFERRED[0]'),
        t('SECTIONS.RECIPES.WINTER_OAK.PREFERRED[1]'),
      ],
    },
  ]);

  return { recipes };
};
