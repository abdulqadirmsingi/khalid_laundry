<template>
  <section class="hero relative bg-white text-black overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img 
        src="@/assets/kld3.png" 
        alt="Clean, folded laundry" 
        class="object-cover w-full h-full"
      >
      <div class="absolute inset-0 bg-white bg-opacity-75"></div>
    </div>
    <div class="container mx-auto px-4 py-16 md:py-24 relative z-10 flex items-center justify-center h-full">
      <div class="max-w-3xl text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Laundry Made 
          <span class="relative inline-block">
            Easy
            <svg class="absolute -bottom-2 w-full" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 15 Q100 0 200 15" stroke="black" stroke-width="4" fill="none"/>
            </svg>
          </span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Let us take care of your clothes while you focus on what matters most.</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <router-link to="/booking" class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 text-lg font-semibold">
            Book Now
          </router-link>
          <router-link to="/services" class="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-lg font-semibold">
            Our Services
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero img {
  object-fit: cover; /* Ensure the image covers the section */
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .hero img {
    object-position: center; 
  }
}

@media (min-width: 769px) {
  .hero img {
    object-position: top; 
  }
}
</style>
