<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-center mb-4">Our Services</h1>
      <p class="text-xl text-center text-gray-600 mb-12">Experience the best in laundry care with our premium services</p>
      
      <!-- Services Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="service in services" :key="service.id" 
             class="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div class="flex items-center mb-4">
            <div :class="['w-12 h-12 rounded-full flex items-center justify-center', service.bgColor]">
              <i :class="['pi', service.icon, 'text-2xl text-white']"></i>
            </div>
            <h2 class="text-2xl font-semibold ml-4">{{ service.name }}</h2>
          </div>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <ul class="text-sm text-gray-500 mb-4">
            <li v-for="feature in service.features" :key="feature" class="flex items-center mb-2">
              <i class="pi pi-check-circle text-green-500 mr-2"></i>
              {{ feature }}
            </li>
          </ul>
          <button @click="showServiceDetails(service)" 
                  class="w-full bg-black text-white py-2 rounded-lg hover:bg-black transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      <!-- Categories Section -->
      <h2 class="text-4xl font-bold text-center mb-8">Our Cleaning Categories</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="category in categories" :key="category.name" 
             class="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <h2 class="text-2xl font-semibold mb-4 text-black">{{ category.name }}</h2>
          <ul class="text-sm text-gray-600 mb-4">
            <li v-for="item in category.items.slice(0, 5)" :key="item.id" class="mb-2">
              {{ item.name }}
            </li>
            <li v-if="category.items.length > 5" class="italic">
              ...and {{ category.items.length - 5 }} more items
            </li>
          </ul>
          <button @click="showCategoryDetails(category)" 
                  class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
            View All Items
          </button>
        </div>
      </div>
    </div>

    <!-- Service Details Modal -->
    <transition name="modal">
      <div v-if="selectedServiceDetails" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg p-8 max-w-lg w-full">
          <h2 class="text-3xl font-bold mb-4">{{ selectedServiceDetails.name }}</h2>
          <p class="text-gray-600 mb-4">{{ selectedServiceDetails.description }}</p>
          <ul class="mb-4">
            <li v-for="feature in selectedServiceDetails.features" :key="feature" class="flex items-center mb-2">
              <i class="pi pi-check-circle text-green-500 mr-2"></i>
              {{ feature }}
            </li>
          </ul>
          <button @click="selectedServiceDetails = null" class="bg-black text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300">
            Close
          </button>
        </div>
      </div>
    </transition>

    <!-- Category Details Modal -->
    <transition name="modal">
      <div v-if="selectedCategory" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg p-8 max-w-lg w-full">
          <h2 class="text-3xl font-bold mb-4">{{ selectedCategory.name }}</h2>
          <ul class="mb-4">
            <li v-for="item in selectedCategory.items" :key="item.id" class="flex items-center justify-between mb-2">
              <span>{{ item.name }}</span>
              <span class="font-semibold">{{ item.price.toLocaleString() }}/=</span>
            </li>
          </ul>
          <button @click="selectedCategory = null" class="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
            Close
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          id: 1,
          name: 'Wash & Fold',
          description: 'Professional washing and folding services for your everyday laundry needs.',
          icon: 'pi-inbox',
          bgColor: 'bg-blue-500',
          features: ['Gentle wash cycles', 'Eco-friendly detergents', 'Neatly folded clothes'],
          pricePerUnit: 2.50
        },
        {
          id: 2,
          name: 'Dry Cleaning',
          description: 'Expert dry cleaning for your delicate and special garments.',
          icon: 'pi-ticket',
          bgColor: 'bg-green-500',
          features: ['Stain pre-treatment', 'Gentle cleaning process', 'Pressed and ready to wear'],
          pricePerUnit: 6.00
        },
        {
          id: 3,
          name: 'Express Service',
          description: 'Quick turnaround for urgent laundry needs.',
          icon: 'pi-bolt',
          bgColor: 'bg-orange-500',
          features: ['Same-day service', 'Priority processing', 'Rush delivery option'],
          pricePerUnit: 4.00
        }
      ],
      categories: [
        {
          name: 'Gents',
          items: [
            { id: 1, name: 'Suit', price: 14000 },
            { id: 2, name: 'Coat/Jacket', price: 8000 },
            { id: 3, name: 'Over Coat', price: 10000 },
            { id: 4, name: 'Over Jacket', price: 10000 },
            { id: 5, name: 'Trouser', price: 5000 },
            { id: 6, name: 'Shirt/T-Shirt', price: 5000 },
            { id: 7, name: 'Short', price: 3000 },
            { id: 8, name: 'Kanzu', price: 10000 },
            { id: 9, name: 'Trad. Dress', price: 8000 },
            { id: 10, name: 'Tie', price: 1000 },
            { id: 11, name: 'Underwears', price: 4000 },
            { id: 12, name: 'Pair of Socks', price: 3500 },
            { id: 13, name: 'Sweater/Pullover', price: 6000 },
            { id: 14, name: 'Vest', price: 3000 },
            { id: 15, name: 'Leather Jacket', price: 12000 },
          ]
        },
        {
          name: 'Ladies',
          items: [
            { id: 16, name: 'Suit', price: 14000 },
            { id: 17, name: 'Slacks', price: 5000 },
            { id: 18, name: 'Blazers', price: 8000 },
            { id: 19, name: 'Blouse', price: 5000 },
            { id: 20, name: 'Skirts Plain', price: 5000 },
            { id: 21, name: 'Skirts Pleated', price: 6000 },
            { id: 22, name: 'Gown Ordinary', price: 14000 },
            { id: 23, name: 'Evening Gown', price: 25000 },
            { id: 24, name: 'Emb. Gown', price: 35000 },
            { id: 25, name: 'Trad. Dress', price: 8000 },
            { id: 26, name: 'Pants', price: 4000 },
            { id: 27, name: 'Brassiers', price: 4000 },
            { id: 28, name: 'Shawls/Scarfs', price: 3000 },
            { id: 29, name: 'Punjabi Suit', price: 15000 },
            { id: 30, name: 'Wedding Gown', price: 35000 },
          ]
        },
        {
          name: 'House Hold',
          items: [
            { id: 31, name: 'Quilt/Duvet', price: 14000 },
            { id: 32, name: 'Blanket', price: 12000 },
            { id: 33, name: 'Bed Covers', price: 12000 },
            { id: 34, name: 'Bed Sheets (Single)', price: 10000 },
            { id: 35, name: 'Bed Sheets (Double)', price: 12000 },
            { id: 36, name: 'Towels', price: 10000 },
            { id: 37, name: 'Curtain', price: 12000 },
            { id: 38, name: 'Cushion Covers', price: 1000 },
            { id: 39, name: 'Carpet per Soft', price: 1000 },
          ]
        }
      ],
      selectedServiceDetails: null,
      selectedCategory: null,
      selectedService: null,
      quantity: 1
    }
  },
  methods: {
    showServiceDetails(service) {
      this.selectedServiceDetails = service;
    },
    showCategoryDetails(category) {
      this.selectedCategory = category;
    }
  }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>