<template>
  <div class="w-screen h-auto bg-cover bg-feature px-8 md:px-16 py-16">
    <div class="w-fit mx-auto mb-10">
      <h1 class="text-xl md:text-2xl font-bold text-center">Our Service</h1>
      <div class="h-1 w-full rounded-full bg-red-500 mt-1 mb-2"></div>
    </div>
    <div
      class="flex flex-col md:flex-row items-stretch justify-center flex-wrap gap-2"
    >
      <!-- col-1 -->
      <div ref="card1" class="w-full md:w-[20rem] lg:w-[25rem] bg-white rounded-md p-5">
        <img
            src="../../assets/homepage/outsourcing.png"
            alt="Outsourcing"
            width="58"
            height="58"
            class="h-auto max-w-xs mx-auto rounded-lg"
          />
        <h3 class="text-lg font-bold text-center px-5 py-2">Outsourcing</h3>
        <p class="text-center text-sm p-5 text-gray-500">
          Is hiring developers slowing your projects down? Let us make it easy
          for you. We extend your existing team so you can accomplish your goals
          faster.
        </p>
      </div>
      <div ref="card2" class="w-full md:w-[20rem] lg:w-[25rem] bg-white rounded-md p-5">
        <img
            src="../../assets/homepage/quality-assurance.png"
            alt="quality-assurance"
            width="58"
            height="58"
            class="h-auto max-w-xs mx-auto rounded-lg"
          />
        <h3 class="text-lg font-bold text-center px-5 py-2">
          Software Quality Assurance
        </h3>
        <p class="text-center text-sm p-5 text-gray-500">
          Using our creative design skills, we can help you make your product
          even better by creating a site or application that appeals to your
          audience.
        </p>
      </div>
      <div ref="card3" class="w-full md:w-[20rem] lg:w-[25rem] bg-white rounded-md p-5">
        <img
            src="../../assets/homepage/app-development.png"
            alt="app-development"
            width="58"
            height="58"
            class="h-auto max-w-xs mx-auto rounded-lg"
          />
        <h3 class="text-lg font-bold text-center px-5 py-2">
          Application Development
        </h3>
        <p class="text-center text-sm p-5 text-gray-500">
          The design makes its mark through first impressions. We establish
          long-lasting relationships with our customers using eye-catching
          design and meaningful user experiences.
        </p>
      </div>
      <div ref="card4" class="w-full md:w-[20rem] lg:w-[25rem] bg-white rounded-md p-5">
        <img
            src="../../assets/homepage/programming.png"
            alt="programming"
            width="58"
            height="58"
            class="h-auto max-w-xs mx-auto rounded-lg"
          />
        <h3 class="text-lg font-bold text-center px-5 py-2">Web Development</h3>
        <p class="text-center text-sm p-5 text-gray-500">
          Elevate your online presence with our custom web development services.
          We create responsive, efficient, and visually appealing websites
          tailored to your business needs, ensuring a robust and user-friendly
          digital experience.
        </p>
      </div>

      <div ref="card5" class="w-full md:w-[20rem] lg:w-[25rem] bg-white rounded-md p-5">
        <img
            src="../../assets/homepage/ux-design.png"
            alt="ux-design"
            width="58"
            height="58"
            class="h-auto max-w-xs mx-auto rounded-lg"
          />
        <h3 class="text-lg font-bold text-center px-5 py-2">UX/UI Design</h3>
        <p class="text-center text-sm p-5 text-gray-500">
          Your website is the face of your business. Together, our developers
          and designers build an efficient, interactive, responsive platform
          that will appeal to your target audience.
        </p>
      </div>
      <div ref="card6" class="w-full md:w-[20rem] lg:w-[25rem] bg-white rounded-md p-5">
        <img
            src="../../assets/homepage/erp.png"
            alt="erp"
            width="58"
            height="58"
            class="h-auto max-w-xs mx-auto rounded-lg"
          />
        <h3 class="text-lg font-bold text-center px-5 py-2">
          Streamlined ERP Setup
        </h3>
        <p class="text-center text-sm p-5 text-gray-500">
          With rich experiences of consulting and system implementation for many
          clients, we are clear with what you want and we're flexible.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    const card1 = ref(null);
    const card2 = ref(null);
    const card3 = ref(null);
    const card4 = ref(null);
    const card5 = ref(null);
    const card6 = ref(null);
    // More refs as needed

    onMounted(() => {
      const cards = [
        card1.value,
        card2.value,
        card3.value,
        card4.value,
        card5.value,
        card6.value,
      ];
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Trigger animation when the top of the card reaches 80% of the viewport
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.2, // Delay each card slightly more than the previous one
        });
      });
    });

    return {
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
    };
  },
};
</script>
