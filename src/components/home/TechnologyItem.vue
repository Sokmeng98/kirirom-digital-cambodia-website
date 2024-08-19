<template>
  <div
    class="flex flex-col justify-center items-center font-bold gap-2 text-xs w-14"
  >
    
    <img :src="`${src}`" :alt="`${label} icon`" class="w-7 h-7 md:w-10 md:h-10" />
    <p class="text-center">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: "TechnologyItem",
  props: {
    src: String,
    label: String,
  },
};
</script>

<style scoped>
/* You can add component-specific styles here if needed */
</style>
