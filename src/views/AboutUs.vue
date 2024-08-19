<template>
  <body>
    <div class="">
      <div
        class="grid grid-cols-2 gap-4 lg:grid-cols-3 p-10 md:p-16 bg-[#FAFAFA]"
      >
        <!--left screen-->
        <div class="col-span-2 text-black font-bold">
          <div class="text-4xl">About us</div>
          <div
            v-for="(item, idx) in aboutInfo"
            :key="idx"
            class="flex items-stretch gap-10 pt-5 slide-in-left"
          >
            <span class="font-semibold min-w-[9rem] text-black">
              {{ item.title }}
            </span>
            <span class="col-span-2 font-light w-fit text-black">{{
              item.content
            }}</span>
          </div>
        </div>
        <!--right screen-->
        <div class="items-center hidden w-full lg:flex slide-in-right">
          <img src="../assets/about/aboutus.png" alt="aboutus" class="rounded-lg" />
        </div>
      </div>
      <!-- section 1 -->
      <div
        class="grid grid-cols-2 gap-4 lg:grid-cols-3 bg-[#D8D0C5] p-10 md:p-16"
      >
        <!--left screen-->
        <div class="col-span-2">
          <div class="text-4xl text-primary-dark">The Journey</div>
          <div class="pt-5 text-black">
            Kirirom Digital Cambodia is established under Kirirom Digital Inc.
            based in <br />Japan. Kirirom Digital provides services and
            solutions that is fully cutting edge technologies that enhance
            clients’ business with trust and reliability. With believe in
            providing high-end services to our client while ensuring complete
            satisfactory from our client.
          </div>
          <div
            v-for="(item, idx) in companyInfo"
            :key="idx"
            class="flex items-stretch gap-10 pt-5"
          >
            <span class="font-semibold min-w-[9rem] text-black">
              {{ item.title }}
            </span>
            <span class="col-span-2 font-light text-black">{{
              item.content
            }}</span>
          </div>
        </div>
        <!--right screen-->
        <div class="items-center hidden w-full lg:flex">
          <img src="../assets/about/journey.png" alt="journey" />
        </div>
      </div>

      <!-- section 2 -->
      <div
        class="grid grid-cols-2 gap-16 p-10 md:p-16 lg:grid-cols-3 bg-[#FAFAFA]"
      >
        <!--left-screen-->
        <div class="items-center hidden lg:flex">
          <img src="../assets/about/ourmission.png" alt="mission" />
        </div>
        <!--right-screen-->
        <div class="col-span-2">
          <div class="text-4xl text-primary-dark">Our Mission</div>
          <div class="pt-5 text-black">
            We provide services such as ERP consultation and implementation,
            UX/UI design whether on web or mobile, Web design and development,
            Mobile application development, Software quality assurance (QA test)
            and many other services. We give consultants to our client and
            define the problem, and we design and develop systems for solving
            the problem with scalability and reliability. We help you grow and
            develop your business, whether they happen to be in any of its
            phases, always it can get better.
          </div>
          <div class="pt-5">
            Kirirom Digital takes pride in offering high-quality services with
            quick turnaround times. All our staff in Japan are able to converse
            in English, and are equipped with the latest technology trends.
          </div>
        </div>
      </div>
      <!-- section 3 -->
      <div
        class="grid grid-cols-2 gap-4 lg:grid-cols-3 bg-[#e4d1dc98] p-10 md:p-16"
      >
        <!--left screen-->
        <div class="col-span-2">
          <div class="text-4xl text-primary-dark">Our Vision</div>
          <div class="pt-5 text-black">
            At Kirirom Digital, our Japanese engineers are supported by young
            and talented engineers from one of Cambodia’s top university,
            Kirirom Institute of Technology. With this mix of senior engineers
            and young blood, we believe that this will result in more innovative
            technology and ideas that will help your business succeed.
          </div>
        </div>
        <!--right screen-->
        <div class="items-center hidden w-full lg:flex">
          <img src="../assets/about/vision.png" alt="vision" />
        </div>
      </div>
      <!-- section 5 -->
      <div
        class="grid grid-cols-2 gap-16 p-10 md:p-16 lg:grid-cols-3 bg-[#F7FBF8]"
      >
        <!--left-screen-->
        <div class="items-center hidden lg:flex">
          <img src="../assets/about/ourteam.jpg" alt="team" />
        </div>
        <!--right-screen-->
        <div class="col-span-2 py-4">
          <div class="text-4xl text-primary-dark">Our Team</div>
          <div class="pt-5 text-black">
            At Kirirom Digital, our Japanese engineers are supported by young
            and talented engineers from one of Cambodia’s top university,
            Kirirom Institute of Technology. With this mix of senior engineers
            and young blood, we believe that this will result in more innovative
            technology and ideas that will help your business succeed.
          </div>
        </div>
      </div>

      <!-- board member -->
      <div class="p-10 md:p-16">
        <div class="flex justify-center text-4xl text-primary-dark">
          Board Member
        </div>
        <div class="flex items-center justify-center pt-14 space-x-12">
          <div>
            <img
              src="../assets/about/takeshi.png"
              alt="takeshi-san"
              width="300"
              class="rounded-full"
            />
            <div
              class="pt-4 font-bold text-base sm:text-xl text-center text-black"
            >
              Takeshi Izuka
            </div>
            <div class="font-bold text-base sm:text-xl text-center text-black">
              Group CEO
            </div>
          </div>
          <div>
            <img
              src="../assets/about/ryota.png"
              alt="ryota-san"
              width="300"
              class="object-cover object-top rounded-full aspect-square"
            />
            <div
              class="pt-4 font-bold text-base sm:text-xl text-center text-black"
            >
              Ryota Ishihara
            </div>
            <div class="font-bold text-base sm:text-xl text-center text-black">
              Group COO
            </div>
          </div>
        </div>

      </div>

      <!-- <BlueBox class="px-0" /> -->
    </div>
  </body>
</template>
<script>
import PageHeader from "../components/base/PageHeader.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      aboutInfo: [
        {
          title: "Company Name :",
          content: "KIRIROM DIGITAL (CAMBODIA) CO., LTD.",
        },
        {
          title: "Address :",
          content: "Paprak Tboung, Kakap, Por Sen Chey, Phnom Penh, Cambodia.",
        },
        {
          title: "Established :",
          content: "28-Jun-2022",
        },
        {
          title: "Director :",
          content: "Ishihara RYOTA",
        },
      ],

      companyInfo: [
        {
          title: "Parent Company",
          content: "Kirirom Digital Inc.",
        },
        {
          title: "Address",
          content: "1-3-11, Fujimi, Chiyoda, Tokyo, 102-0071, Japan",
        },
        {
          title: "Established",
          content: "24 December 2021",
        },
        {
          title: "Employee",
          content: "55 Employees",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    this.initAnimations();
  },
  methods: {
    initAnimations() {
      gsap.from(".slide-in-left", {
        x: -300,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".slide-in-left",
          start: "top 80%", // Trigger the animation when the top of the element crosses 80% of the viewport
          toggleActions: "play none none none",
        },
      });

      gsap.from(".slide-in-right", {
        x: 300,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".slide-in-right",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".fade-in", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
  },
};
</script>

<style></style>
