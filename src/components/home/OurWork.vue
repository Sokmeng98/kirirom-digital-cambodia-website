<template>
  <div class="w-full px-8 md:px-16">
    <div class="w-fit m-auto py-5 ">
      <h1 class="text-xl md:text-2xl font-extrabold text-center">Our Work</h1>
      <div class="h-1 w-full rounded-full bg-red-500 mt-1 mb-2"></div>
    </div>
    <!-- Scroll buttons -->
    <div class="flex items-center">
      <div class=" mr-10">
        <button @click="scrollLeft" class="bg-[#487090] hover:bg-gray-500 py-2 px-2 rounded-full w-8 md:w-12">
          <img src="../../assets/homepage/arrow-left.png" alt="arrowLeft"/>
        </button>
      </div>
      
      <!-- card body -->
      <div ref="scrollContainer" class="flex justify-left md:justify-start items-stretch  gap-5 overflow-x-scroll scrollbar-hide ">
        <!-- col 1 -->
        <div class="min-w-[20rem] h-auto bg-blue-50 rounded-lg p-5">
          <img src="../../assets/homepage/work1.png" alt="our work" class="h-40" />
          <h3 class="font-bold text-xl my-2">Medic Mobile App</h3>
          <div class="px-5">
            <ul class="list-disc text-gray-500">
              <li>UX/UI Design</li>
              <li>Info Architecture</li>
              <li>Wireframing and Prototype</li>
              <li>Visual and Motion Design</li>
              <li>Hosting</li>
            </ul>
          </div>
        </div>
        <!-- col 2 -->
        <div class="min-w-[20rem] h-auto bg-blue-50 rounded-lg p-5">
          <img src="../../assets/homepage/work2.png" alt="our work" class="h-40" />
          <h3 class="font-bold text-xl my-2">KDC Website</h3>
          <div class="px-5">
            <ul class="list-disc text-gray-500">
              <li>UX/UI Design</li>
              <li>Info Architecture</li>
              <li>Wireframing and Prototype</li>
              <li>Visual and Motion Design</li>
              <li>Hosting</li>
            </ul>
          </div>
        </div>
        <!-- col 3 -->
        <div class="min-w-[20rem] h-auto bg-blue-50 rounded-lg p-5">
          <img src="../../assets/homepage/work3.png" alt="our work" class="h-40" />
          <h3 class="font-bold text-xl my-2">KDJ Website</h3>
          <div class="px-5">
            <ul class="list-disc text-gray-500">
              <li>UX/UI Design</li>
              <li>Info Architecture</li>
              <li>Wireframing and Prototype</li>
              <li>Visual and Motion Design</li>
              <li>Hosting</li>
            </ul>
          </div>
        </div>
        <!-- col 4 -->
        <div class="min-w-[20rem] h-auto bg-blue-50 rounded-lg p-5">
          <img src="../../assets/homepage/work4.png" alt="our work" class="h-40" />
          <h3 class="font-bold text-xl my-2">Rhac Website</h3>
          <div class="px-5">
            <ul class="list-disc text-gray-500">
              <li>UX/UI Design</li>
              <li>Info Architecture</li>
              <li>Wireframing and Prototype</li>
              <li>Visual and Motion Design</li>
              <li>Hosting</li>
            </ul>
          </div>
        </div>
         <!-- col 5 -->
         <div class="min-w-[20rem] h-auto bg-blue-50 rounded-lg p-5">
          <div class="flex justify-center">
            <img src="../../assets/homepage/work5.png" alt="our work" class="h-40" />
          </div>
          
          <h3 class="font-bold text-xl my-2">Slecret Mobile App</h3>
          <div class="px-5">
            <ul class="list-disc text-gray-500">
              <li>UX/UI Design</li>
              <li>Info Architecture</li>
              <li>Wireframing and Prototype</li>
              <li>Visual and Motion Design</li>
              <li>Hosting</li>
            </ul>
          </div>
        </div>
      </div>
      <div class=" ml-10">
        <button @click="scrollRight" class="bg-[#487090] hover:bg-gray-500 py-2 px-2 rounded-full w-8 md:w-12">
          <img src="../../assets/homepage/arrow-right.png" alt="arrowRight"/>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollContainer = ref(null);

function scrollLeft() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      left: scrollContainer.value.scrollLeft - 300,
      behavior: 'smooth'
    });
  }
}

function scrollRight() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      left: scrollContainer.value.scrollLeft + 300,
      behavior: 'smooth'
    });
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
