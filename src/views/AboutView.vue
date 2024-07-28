<!-- About.vue -->
<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-center mb-4">About Khalid Laundry</h1>
      <p class="text-xl text-center text-gray-600 mb-12">Revolutionizing the laundry experience since 2010</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="bg-white p-8 rounded-lg shadow-xl">
          <h2 class="text-3xl font-semibold mb-4">Our Story</h2>
          <p class="text-gray-600 mb-4">
            Khalid Laundry (KLD) was founded with a simple yet powerful vision: to transform the way people think about and do their laundry. What started as a small family-owned business has grown into a trusted name in the industry, serving thousands of satisfied customers.
          </p>
          <p class="text-gray-600">
            Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our customers' needs. Today, we're proud to be at the forefront of the laundry service industry, setting new standards for excellence and convenience.
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-xl">
          <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
          <p class="text-gray-600 mb-4">
            At Khalid Laundry, our mission is to provide top-notch laundry services while maintaining eco-friendly practices and ensuring customer satisfaction. We strive to:
          </p>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Deliver exceptional cleaning results consistently</li>
            <li>Embrace sustainable practices to minimize our environmental impact</li>
            <li>Offer convenient solutions that save our customers time and effort</li>
            <li>Continuously innovate and improve our services</li>
          </ul>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h2 class="text-3xl font-semibold mb-8 text-center">Why Choose Khalid Laundry?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="reason in reasons" :key="reason.title" class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i :class="reason.icon" class="text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ reason.title }}</h3>
            <p class="text-gray-600">{{ reason.description }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow-xl">
        <h2 class="text-3xl font-semibold mb-8 text-center">Our Process</h2>
        <div class="flex flex-wrap justify-center">
          <div v-for="(step, index) in process" :key="step.title" class="flex items-center mb-8 last:mb-0">
            <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
            <div v-if="index < process.length - 1" class="hidden md:block mx-8">
              <i class="pi pi-arrow-right text-3xl text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      reasons: [
        { title: 'Experience', icon: 'pi pi-star', description: 'Years of expertise in the laundry industry' },
        { title: 'Eco-Friendly', icon: 'pi pi-globe', description: 'Sustainable practices and green cleaning solutions' },
        { title: 'Convenience', icon: 'pi pi-clock', description: 'Flexible pickup and delivery options' },
        { title: 'Quality', icon: 'pi pi-check-circle', description: 'Uncompromising attention to detail' },
      ],
      process: [
        { title: 'Schedule', description: 'Book your laundry pickup online or via our app' },
        { title: 'Collect', description: 'We pick up your laundry at your preferred time' },
        { title: 'Clean', description: 'Your clothes are expertly cleaned and cared for' },
        { title: 'Deliver', description: 'We return your fresh, clean laundry to your doorstep' },
      ]
    }
  }
}
</script>