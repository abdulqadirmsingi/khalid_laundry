<template>
  <div class="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
    <h1 class="text-4xl font-bold text-center my-8 text-gray-800">Book a Service</h1>
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <form @submit.prevent="submitBooking" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="relative">
            <select
              v-model="booking.service"
              class="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black outline-none transition-colors duration-300 bg-transparent"
              required
            >
              <option value="">Select a service</option>
              <option value="wash_fold">Wash & Fold</option>
              <option value="dry_cleaning">Dry Cleaning</option>
              <option value="alterations">Stain removal</option>
            </select>
            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300">
              Service
            </label>
          </div>
          <div class="relative">
            <input
              type="date"
              v-model="booking.date"
              class="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black outline-none transition-colors duration-300"
              required
            />
            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300">
              Date
            </label>
          </div>
          <div class="relative">
            <input
              type="time"
              v-model="booking.time"
              class="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black outline-none transition-colors duration-300"
              required
            />
            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300">
              Time
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              v-model="booking.name"
              class="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black outline-none transition-colors duration-300"
              required
            />
            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300">
              Name
            </label>
          </div>
          <div class="relative">
            <input
              type="email"
              v-model="booking.email"
              class="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black outline-none transition-colors duration-300"
              required
            />
            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300">
              Email
            </label>
          </div>
          <div class="relative">
            <input
              type="tel"
              v-model="booking.phone"
              class="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black outline-none transition-colors duration-300"
              required
            />
            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300">
              Phone
            </label>
          </div>
        </div>
        <div class="relative">
          <textarea
            v-model="booking.notes"
            rows="4"
            class="w-full px-3 py-2 border-2 border-gray-300 focus:border-black outline-none transition-colors duration-300 rounded-md"
          ></textarea>
          <label class="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all duration-300 bg-white px-1">
            Special Instructions
          </label>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
    <div v-if="showConfirmation" class="mt-6 max-w-2xl mx-auto">
      <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded" role="alert">
        <p class="font-bold">Booking Confirmed</p>
        <p>Your service has been booked successfully. We'll contact you shortly with more details.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingForm',
  data() {
    return {
      booking: {
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: ''
      },
      showConfirmation: false
    }
  },
  methods: {
    submitBooking() {
      console.log('Booking submitted:', this.booking)
      this.showConfirmation = true
      this.resetForm()
      setTimeout(() => {
        this.showConfirmation = false
      }, 5000)
    },
    resetForm() {
      this.booking = {
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: ''
      }
    }
  }
}
</script>

