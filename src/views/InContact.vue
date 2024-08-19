<template>
  <!-- section1 hero -->
  <section class="w-full px-10 md:px-16 py-12 overflow-hidden bg-[#FAFAFA]">
    <div class="mx-auto">
      <div class="flex flex-col justify-center items-center md:flex-row pt-5">
        <!-- Column for text -->
        <div class="md:w-1/2 pr-2">
          <h2 class="text-black text-3xl font-bold mb-8">
            Get In Touch With Us
          </h2>
          <p class="text-base md:text-lg text-gray-500">
            Feel free to reach out with any questions or to start a conversation
            about how we can support your goals. Our team is ready and eager to
            assist you.
          </p>
        </div>

        <!-- Column for image -->
        <div class="w-1/2 hidden md:block justify-center items-center pl-2">
          <img
            src="../assets/contact/contact.jpg"
            alt="Contact"
            class="h-auto max-w-xs mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- section2 Why Us -->
  <section>
    <div
      class="grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-8 mx-auto mt-10 px-10 md:px-16"
    >
      <!-- column one -->
      <div class="relative">
        <h2 class="font-bold text-3xl text-[#487090] relative">
          Why Us
          <span
            class="absolute bottom-0 left-0 bg-[#000000] h-1 w-16"
            style="top: 100%"
          ></span>
        </h2>

        <p class="text-[#777777] text-base md:text-lg mt-11">
          Kirirom Digital takes pride in offering high-quality services with
          quick turnaround times. All our staff in Japan are able to converse in
          English, and are equipped with the latest technology trends.
        </p>
      </div>

      <!-- column two -->
      <div>
        <ul class="">
          <li v-for="(item, index) in items" :key="index" class="pb-3 sm:pb-10">
            <div class="flex items-center space-x-4">
              <div
                class="w-16 h-16 rounded-lg bg-[#487090] flex justify-center items-center"
              >
                <img :src="item.svgPath" class="w-10" />
              </div>
              <div class="flex-1 min-w-0">
                <h class="text-lg md:text-xl font-bold text-black">
                  {{ item.title }}
                </h>
                <p class="text-base lg:text-lg text-[#777777]">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- section3 Contact Us -->
  <section class="flex justify-center px-10 md:px-16 col-span-10">
    <div
      class="flex flex-col justify-center md:items-center md:flex-row md:gap-10 lg:gap-20 xl:gap-40 mb-5 md:mb-12"
    >
      <div
        class="bg-[#FCFCFC] rounded-3xl shadow-lg shadow-gray-300 col-span-6 p-8 mt-4"
      >
        <h2 class="py-5 text-xl text-black md:text-2xl flex justify-center">
          Contact Us
        </h2>
        <form
          @submit.prevent="onSubmitForm"
          class="self-center justify-self-center md:pb-10"
        >
          <div class="flex flex-col">
            <!-- row1 -->
            <div class="flex-none md:flex gap-5">
              <!-- row1 left -->
              <div class="pt-5 w-full md:w-1/2">
                <label for="name" class="text-black">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  class="text-base"
                  required
                />
              </div>
              <!-- row1 right -->
              <div class="pt-5 w-full md:w-1/2">
                <label for="company" class="text-black">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Campany Name"
                  required
                />
              </div>
            </div>

            <!-- row2 -->
            <div class="pt-5">
              <label for="email" class="text-black">Email *</label>
              <input
                type="text"
                id="email"
                name="email"
                class="email"
                placeholder="Your Email"
                required
              />
            </div>

            <!-- row3 -->
            <div class="pt-5">
              <label for="question" class="text-black"
                >What services are you looking for? *</label
              >
              <textarea
                type="text"
                id="question"
                name="question"
                class="hello"
                placeholder="Look for"
                required
              />
            </div>
            <div class="flex items-start justify-center pt-8">
              <button
                type="submit"
                class="rounded-xl bg-[#091D3E] py-3 px-10 text-white"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-span-4 my-5 md:mt-0">
        <h2 class="py-3 text-xl text-black md:text-2xl">Chat with us</h2>
        <p class="font-medium text-base text-gray-500">
          Speak to our friendly team via chat
        </p>

        <a
          href="https://www.facebook.com/kdcdigitalcambodia"
          target="_blank"
          class="flex flex-row space-x-4 mt-5"
        >
          <img :src="facebook" />
          <p
            class="flex text-black font-[Poppins] font-medium text-lg relative"
          >
            Message us on Facebook
            <span
              class="absolute bottom-0 left-0 bg-[#000000] h-[2px] w-full block md:hidden xl:block"
              style="top: 90%"
            ></span>
          </p>
        </a>
        <a
          href="https://www.linkedin.com/company/kirirom-digital-cambodia/"
          target="_blank"
          class="flex flex-row space-x-4 mt-5"
        >
          <img :src="linkedin" />
          <p
            class="flex text-black font-[Poppins] font-medium text-lg relative"
          >
            Message us on Linkedin
            <span
              class="absolute bottom-0 left-0 bg-[#000000] h-[2px] w-full block md:hidden xl:block"
              style="top: 90%"
            ></span>
          </p>
        </a>

        <h2 class="pt-10 pb-3 text-xl text-black md:text-2xl">Call us</h2>
        <p class="font-medium text-base text-gray-500">
          Call our team Mon-Fri from 8am - 6pm
        </p>
        <div class="flex flex-row space-x-4 mt-5">
          <img :src="phone" />
          <a href="tel:095777844"
            class="flex text-black font-[Poppins] font-medium text-lg relative"
          >
            (855) 095 777 844
            <span
              class="absolute bottom-0 left-0 bg-[#000000] h-[2px] w-full block md:hidden xl:block"
              style="top: 90%"
            ></span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- section4 Map -->
  <section class="h-fit overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.2207256569814!2d104.85697108189777!3d11.561289462137905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951ce9bbfc447%3A0x47ac1cdb64ace078!2svKirirom%20Head%20Office!5e0!3m2!1sen!2skh!4v1714625082073!5m2!1sen!2skh"
      class="w-screen h-96"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
