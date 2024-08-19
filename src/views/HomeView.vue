<template>
  <body
    class="flex flex-col justify-center items-center overflow-hidden"
  >
  <!-- px-5 md:px-16 py-16 -->
    <!-- content -->
    <div class="w-full flex justify-center bg-cover bg-center h-[340px] md:h-[480px] bg-hero" >
      <div class="mt-20">
        <div class="px-10 md:w-[550px] md:px-0">
          <h1 class=" text-center text-2xl md:text-5xl font-bold text-[#291f1fb6] ">Kickstart Your Vision With Kirirom Digital</h1>
        </div>
        <div class="md:w-96 mx-auto mt-10 px-16 md:px-0">
          <p class="text-center text-[#2E587A] text-sm md:text-base">Unleash Your Potential—Connect with Our Experts in System Development. Let's Create Something Remarkable Together!</p>
        </div>
      </div>
      
    </div>
    <div class=""></div>
    <KdcFeature />
    <div class="my-5"></div>
    <OurWork />
    <div class="my-5"></div>
    <OurClient />
    <div class=""></div>
    <TechnologyStack />
    <div class="my-5"></div>

    <!-- <FeaturedServices /> -->
    <!-- <TechnologyVue /> -->
    <!-- <ChooseKirirom /> -->
    <!-- <BlueBox /> -->
  </body>
</template>
<script>
import KdcFeature from "../components/home/KdcFeature.vue";
import TechnologyStack from "../components/home/TechnologyStack.vue";
import OurClient from "../components/home/OurClient.vue";
import OurWork from "../components/home/OurWork.vue";
import gsap from "gsap";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const headerText = ref(null);
    const subtitle = ref(null);
    const image = ref(null);

    onMounted(() => {
      gsap.from(headerText.value, {
        duration: 1,
        x: -300, // Starts 300px left from its original position
        opacity: 0,
        ease: "power3.out",
      });
      gsap.from(subtitle.value, {
        duration: 2,
        x: -300, // Starts 300px left from its original position
        opacity: 0,
        ease: "power3.out",
      });
      gsap.from(image.value, {
        duration: 1,
        x: 300, // Starts 300px left from its original position
        opacity: 0,
        ease: "power3.out",
      });
    });

    return {
      headerText,
      subtitle,
      image,
    };
  },

  components: {
    KdcFeature,
    TechnologyStack,
    OurWork,
    OurClient,
  },
};
</script>
<style scoped></style>
