<template>
  <div class="container mx-auto px-4 bg-white text-black">
    <h1 class="text-4xl font-bold text-center my-8">Contact Us</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        class="bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      >
        <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700 mb-2"
              >Message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-black text-white px-4 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition duration-300"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
        <div
          v-if="showAlert"
          class="mt-4 bg-green-100 border-green-400 text-green-700 p-4 rounded"
        >
          Message sent successfully!
        </div>
      </div>
      <div
        class="bg-black text-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      >
        <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
        <ul class="space-y-4">
          <li class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-400 mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Kariakoo, Magomeni, Mabibo, Upanga</span>
          </li>
          <li class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-400 mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            <span>+255 000 000 000</span>
          </li>
          <li class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-400 mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              ></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>info@khalidlaundry.com</span>
          </li>
          <li class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-400 mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm</span>
          </li>
        </ul>
        <div class="mt-8">
          <h3 class="text-xl font-semibold mb-4">Find Us</h3>
          <div class="w-full h-64 bg-gray-300 rounded-md overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63386.49821798681!2d39.23447190643905!3d-6.811613627812717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ba1b9aa5cbd%3A0x55b2ea08150c4dbf!2sKhalid%20Laundry%20%26%20Dry%20Cleaners!5e0!3m2!1sen!2stz!4v1722192949128!5m2!1sen!2stz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      showAlert: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);

      this.form = { name: "", email: "", message: "" };

      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
