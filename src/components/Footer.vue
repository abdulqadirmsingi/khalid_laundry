<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Khalid Laundry</h3>
          <div class="flex items-center space-x-2 mb-4">
            <div class="flex flex-col space-y-1">
              <div class="w-4 h-0.5 bg-white"></div>
              <div class="w-4 h-0.5 bg-white"></div>
              <div class="w-4 h-0.5 bg-white"></div>
            </div>
            <span class="text-2xl font-bold">KLD</span>
            <div class="flex flex-col space-y-1">
              <div class="w-4 h-0.5 bg-white"></div>
              <div class="w-4 h-0.5 bg-white"></div>
              <div class="w-4 h-0.5 bg-white"></div>
            </div>
          </div>
          <p class="text-sm">Your trusted laundry partner</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.path">
              <router-link :to="item.path" class="hover:text-blue-300 transition duration-300">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="pi pi-map-marker mr-2"></i>
              <span>Upanga, Kariakoo, Magomeni, Mabibo</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-phone mr-2"></i>
              <span>+255 000 000 000</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-envelope mr-2"></i>
              <span>info@khalidlaundry.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-blue-300 transition duration-300">
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-blue-300 transition duration-300">
              <i class="pi pi-twitter text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-blue-300 transition duration-300">
              <i class="pi pi-instagram text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-blue-300 transition duration-300">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Khalid Laundry. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
        { name: 'Book Now', path: '/booking' },
      ]
    }
  }
}
</script>