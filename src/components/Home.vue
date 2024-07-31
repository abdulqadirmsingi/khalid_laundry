<template>
  <div class="bg-white min-h-screen py-12">
    <section class="container mx-auto px-4 py-15">
      <div class="bg-gray-100 p-9 rounded-lg shadow-lg ">
        <h2 class="text-3xl font-bold text-center mb-8 text-black">
          KLD Price Calculator
        </h2>
        <div class="mb-6">
          <div class="flex flex-wrap -mx-4 mb-4">
            <div class="w-full md:w-1/3 px-4 mb-4">
              <label class="block mb-2 font-semibold text-gray-700">Category:</label>
              <select
                v-model="selectedCategory"
                class="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                @change="selectedItem = null"
              >
                
                <option
                  v-for="category in categories"
                  :key="category.name"
                  :value="category"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-4">
              <label class="block mb-2 font-semibold text-gray-700">Item:</label>
              <select
                v-model="selectedItem"
                class="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select an item</option>
                <option
                  v-for="item in selectedCategory?.items"
                  :key="item.id"
                  :value="item"
                >
                  {{ item.name }} - {{ item.price.toLocaleString() }}/=
                </option>
              </select>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-4">
              <label class="block mb-2 font-semibold text-gray-700">Quantity:</label>
              <input
                v-model.number="quantity"
                type="number"
                min="1"
                class="w-full p-2 border rounded-md focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
          <div class="flex justify-center mb-4">
            <button
              @click="addItem"
              class="bg-black text-white px-4 py-2 rounded-md hover:bg-black transition duration-300"
              :disabled="!canAddItem"
            >
              Add Item
            </button>
          </div>
        </div>
        
        <div v-if="selectedItems.length > 0" class="mb-6">
          <h3 class="text-xl font-semibold mb-4">Selected Items:</h3>
          <div class="bg-gray-100 p-4 rounded-md">
            <div v-for="(item, index) in selectedItems" :key="index" class="flex justify-between items-center mb-2 p-2 bg-white rounded shadow">
              <span>{{ item.name }} (x{{ item.quantity }})</span>
              <div>
                <span class="mr-4">{{ (item.price * item.quantity).toLocaleString() }}/=</span>
                <button @click="removeItem(index)" class="text-red-600 hover:text-red-800">
                  <i class="pi pi-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex justify-center mb-4">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="isExpress"
              class="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span class="ml-2 text-gray-700">Express Service (2x price)</span>
          </label>
        </div>
        <div class="text-center text-3xl font-bold mt-4 text-black">
          Total Cost: {{ calculateTotalCost.toLocaleString() }}/=
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-black">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="reason in reasons"
            :key="reason.title"
            class="text-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div
              class="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
            >
              <i :class="reason.icon" class="text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-black">{{ reason.title }}</h3>
            <p class="text-gray-600">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-indigo-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-black">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="testimonial in visibleTestimonials" :key="testimonial.name" class="testimonial-card">
            <div class="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col relative transform hover:scale-105 transition duration-300">
              <div class="flex-grow">
                <p class="text-gray-600 mb-4 italic">"{{ testimonial.quote }}"</p>
              </div>
              <div class="mt-4">
                <h4 class="font-semibold text-black">{{ testimonial.name }}</h4>
                <p class="text-gray-500 text-sm">{{ testimonial.title }}</p>
              </div>
              <div class="mt-4 flex items-center">
                <div class="text-yellow-400 flex">
                  <i v-for="star in 5" :key="star" class="pi pi-star-fill text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsor Logo Carousel -->
   <section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12 text-black">
      Partnership and Collaboration
    </h2>
    <div class="sponsor-carousel overflow-hidden">
      <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
        <img
          v-for="(sponsor, index) in sponsors"
          :key="index"
          :src="sponsor"
          :alt="'Sponsor ' + (index + 1)"
          class="h-16 max-w-xs mx-4 transition duration-300"
        />
      </div>
    </div>
  </div>
