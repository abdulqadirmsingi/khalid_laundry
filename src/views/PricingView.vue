<template>
  <div class="bg-white min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-center mb-4 text-black">
        Our Pricing
      </h1>
      <p class="text-xl text-center text-gray-600 mb-12">
        Comprehensive pricing for all your cleaning needs
      </p>
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg mb-20"> <!-- Adjusted margin-bottom here -->
        <h2 class="text-3xl font-bold text-center mb-8">
          Calculate your items price here..
        </h2>
        <div class="flex flex-wrap -mx-4 mb-4">
          <div class="w-full md:w-1/3 px-4 mb-4">
            <label class="block mb-2">Category:</label>
            <select
              v-model="selectedCategory"
              class="w-full p-2 border rounded"
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
            <label class="block mb-2">Item:</label>
            <select v-model="selectedItem" class="w-full p-2 border rounded">
              <option
                v-for="item in selectedCategory?.items"
                :key="item.id"
                :value="item"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-4">
            <label class="block mb-2">Quantity:</label>
            <input
              v-model.number="quantity"
              type="number"
              min="1"
              class="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div class="flex justify-center mb-4">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="isExpress"
              class="form-checkbox h-5 w-5 text-black"
            />
            <span class="ml-2">Express Service</span>
          </label>
        </div>
        <div class="text-center text-2xl font-bold mt-4">
          Estimated Cost: {{ calculateCost.toLocaleString() }}/=
        </div>
      </div>

      <!-- Pricing Tables -->
      <div v-for="(category, index) in categories" :key="index" class="mb-12">
        <h2 class="text-3xl font-bold mb-4">{{ category.name }}</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr class="bg-black text-white">
                <th class="p-3 text-left">Item</th>
                <th class="p-3 text-center">Regular Price</th>
                <th class="p-3 text-center">Express Price</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in category.items"
                :key="item.id"
                class="border-b"
              >
                <td class="p-3 font-semibold">{{ item.name }}</td>
                <td class="p-3 text-center">
                  {{ item.price.toLocaleString() }}/=
                </td>
                <td class="p-3 text-center">
                  {{ (item.price * 2).toLocaleString() }}/=
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pricing",
  data() {
    return {
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
    };
  },
  computed: {
    calculateCost() {
      if (!this.selectedItem || this.quantity <= 0) return 0;
      let basePrice = this.selectedItem.price * this.quantity;
      return this.isExpress ? basePrice * 2 : basePrice;
    },
  },
};
</script>
