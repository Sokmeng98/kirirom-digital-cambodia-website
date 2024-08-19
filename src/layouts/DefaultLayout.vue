<template>
  <NavBar />
  <slot />
  <FooterPart2 />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterPart2 from "../components/FooterPart2.vue";

export default {
  components: {
    NavBar,
    FooterPart2,
  },
};
</script>