</section>


  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      
      reasons: [
        {
          title: "Quality Service",
          icon: "pi pi-star",
          description:
            "We pride ourselves on delivering top-notch service every time.",
        },
        {
          title: "Fast Turnaround",
          icon: "pi pi-clock",
          description: "Quick service without compromising on quality.",
        },
        {
          title: "Eco-Friendly",
          icon: "pi pi-face-smile",
          description:
            "We use environmentally friendly practices and products.",
        },
        {
          title: "Affordable Pricing",
          icon: "pi pi-dollar",
          description: "Competitive prices for premium laundry services.",
        },
      ],
      testimonials: [
        {
          name: "Maya zamzam",
          title: "Regular Customer",
          quote:
            "Its a legendary dry cleaner with track record more than 20yrs in laundry business",
        },
        {
          name: "Gertrude mpaka",
          title: "Regular Customer",
          quote:
            "My best Dry Cleaner in Dsm.I have been with them for more than 20 years. 😀 …",
        },
        {
          name: "Abeid Saleem",
          title: "Customer",
          quote:
            "I would definitely recommend Khalid Laundry to anyone who needs cleaning services since they are reliable and responsible for anything that happens to clients goods. KUDOS KLD for everything.",
        },
        {
          name: "Azzan Shahid",
          title: "Business Owner",
          quote: "No waiting queues . Fast and quick service",
        },
        {
          name: "Ruwaichi",
          title: "Regular customer",
          quote:
            "The best drycleaners in town with very exceptional service. Keep it up",
        },
        {
          name: "Saidi Bakari",
          title: "Business Owner",
          quote: "Exceptional service, just as good as I receive in the States",
        },
      ],
      sponsors: [
        "https://bvgh.org/wp-content/uploads/2024/02/mnh.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3OD7nIcTVq7ZM4sOjCraeqTltcvNGhuWug&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKSdeImqEy5awsi7FTkQOk9UvxydwDAGyVA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLBusMaEALRNYzVa9c8Ap1fDiOU_3ESMMqg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnmusPQLP0IVHWlvjT7pwdgFxg6W1Vuck-w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgw-MbdQJUc6Y0gKPsGrHdsSwc6P8bm6bXQ&s",
      ],
      currentPage: 0,
      testimonialsPerPage: 6,
       categories: [
        {
          name: "Gents",
          items: [
            { id: 1, name: "Suit", price: 14000 },
            { id: 2, name: "Coat/Jacket", price: 8000 },
            { id: 3, name: "Over Coat", price: 10000 },
            { id: 4, name: "Over Jacket", price: 10000 },
            { id: 5, name: "Trouser", price: 5000 },
            { id: 6, name: "Suit (2nd listing)", price: 14000 },
            { id: 7, name: "Shirt/T-Shirt", price: 5000 },
            { id: 8, name: "Short", price: 3000 },
            { id: 9, name: "Kanzu", price: 10000 },
            { id: 10, name: "Trad. Dress", price: 8000 },
            { id: 11, name: "Tie", price: 1000 },
            { id: 12, name: "Underwears", price: 4000 },
            { id: 13, name: "Pair of Socks", price: 3500 },
            { id: 14, name: "Sweater/Pullover", price: 6000 },
            { id: 15, name: "Vest", price: 3000 },
            { id: 16, name: "Leather Jacket", price: 12000 },
          ],
        },
        {
          name: "Ladies",
          items: [
            { id: 17, name: "Suit", price: 14000 },
            { id: 18, name: "Slacks", price: 5000 },
            { id: 19, name: "Blazers", price: 8000 },
            { id: 20, name: "Blouse", price: 5000 },
            { id: 21, name: "Skirts Plain", price: 5000 },
            { id: 22, name: "Skirts Pleated", price: 6000 },
            { id: 23, name: "Gown Ordinary", price: 14000 },
            { id: 24, name: "Evening Gown", price: 25000 },
            { id: 25, name: "Emb. Gown", price: 35000 },
            { id: 26, name: "Trad. Dress", price: 8000 },
            { id: 27, name: "Pants", price: 4000 },
            { id: 28, name: "Brassiers", price: 4000 },
            { id: 29, name: "Shawls/Scarfs", price: 3000 },
            { id: 30, name: "Punjabi Suit", price: 15000 },
            { id: 31, name: "Wedding Gown", price: 35000 },
          ],
        },
        {
          name: "House Hold",
          items: [
            { id: 32, name: "Quilt/Duvet", price: 14000 },
            { id: 33, name: "Blanket", price: 12000 },
            { id: 34, name: "Bed Covers", price: 12000 },
            { id: 35, name: "Bed Sheets (Single)", price: 10000 },
            { id: 36, name: "Bed Sheets (Double)", price: 12000 },
            { id: 37, name: "Towels", price: 10000 },
            { id: 38, name: "Curtain", price: 12000 },
            { id: 39, name: "Cushion Covers", price: 1000 },
            { id: 40, name: "Carpet per Soft", price: 1000 },
          ],
        },
      ],
      selectedCategory: null,
      selectedItem: null,
      quantity: 1,
      isExpress: false,
      selectedItems: [],
    };
  },
  computed: {
    visibleTestimonials() {
      return this.testimonials;
    },
    calculateTotalCost() {
      let totalCost = this.selectedItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      return this.isExpress ? totalCost * 2 : totalCost;
    },
    canAddItem() {
      return this.selectedItem && this.quantity > 0;
    },
  },
  methods: {
    addItem() {
      if (this.canAddItem) {
        const newItem = {
          ...this.selectedItem,
          quantity: this.quantity,
        };
        this.selectedItems.push(newItem);
        this.resetForm();
      }
    },
    removeItem(index) {
      this.selectedItems.splice(index, 1);
    },
    resetForm() {
      this.selectedItem = null;
      this.quantity = 1;
    },
  },
};
  
 

</script>

<style scoped>







</style>
