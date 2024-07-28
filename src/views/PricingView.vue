<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-center mb-4">Our Pricing Plans</h1>
      <p class="text-xl text-center text-gray-600 mb-12">Choose the perfect plan for your laundry needs</p>
      
      <div class="flex flex-wrap justify-center gap-8">
        <div v-for="plan in plans" :key="plan.id" 
             class="bg-white rounded-lg shadow-xl overflow-hidden w-full md:w-80 transform transition duration-500 hover:scale-105">
          <div class="p-8">
            <h2 class="text-2xl font-semibold mb-2">{{ plan.name }}</h2>
            <div class="text-5xl font-bold text-blue-600 mb-4">Tsh {{ plan.price }}<span class="text-lg text-gray-500"></span></div>
            <ul class="mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center mb-2">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div class="px-8 pb-8">
            <button @click="selectPlan(plan)" 
                    class="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-black transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
      </div>

      <div class="mt-16 bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Custom Pricing Calculator</h2>
        <div class="flex flex-wrap -mx-4 mb-4">
          <div class="w-full md:w-1/2 px-4 mb-4">
            <label class="block mb-2">Laundry Weight (lbs):</label>
            <input v-model.number="customWeight" type="number" class="w-full p-2 border rounded">
          </div>
          <div class="w-full md:w-1/2 px-4 mb-4">
            <label class="block mb-2">Additional Services:</label>
            <div v-for="service in additionalServices" :key="service.name">
              <label class="inline-flex items-center">
                <input type="checkbox" v-model="service.selected" class="form-checkbox">
                <span class="ml-2">{{ service.name }} (+Tsh {{ service.price }})</span>
              </label>
            </div>
          </div>
        </div>
        <div class="text-center text-2xl font-bold">
          Estimated Cost: Tsh {{ calculateCustomPrice.toFixed(2) }}
        </div>
      </div>
    </div>

    <transition name="modal">
      <div v-if="selectedPlan" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg p-8 max-w-md w-full">
          <h2 class="text-3xl font-bold mb-4">Confirm Your Plan</h2>
          <p class="mb-4">You've selected the <strong>{{ selectedPlan.name }}</strong> plan at Tsh {{ selectedPlan.price }}/month.</p>
          <p class="mb-6">Would you like to proceed with this selection?</p>
          <div class="flex justify-end space-x-4">
            <button @click="selectedPlan = null" class="px-4 py-2 border rounded">Cancel</button>
            <button @click="confirmPlan" class="px-4 py-2 bg-black text-white rounded">Confirm</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  data() {
    return {
      plans: [
        {
          id: 1,
          name: 'Basic',
          price: 30000,
          features: [
            'Up to 10 lbs of laundry',
            'Wash & Fold service',
            'Standard 3-day turnaround'
          ]
        },
        {
          id: 2,
          name: 'Premium',
          price: 50000,
          features: [
            'Up to 20 lbs of laundry',
            'Wash, Fold & Iron service',
            '2-day turnaround',
            'Free pickup and delivery'
          ]
        },
        {
          id: 3,
          name: 'Ultimate',
          price: 100000,
          features: [
            'Unlimited laundry',
            'All services included',
            'Same-day turnaround',
            'Priority pickup and delivery',
            'Stain treatment included'
          ]
        }
      ],
      selectedPlan: null,
      customWeight: 0,
      additionalServices: [
        { name: 'Express Service', price: 5000, selected: false },
        { name: 'Eco-Friendly Detergent', price: 3000, selected: false },
        { name: 'Stain Treatment', price: 8000, selected: false },
      ]
    }
  },
  computed: {
    calculateCustomPrice() {
      let basePrice = this.customWeight * 2.5; // 
      let additionalCost = this.additionalServices.reduce((total, service) => {
        return total + (service.selected ? service.price : 0);
      }, 0);
      return basePrice + additionalCost;
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
    confirmPlan() {
      console.log('Plan confirmed:', this.selectedPlan);
      this.selectedPlan = null;
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