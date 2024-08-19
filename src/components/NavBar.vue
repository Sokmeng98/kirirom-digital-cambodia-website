<template>
  <!-- Default -->
  <header
    class="sticky top-0 z-50 bg-white"
    :class="showOverlay ? '' : 'shadow-lg'"
  >
    <div class="flex items-center justify-between mx-8 md:mx-16 py-2">
      <router-link
        to="/"
        class="flex items-center my-auto pr-4 font-sans text-xl text-secondary md:tracking-wider"
      >
        <img
          src="../assets/logos/kdclogo.png"
          alt="kdc-logo"
          height="56"
          width="224"
          class=""
        />
      </router-link>
      <button
        @click="
          () => {
            startMenu = true;
            showOverlay = false;
          }
        "
        type="button"
        class="menu-button rounded-lg"
        :class="
          showOverlay
            ? 'menu-button inline-flex items-center  w-10 h-10 justify-center rounded-lg md:hidden hover:bg-[#4C5BE5] hover:text-white focus:outline-none dark:text-gray-400'
            : 'opacity-0 hidden'
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          viewBox="0 0 20 20"
          fill="#000000"
        >
          <path
            d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
          />
        </svg>
      </button>
      <button
        @click="
          () => {
            startMenu = true;
            showOverlay = true;
          }
        "
        type="button"
        class="menu-button inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-[#4C5BE5] hover:text-white focus:outline-none dark:text-gray-400"
        :class="
          showOverlay
            ? ' opacity-0 hidden'
            : 'opacity-100 block fixed top-3 right-8 md:right-14'
        "
      >
        <svg
          class="w-8 h-8"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li v-for="item in menuList" :key="item.href">
            <router-link
              :to="item.href"
              class="block py-1 px-3 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-1 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent lg:text-base"
              :class="
                item.href === $route.path
                  ? 'bg-[#4C5BE5] text-white '
                  : isAtTop
                  ? ' text-gray-900'
                  : 'text-gray-900'
              "
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
  <!-- Navigation Overlay -->
  <div
    class="fixed bg-black w-screen h-screen z-30 bg-opacity-50"
    :class="showOverlay ? 'block' : 'hidden'"
  >
    <div
      id="menu"
      class="mt-0 fullMenu max-h-screen"
      :class="startMenu ? (showOverlay ? 'down' : 'up') : 'h-0 overflow-hidden'"
    >
      <div class="container flex flex-col mt-16 h-full px-8 py-10">
        <div class="flex justify-between items-center"></div>
        <nav class="flex flex-col w-fit mt-10 font-[Open Sans] font-light">
          <router-link
            v-for="item in menuList"
            :key="item.href"
            :to="item.href"
            ref="myElement"
            class="menu-item text-3xl hover:opacity-100 leading-loose md:text-[2.5rem] md:leading-[5rem] no-underline relative underline-offset-[1rem] decoration-2 text-secondary transition-all"
            :class="
              item.href === $route.path ? 'opacity-100 active' : 'opacity-50'
            "
            @click="
              () => {
                scrollToTop();
                showOverlay = false;
              }
            "
          >
            <div class="underline-left" />
            {{ item.name }}
            <div class="underline-right" />
          </router-link>
        </nav>
        <div class="flex flex-row gap-6 pt-12">
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
</template>

<script>
import { shallowRef } from "vue";
import FacebookIcon from "../components/icons/socials/FacebookLogo.vue";
import LinkedinIcon from "../components/icons/socials/LinkedInLogo.vue";
import InstagramIcon from "../components/icons/socials/InstagramLogo.vue";
import YoutubeIcon from "../components/icons/socials/YouTubeLogo.vue";

export default {
  components: {
    FacebookIcon,
    LinkedinIcon,
    InstagramIcon,
    YoutubeIcon,
  },
  data() {
    return {
      startMenu: false,
      showOverlay: false,
      isAtTop: false,
      menuList: [
        {
          name: "Home",
          href: "/",
        },
        {
          name: "About",
          href: "/about",
        },
        {
          name: "Contact",
          href: "/contact",
        },
      ],
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      this.isAtTop = window.scrollY === 0; // Check if user is at the top
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.menu-button {
  transition: 0.5s;

  &::after {
    size: 0%;
    height: 100%;
  }

  &:hover {
    background-color: #4c5be5;
  }
}

.fullMenu {
  overflow: hidden;
  height: 0vh;
  background-color: #fff;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 20;
}
@media screen and (min-width: 500px) {
  .fullMenu {
    width: 50%;
  }
}
// mobile size
@media screen and (max-width: 500px) {
  .fullMenu {
    width: 100%;
  }
}

.overlay {
  width: 100vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: hidden;
  transition: 1s;
}

.underline-left {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 51%;
  height: 3px;
  background-color: #2061aa;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.3s ease;
  z-index: 100;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.menu-item:hover .underline-left {
  transform: scaleX(1);
}

.underline-right {
  position: absolute;
  right: 0;
  bottom: -2px;
  width: 51%;
  height: 3px;
  background-color: #2061aa;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s ease;
  z-index: 100;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.menu-item:hover .underline-right {
  transform: scaleX(1);
}

// active and underline
.active .underline-left {
  transform: scaleX(1);
}

.active .underline-right {
  transform: scaleX(1);
}

// animation classes
.down {
  height: 100vh;
  animation: slide-down 0.5s;
}
.up {
  animation: slide-up 0.5s;
  height: 0vh;
}
@keyframes slide-up {
  0% {
    height: 100vh;
  }
  100% {
    height: 0vh;
  }
}
@keyframes slide-down {
  0% {
    height: 0vh;
  }
  100% {
    height: 100vh;
  }
}
@keyframes animate-lines {
  0% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: 18;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
