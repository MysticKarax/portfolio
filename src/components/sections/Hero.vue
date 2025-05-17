<template>
  <section
    id="home"
    class="py-16 md:py-24 lg:py-32 min-h-[90vh] flex items-center relative overflow-hidden"
  >
    <!-- Background elements (optional) -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div
        class="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-accent-primary blur-3xl"
      ></div>
      <div
        class="absolute bottom-[10%] left-[15%] w-80 h-80 rounded-full bg-accent-secondary blur-3xl"
      ></div>
    </div>

    <!-- Main content container -->
    <div class="container mx-auto px-4 z-10 relative">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <!-- Left column: Text content -->
        <div class="w-full lg:w-1/2 animate-on-scroll" data-animation="fade-up" data-delay="200">
          <!-- Subtitle / Pre-title -->
          <div
            class="inline-block mb-3 px-4 py-1 rounded-full bg-accent-primary/10 text-accent-primary font-medium text-sm md:text-base tracking-wide animate-on-scroll"
            data-animation="fade-up"
            data-delay="400"
          >
            Web Developer
          </div>

          <!-- Main Title -->
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight tracking-tight animate-on-scroll"
            data-animation="fade-up"
            data-delay="600"
          >
            Jordan Garcia
          </h1>

          <!-- Description -->
          <p
            class="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-8 animate-on-scroll"
            data-animation="fade-up"
            data-delay="800"
          >
            Programming is more than just code — it's a tool to simplify life, improve human
            connections, and explore the deeper logic of how things work.
          </p>

          <!-- CTA section -->
          <div
            class="flex flex-wrap gap-4 mt-8 animate-on-scroll"
            data-animation="fade-up"
            data-delay="1000"
          >
            <a
              href="#projects"
              class="px-6 py-3 bg-accent-primary text-white hover:bg-accent-secondary hover:text-white rounded-full transition-colors duration-300 font-medium text-base shadow-lg shadow-accent-primary/20"
            >
              View Projects
            </a>
            <a
              href="#career"
              class="px-6 py-3 bg-transparent border border-accent-tertiary/30 hover:border-accent-primary text-text-primary hover:text-accent-primary rounded-full transition-colors duration-300 font-medium text-base"
            >
              View Career
            </a>
          </div>
        </div>

        <!-- Right column: Hero image -->
        <div
          class="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 animate-on-scroll"
          data-animation="fade-right"
          data-delay="600"
        >
          <div class="relative">
            <!-- Background decoration -->
            <div
              class="absolute -z-10 w-[90%] h-[90%] rounded-full bg-accent-primary/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></div>

            <!-- Hero image with shadow and rounded corners -->
            <div class="relative">
              <img
                src="/yo-1.webp"
                alt="Hero illustration"
                class="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-xl hero-img"
                loading="lazy"
                @load="imageLoaded"
                @error="handleImageError"
              />
              <!-- Loading spinner -->
              <div
                v-if="isImageLoading"
                class="absolute inset-0 flex items-center justify-center bg-background-alt/80 dark:bg-background/80 rounded-2xl"
              >
                <LoadingSpinner :size="60" color="text-accent-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Down arrow indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-on-scroll"
      data-animation="fade-up"
      data-delay="1500"
    >
      <a
        href="#skillset"
        class="text-accent-tertiary hover:text-accent-primary transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';

// Image loading state
const isImageLoading = ref(true);

// Image handling methods
const imageLoaded = () => {
  isImageLoading.value = false;
};

const handleImageError = () => {
  isImageLoading.value = false;
  console.error('Failed to load hero image');
};

// Initialize animations
onMounted(() => {
  // Animation on scroll setup
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
/* Optional additional styling */
.leading-tight {
  line-height: 1.1;
}
.leading-relaxed {
  line-height: 1.6;
}

.hero-img {
  mask-image: linear-gradient(black 80%, transparent);
  /* mask-image: linear-gradient(to bottom, black 80%, transparent); */
}

/* Animation classes */
.animate-on-scroll {
  opacity: 0;
}

.animate-fade-up {
  animation: fadeUp 0.7s ease-out forwards;
}

.animate-fade-right {
  animation: fadeRight 0.7s ease-out forwards;
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

.animate-fade-right {
  animation: fadeRight 0.7s ease-out forwards;
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
