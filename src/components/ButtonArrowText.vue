<template>
  <a class="flex h-[1.3em] overflow-hidden but-container"
    ><p class="hover-underline-animation relative but-text mx-auto">
      {{ buttonText }}
    </p>
    <div class="arr">
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        class="rotate-90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.51152 0.760706C7.18743 1.0848 7.18743 1.61513 7.51152 1.93922L11.984 6.41167L1.51879 6.41167C1.40968 6.41167 1.30164 6.43316 1.20083 6.47491C1.10003 6.51667 1.00844 6.57787 0.931286 6.65502C0.854135 6.73217 0.792934 6.82376 0.75118 6.92457C0.709426 7.02537 0.687935 7.13341 0.687935 7.24252C0.687935 7.35163 0.709426 7.45967 0.75118 7.56047C0.792934 7.66127 0.854135 7.75287 0.931286 7.83002C1.00844 7.90717 1.10003 7.96837 1.20083 8.01012C1.30164 8.05188 1.40968 8.07337 1.51879 8.07337L11.984 8.07337L7.51152 12.5458C7.18743 12.8699 7.18743 13.4002 7.51152 13.7243C7.83561 14.0484 8.36594 14.0484 8.69003 13.7243L14.5826 7.83177C14.9067 7.50768 14.9067 6.97735 14.5826 6.65326L8.69003 0.760706C8.36594 0.436615 7.83561 0.436615 7.51152 0.760706Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    buttonText: String,
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
  background-color: white;
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
  transform-origin: top left;
  transform-style: preserve-3D;
}

.but-container:hover .but-text {
  transform: scale(0.9);
  transition: transform 0.25s ease-out;
}

@keyframes entryRotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-90deg);
  }
}
</style>
