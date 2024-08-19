<template>
  <a class="flex h-[1.5em] overflow-y-hidden but-container">
    <div class="arr">
      <Phone v-if="iconBut == 1" class="rotate-[-90deg]" />
      <Email v-if="iconBut == 2" class="rotate-[-90deg]" />
      <Location v-if="iconBut == 3" class="rotate-[-90deg]" />
    </div>
    <p class="hover-underline-animation relative but-text mx-auto">
      {{ buttonText }}
    </p>
  </a>
</template>
<script>
import Phone from "./icons/PhoneNumber.vue";
import Email from "./icons/EmailInfo.vue";
import Location from "./icons/LocationIcon.vue";

export default {
  props: ["buttonText", "iconBut"],
  components: {
    Phone,
    Email,
    Location,
  },
};
</script>
<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.arr {
  position: relative;
  top: 100%;
}

.but-container:hover .arr {
  animation: entryRotate 0.25s linear forwards;
  transform-origin: top right;
  transform-style: preserve-3D;
}
.but-container:hover .but-text {
  transform: scale(0.9);
  transition: transform 0.25s ease-out;
}
/* .but-text {
  font-size: medium;
} */
@keyframes entryRotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
</style>
