<template>
  <div class="home-page">
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
            
            <h3 class="text-xl font-semibold text-center mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 text-center">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="reason in reasons" :key="reason.title" class="text-center">
            <div class="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i :class="reason.icon" class="text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ reason.title }}</h3>
            <p class="text-gray-600">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white rounded-lg shadow-lg p-6">
            <p class="text-gray-600 mb-4">"{{ testimonial.quote }}"</p>
            <div class="flex items-center">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4">
              <div>
                <h4 class="font-semibold">{{ testimonial.name }}</h4>
                <p class="text-gray-500">{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsor Logo Carousel -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Our Trusted Partners</h2>
        <div class="sponsor-carousel overflow-hidden">
          <div class="flex animate-scroll">
            <img v-for="(sponsor, index) in sponsors" :key="index" :src="sponsor" :alt="'Sponsor ' + (index + 1)" class="h-16 mx-8">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      services: [
        { title: 'Wash & Fold', description: 'Professional washing and folding service for all your laundry needs.' },
        { title: 'Dry Cleaning',  description: 'Expert dry cleaning for your delicate and special garments.' },
        { title: 'Stain Removals', description: 'Perfect removal of any stain from any laundry.' },
      ],
      reasons: [
        { title: 'Quality Service', icon: 'pi pi-star', description: 'We pride ourselves on delivering top-notch service every time.' },
        { title: 'Fast Turnaround', icon: 'pi pi-clock', description: 'Quick service without compromising on quality.' },
        { title: 'Eco-Friendly', icon: 'pi pi-face-smile', description: 'We use environmentally friendly practices and products.' },
        { title: 'Affordable Pricing', icon: 'pi pi-dollar', description: 'Competitive prices for premium laundry services.' },
      ],
      testimonials: [
        { name: 'John Doe', title: 'Regular Customer', quote: 'KLD has been my go-to laundry service for years. Their quality and consistency are unmatched!', avatar: 'path/to/john-avatar.jpg' },
        { name: 'Jane Smith', title: 'Business Owner', quote: 'As a busy entrepreneur, KLD saves me time and ensures I always look my best.', avatar: 'path/to/jane-avatar.jpg' },
        { name: 'Mike Johnson', title: 'Student', quote: 'Affordable and reliable. KLD makes laundry day stress-free for us students!', avatar: 'path/to/mike-avatar.jpg' },
      ],
      sponsors: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnmusPQLP0IVHWlvjT7pwdgFxg6W1Vuck-w&s',
        'https://c8.alamy.com/comp/2D84KD9/creative-laundry-logo-design-2D84KD9.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgw-MbdQJUc6Y0gKPsGrHdsSwc6P8bm6bXQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUmVa0HYg55Xa4xbA-Fsuzpk39Mih7ioLMg&s',
        'https://images.squarespace-cdn.com/content/v1/6148e10c66294c1574f1d965/1637095992546-JVC8PAN4GV5KTEXNOZI0/Logo-Old.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvpngxkZML3yGd20_fpW_zQ91gXuP1193rw&s',
      ],
    }
  },
}
</script>

<style scoped>
.animate-scroll {
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>