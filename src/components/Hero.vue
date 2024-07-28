<template>
  <section class="relative bg-white text-black overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img 
        src="https://3ddcb128.rocketcdn.me/wp-content/uploads/2022/12/Man-with-basket-of-clean-laundry.jpg" 
        alt="Clean, folded laundry" 
        class="object-cover w-full h-full"
      >
      <div class="absolute inset-0 bg-white bg-opacity-75"></div>
    </div>
    <div class="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Laundry Made 
          <span class="relative inline-block">
            Easy
            <svg class="absolute -bottom-2 w-full" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 15 Q100 0 200 15" stroke="black" stroke-width="4" fill="none"/>
            </svg>
          </span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Experience the convenience of fast, reliable, and eco-friendly laundry service. Let us take care of your clothes while you focus on what matters most.</p>
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

</script>

<style scoped>
/* Add any additional styles here */
</style>