<template>
  <div class="flex mt-24">
    <!-- container -->
    <div
      class="shadow-lg blue-box flex w-full justify-center space-x-2 bg-[#091D3E] py-8 mx-auto"
    >
      <!-- large screen content -->
      <div
        class="flex flex-col w-full space-y-3 lg:text-left text-center font-[Poppins] text-[#2061AA]"
      >
        <div
          class="flex flex-col justify-between items-center gap-x-56 md:flex-row text-white md:mx-16 mx-5"
        >
          <div class="mb-5 md:mb-2">
            <img
              src="../assets/logos/kdclogo.png"
              alt="Kirirom Digital Inc."
              class="w-fit h-16 mx-auto"
            />
          </div>

          <!-- right content -->
          <div
            class="flex flex-col md:flex-row justify-center items-center gap-7 mb-6"
          >
            <div class="flex flex-col gap-3">
              <a href="/">
                <ButtonArrowText buttonText="Home" />
              </a>
              <a href="/about">
                <ButtonArrowText buttonText="About us" />
              </a>
              <a href="/contact">
                <ButtonArrowText buttonText="Contact" />
              </a>
            </div>
            <div class="hidden h-24 w-0.5 bg-whit md:block"></div>
            <div
              class="col-span-2 my-auto space-y-2 text-center md:lg:space-y-5 sm:md:lg:text-right justify-self-center lg:justify-end"
            >
              <a
                href="tel:095777844"
                class="ml-[-1.5rem] sm:md:lg:ml-[3.5rem] pl-4 lg:pl-0"
              >
                <ButtonIconRotate buttonText="(855) 095 777 844" iconBut="1" />
              </a>

              <a
                href="mailto:info@kirirom-digital.com"
                class="ml-[-1.5rem] sm:md:lg:ml-[3.5rem] pl-4 lg:pl-0"
              >
                <ButtonIconRotate
                  buttonText="info@kirirom-digital.com"
                  iconBut="2"
                />
              </a>

              <a
                href="https://maps.app.goo.gl/au97zGxisPYsMoKf6"
                target="_blank"
                class="ml-[-1.5rem] sm:md:lg:ml-[3.5rem] pl-4 lg:pl-0"
              >
                <ButtonIconRotate
                  buttonText="Phnom Penh, Cambodia"
                  iconBut="3"
                />
              </a>
            </div>
          </div>

          <!-- hide in large screen -->
          <div class="flex flex-row gap-4 mx-auto md:hidden">
            <component
              v-for="(social, idx) in socials"
              :key="idx"
              :is="social.component"
              class="cursor-pointer opacity-70 text-secondary hover:opacity-100"
            />
          </div>
        </div>

        <!-- hide in small screen -->
        <div class="hidden text-left lg:block md:mx-16 mt-10">
          <hr class="border-gray-secondary" />
          <div class="w-full flex flex-row justify-between items-center mt-10">
            <p>© 2024 · Kirirom Digital Inc.</p>
            <div class="gap-4 ml-4 lg:flex">
              <component
                v-for="(social, idx) in socials"
                :key="idx"
                :is="social.component"
                class="cursor-pointer opacity-70 text-secondary hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "vue";
import FacebookIcon from "../components/icons/socials/FacebookLogo.vue";
import LinkedinIcon from "../components/icons/socials/LinkedInLogo.vue";
import ButtonArrowText from "./ButtonArrowText.vue";
import ButtonIconRotate from "./ButtonIconRotate.vue";

export default {
  data() {
    return {
      socials: [
        {
          component: shallowRef(FacebookIcon),
        },
        {
          component: shallowRef(LinkedinIcon),
        },
      ],
    };
  },
  components: {
    ButtonArrowText,
    ButtonIconRotate,
  },
};
</script>
<style scoped>
/* .animate-scale:hover {
  transform: scale(0.9);
  transition: transform 20s ease-out;
}
.animate-scale {
  cursor: pointer;
} */
</style>