</template>
<script>
import facebook from "../assets/contact/facebook.svg";
import linkedin from "../assets/contact/linkedin.svg";
import phone from "../assets/contact/phone.svg";
import contact1 from "../assets/contact/contact1.svg";
import contact2 from "../assets/contact/contact2.svg";
import contact3 from "../assets/contact/contact3.svg";

export default {
  data() {
    return {
      facebook,
      linkedin,
      phone,
      contact1,
      contact2,
      contact3,
      items: [
        {
          svgPath: contact1,
          title: "Cost Efficiency",
          text: "Cut costs by avoiding expenses related to hiring, training, and maintaining an IT staff.",
        },
        {
          svgPath: contact2,
          title: "Focus on Core Business",
          text: "Allocate your resources to core business activities while we manage your IT complexities.",
        },
        {
          svgPath: contact3,
          title: "Risk Management",
          text: "Reduce IT-related business risks with our proactive security, compliance, and quality strategies.",
        },
      ],
    };
  },
  methods: {
    onSubmitForm() {
      // get data from form
      const name = document.getElementById("name").value;
      const company = document.getElementById("company").value;
      const email = document.getElementById("email").value;
      const question = document.getElementById("question").value;
      window.location = `mailto:info@kirirom-digital.com?subject=${name}&body=${question}`;
    },
    clickedOption(event) {
      let marker = document.querySelector(".marker");
      let e = event.target;
      marker.style.top = e.offsetTop + e.offsetHeight + "px";
      marker.style.left = e.offsetLeft + "px";
      marker.style.width = e.clientWidth + "px";
    },
    clickMenu() {
      this.showOverlay = !this.showOverlay;
      this.startMenu = true;
    },
  },
};
</script>

<style scoped>
input[type="text"],
textarea {
  width: 100%;
  padding: 10px 10px;
  margin-top: 6px;

  /* margin: 10px 6px; */
  border: 1px solid;
  border-radius: 8px;
  border-color: black;
  background-color: white;
}

::placeholder {
  color: "#1D2433";
}

label {
  @apply py-4;
}

input:focus {
  outline: none;
}
</style>
