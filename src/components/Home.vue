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
        <h2 class="text-4xl font-bold text-center mb-12">We have Worked with..</h2>
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
        { name: 'Maya zamzam', title: 'Regular Customer', quote: 'Its a legendary dry cleaner with track record more than 20yrs in laundry business' },
        { name: 'Ruwaichi', title: 'Business Owner', quote: 'I like everything, Amazing and unforgettable experience good quality and caring like a king. Salute 🤝 …' },
        { name: 'Abeid Saleem', title: 'Student', quote: 'I would definitely recommend Khalid Laundry to anyone who needs cleaning services since they are reliable and responsible for anything that happens to clients goods. KUDOS KLD for everything.', },
        { name: 'Azzan Shahid', title: 'Business Owner', quote: 'No waiting queues . Fast and quick service' },
        { name: 'Ruwaichi', title: 'Regular customer', quote: 'The best drycleaners in town with very exceptional service. Keep it up' },
        { name: 'Saidi Bakari', title: 'Business Owner', quote: 'Exceptional service, just as good as I receive in the States' },
      ],
      sponsors: [
        'https://bvgh.org/wp-content/uploads/2024/02/mnh.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3OD7nIcTVq7ZM4sOjCraeqTltcvNGhuWug&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKSdeImqEy5awsi7FTkQOk9UvxydwDAGyVA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLBusMaEALRNYzVa9c8Ap1fDiOU_3ESMMqg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnmusPQLP0IVHWlvjT7pwdgFxg6W1Vuck-w&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgw-MbdQJUc6Y0gKPsGrHdsSwc6P8bm6bXQ&s',
      ],
    }
  },
}
</script>

<style scoped>
.animate-scroll {
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>