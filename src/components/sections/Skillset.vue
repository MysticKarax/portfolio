<template>
  <section id="skillset" class="py-16 md:py-20 lg:py-24 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div
        class="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-accent-primary blur-3xl"
      ></div>
      <div
        class="absolute bottom-[15%] right-[5%] w-64 h-64 rounded-full bg-accent-secondary blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section title -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll" data-animation="fade-up">
          My Skillset
        </h2>
        <div
          class="w-24 h-1 bg-accent-primary mx-auto rounded-full mb-6 animate-on-scroll"
          data-animation="scale-x"
          data-delay="200"
        ></div>
        <p
          class="text-lg text-accent-tertiary animate-on-scroll"
          data-animation="fade-up"
          data-delay="300"
        >
          A web developer with passion for solving complex problems through elegant interfaces
        </p>
      </div>

      <!-- Skills grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Web Design Skill -->
        <div
          class="skill-card group bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll"
          data-animation="fade-up"
          data-delay="100"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div
              class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300"
            >
              <PhotoIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Title -->
          <h3
            class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300"
          >
            Web Design
          </h3>

          <!-- Description -->
          <p
            class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300"
          >
            Creating visual content that communicates messages effectively
          </p>

          <!-- Skill details - Hidden and shown on hover -->
          <div
            class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-100 max-h-96 overflow-hidden transition-all duration-500"
          >
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Brand Identity</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Visual Communication</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Digital Illustration</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- User Interface Skill -->
        <div
          class="skill-card group bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll"
          data-animation="fade-up"
          data-delay="300"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div
              class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300"
            >
              <DeviceTabletIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Title -->
          <h3
            class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300"
          >
            User Interface
          </h3>

          <!-- Description -->
          <p
            class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300"
          >
            Building intuitive interfaces for digital products
          </p>

          <!-- Skill details - Hidden and shown on hover -->
          <div
            class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-100 max-h-96 overflow-hidden transition-all duration-500"
          >
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Responsive Web Design</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Mobile App Interface</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Design Systems</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- User Experience Skill -->
        <div
          class="skill-card group bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll md:col-span-2 lg:col-span-1"
          data-animation="fade-up"
          data-delay="500"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div
              class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300"
            >
              <UserGroupIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Title -->
          <h3
            class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300"
          >
            User Experience
          </h3>

          <!-- Description -->
          <p
            class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300"
          >
            Designing seamless and enjoyable user journeys
          </p>

          <!-- Skill details - Hidden and shown on hover -->
          <div
            class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-100 max-h-96 overflow-hidden transition-all duration-500"
          >
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>User Research</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Usability Testing</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Information Architecture</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { CheckIcon, PhotoIcon, DeviceTabletIcon, UserGroupIcon } from '@heroicons/vue/24/outline';

// Animation on scroll functionality
onMounted(() => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.dataset.animation || 'fade-up';
          const delay = el.dataset.delay || 0;

          setTimeout(() => {
            el.classList.add(`animate-${animation}`);
            el.style.opacity = 1;
          }, delay);

          // Unobserve after animation
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 },
  );

  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    observer.observe(el);
  });
});
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
}

.animate-fade-up {
  animation: fadeUp 0.7s ease-out forwards;
}

.animate-scale-x {
  animation: scaleX 0.7s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleX {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

.leading-relaxed {
  line-height: 1.6;
}
</style>
