<template>
  <nav class="bg-white text-black shadow-lg fixed w-full z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center group">
            <div class="flex items-center space-x-2">
              <div
                class="flex flex-col space-y-1 "
              >
                <div class="w-5 h-0.5 bg-black"></div>
                <div class="w-5 h-0.5 bg-black"></div>
                <div class="w-5 h-0.5 bg-black"></div>
              </div>
              <span
                class="text-2xl font-bold tracking-wider  "
                >KLD</span
              >
              <div
                class="flex flex-col space-y-1   duration-300"
              >
                <div class="w-5 h-0.5 bg-black"></div>
                <div class="w-5 h-0.5 bg-black"></div>
                <div class="w-5 h-0.5 bg-black"></div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <div
            v-for="item in menuItems"
            :key="item.path"
            class="relative group"
          >
            <router-link
              :to="item.path"
              class="text-black hover:text-gray-600 transition duration-300 py-2"
            >
              {{ item.name }}
            </router-link>
            <div
              v-if="item.submenu"
              class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
            >
              <div class="py-1">
                <router-link
                  v-for="subItem in item.submenu"
                  :key="subItem.path"
                  :to="subItem.path"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {{ subItem.name }}
                </router-link>
              </div>
            </div>
          </div>

          <router-link
            to="/booking"
            class="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Book Now
          </router-link>
        </div>
        <div class="md:hidden">
          <button
            @click.stop="toggleMobileMenu"
            class="text-black focus:outline-none z-50"
          >
            <i class="pi pi-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <div v-for="item in menuItems" :key="item.path" class="relative">
            <router-link
              :to="item.path"
              class="block px-3 py-2 text-black hover:bg-gray-100 transition duration-300"
              @click="toggleMobileMenu"
            >
              {{ item.name }}
            </router-link>
            <div v-if="item.submenu" class="pl-4">
              <router-link
                v-for="subItem in item.submenu"
                :key="subItem.path"
                :to="subItem.path"
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="toggleMobileMenu"
              >
                {{ subItem.name }}
              </router-link>
            </div>
          </div>

          <router-link
            to="/booking"
            class="block px-3 py-2 text-center bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
            @click="toggleMobileMenu"
          >
            Book Now
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      mobileMenuOpen: false,
      menuItems: [
        { name: "Home", path: "/" },
        {
          name: "Services",
          path: "/services",
          submenu: [
            { name: "Wash & Fold", path: "/services" },
            { name: "Dry Cleaning", path: "/services" },
            { name: "Stain removal", path: "/services" },
          ],
        },
        { name: "Pricing", path: "/pricing" },
        
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      console.log("Mobile menu toggled:", this.mobileMenuOpen); // For debugging
    },
  },
};
</script>

<style scoped>
nav {
  z-index: 1000;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
