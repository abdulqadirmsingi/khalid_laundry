<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-center mb-4">Our Services</h1>
      <p class="text-xl text-center text-gray-600 mb-12">Experience the best in laundry care with our premium services</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">Service Comparison</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr class="bg-gray-200">
                <th class="p-3 text-left">Service</th>
                <th v-for="service in services" :key="service.id" class="p-3 text-center">{{ service.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in comparisonTable" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : ''">
                <td class="p-3 font-semibold">{{ row.feature }}</td>
                <td v-for="service in services" :key="service.id" class="p-3 text-center">
                  <i :class="row[service.id] ? 'pi pi-check-circle text-green-500' : 'pi pi-times-circle text-red-500'"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      <!-- Interactive Service Calculator -->
      <!-- <div class="mt-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center mb-8">Service Calculator</h2>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-4">
            <label class="block mb-2">Select Service:</label>
            <select v-model="selectedService" class="w-full p-2 border rounded">
              <option v-for="service in services" :key="service.id" :value="service">{{ service.name }}</option>
            </select>
          </div>
          <div class="w-full md:w-1/2 px-4 mb-4">
            <label class="block mb-2">Quantity (lbs or items):</label>
            <input v-model.number="quantity" type="number" class="w-full p-2 border rounded">
          </div>
        </div>
        <div class="text-center text-2xl font-bold mt-4">
          Estimated Cost: ${{ calculateCost.toFixed(2) }}
        </div>
      </div>
     -->

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
          id: 4,
          name: 'Pickup & Delivery',
          description: 'Convenient pickup and delivery services to save you time and effort.',
          icon: 'pi-car',
          bgColor: 'bg-red-500',
          features: ['Scheduled pickups', 'Real-time tracking', 'Contactless delivery'],
          pricePerUnit: 5.00
        },
        {
          id: 5,
          name: 'Stain Removal',
          description: 'Specialized stain removal techniques for tough and stubborn stains.',
          icon: 'pi-eraser',
          bgColor: 'bg-yellow-500',
          features: ['Advanced stain treatments', 'Expert technicians', 'Satisfaction guarantee'],
          pricePerUnit: 10.00
        },
        {
          id: 6,
          name: 'Express Service',
          description: 'Quick turnaround for urgent laundry needs.',
          icon: 'pi-bolt',
          bgColor: 'bg-orange-500',
          features: ['Same-day service', 'Priority processing', 'Rush delivery option'],
          pricePerUnit: 4.00
        }
      ],
      comparisonTable: [
        { feature: 'Next-day service', 1: true, 2: true, 3: false, 4: true, 5: true, 6: true },
        { feature: 'Eco-friendly', 1: true, 2: true, 3: true, 4: true, 5: false, 6: true },
        { feature: 'Stain treatment', 1: false, 2: true, 3: false, 4: false, 5: true, 6: false },
        { feature: 'Home delivery', 1: true, 2: true, 3: true, 4: true, 5: true, 6: true },
        { feature: 'Satisfaction guarantee', 1: true, 2: true, 3: true, 4: true, 5: true, 6: true },
      ],
      selectedServiceDetails: null,
      selectedService: null,
      quantity: 1
    }
  },
  computed: {
    calculateCost() {
      if (!this.selectedService || !this.quantity) return 0;
      return this.selectedService.pricePerUnit * this.quantity;
    }
  },
  methods: {
    showServiceDetails(service) {
      this.selectedServiceDetails = service;
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