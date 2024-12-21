import { computed } from 'vue';

export function useInstructions() {
  const instructions = computed(() => [
    'SECTIONS.INSTRUCTIONS.LIST.SMOKER_SETUP',
    'SECTIONS.INSTRUCTIONS.LIST.WOOD_CHIPS',
    'SECTIONS.INSTRUCTIONS.LIST.TORCH',
    'SECTIONS.INSTRUCTIONS.LIST.SMOKE_TIME',
    'SECTIONS.INSTRUCTIONS.LIST.HANDLING_SAFETY',
    'SECTIONS.INSTRUCTIONS.LIST.POUR_WHISKEY',
    'SECTIONS.INSTRUCTIONS.LIST.METAL_ICE_CUBES',
    'SECTIONS.INSTRUCTIONS.LIST.SERVING',
  ]);

  const additionalTips = computed(() => [
    'SECTIONS.INSTRUCTIONS.TIPS[0]',
    'SECTIONS.INSTRUCTIONS.TIPS[1]',
    'SECTIONS.INSTRUCTIONS.TIPS[2]',
  ]);

  return {
    instructions,
    additionalTips,
  };
}
