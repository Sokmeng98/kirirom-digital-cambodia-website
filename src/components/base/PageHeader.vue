<template>
  <div class="container max-h-screen px-8 mx-auto py-44">
    <h3 class="text-[#aaa] text-3xl relative">{{ title }}</h3>
    <h1
      class="text-4xl leading-[4rem] md:text-5xl md:leading-[5rem] font-black text-primary-dark font-[Lato] md:max-w-2xl"
    >
      {{ subtitle }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>

<style></style>
