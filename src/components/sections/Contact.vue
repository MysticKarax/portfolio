<template>
  <section
    id="contact"
    class="py-20 md:py-28 bg-accent-primary/10 relative overflow-hidden"
    v-intersection-observer
    :class="{ 'section-visible': isVisible }"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div
        class="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-primary blur-3xl animate-blob"
        :class="{ 'opacity-100': isVisible }"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-secondary blur-3xl animate-blob-delayed"
        :class="{ 'opacity-100': isVisible }"
      ></div>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute top-12 left-16 w-20 h-20 border-2 border-accent-primary/30 rounded-full hidden lg:block floating-element"
      :class="{ 'animate-float': isVisible }"
    ></div>
    <div
      class="absolute bottom-16 right-24 w-16 h-16 border-2 border-accent-primary/30 rounded-lg rotate-45 hidden lg:block floating-element-reverse"
      :class="{ 'animate-float-reverse': isVisible }"
    ></div>
    <div
      class="absolute top-28 right-[10%] w-6 h-6 bg-accent-primary/30 rounded-full hidden lg:block floating-element"
      :class="{ 'animate-float': isVisible }"
    ></div>
    <div
      class="absolute bottom-28 left-[10%] w-8 h-8 bg-accent-primary/30 rounded-lg rotate-12 hidden lg:block floating-element-reverse"
      :class="{ 'animate-float-reverse': isVisible }"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div
        class="max-w-3xl mx-auto text-center"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <!-- Availability status -->
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-background/20 dark:bg-background/40 backdrop-blur-sm mb-6"
        >
          <span class="h-2.5 w-2.5 rounded-full bg-available mr-2 pulse-dot"></span>
          <span class="text-text-primary text-sm font-medium">Available</span>
        </div>

        <!-- Section headline -->
        <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">Let's Work Together</h2>
        <p class="text-xl text-text-secondary mb-10 max-w-xl mx-auto">Got a project? Let's talk!</p>

        <!-- CTA button -->
        <div class="mb-12">
          <a
            href="mailto:jordidev@proton.me"
            class="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-white hover:bg-accent-secondary hover:text-white rounded-full transition-all duration-300 shadow-lg shadow-accent-primary/25 hover:shadow-accent-secondary/30 text-lg font-medium transform hover:-translate-y-1"
          >
            <span>Email Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        <!-- Social media links -->
        <div class="flex justify-center gap-6 mb-8">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/jordidev-mx"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 rounded-full flex items-center justify-center bg-background/20 dark:bg-background/40 backdrop-blur-sm text-text-primary hover:text-accent-primary hover:bg-background/40 dark:hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/MysticKarax"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 rounded-full flex items-center justify-center bg-background/20 dark:bg-background/40 backdrop-blur-sm text-text-primary hover:text-accent-primary hover:bg-background/40 dark:hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// i18n removed - using direct English text
const isVisible = ref(false);

// Intersection Observer directive
const vIntersectionObserver = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );
    observer.observe(el);
  },
};

// Animation directive (same as other components)
const vMotion = {
  mounted(el, binding) {
    // Check if binding.value exists before proceeding
    if (!binding || !binding.value) return;

    // Add initial state
    if (binding.value.initial) {
      Object.entries(binding.value.initial).forEach(([key, value]) => {
        if (key === 'opacity') {
          el.style.opacity = value;
        } else if (key === 'y') {
          el.style.transform = `translateY(${value}px)`;
        }
      });
    }

    // Add enter animation after a short delay
    setTimeout(() => {
      const duration = binding.value.enter?.transition?.duration || 500;
      el.style.transition = `all ${duration}ms ease`;

      if (binding.value.enter) {
        Object.entries(binding.value.enter).forEach(([key, value]) => {
          if (key === 'opacity') {
            el.style.opacity = value;
          } else if (key === 'y') {
            el.style.transform = `translateY(${value}px)`;
          }
        });
      }
    }, binding.value.enter?.transition?.delay || 0);
  },
};
</script>

<style scoped>
/* Section fade in */
.section-visible {
  animation: fadeInSection 1s ease-out forwards;
}

@keyframes fadeInSection {
  from {
    opacity: 0;
    transform: scale(0.98);
    backdrop-filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    backdrop-filter: blur(0);
  }
}

/* Background blobs */
.animate-blob {
  opacity: 0;
  animation: blobFloat 8s ease-in-out infinite;
  transition: opacity 1s ease-out;
}

.animate-blob-delayed {
  opacity: 0;
  animation: blobFloat 8s ease-in-out infinite;
  animation-delay: 4s;
  transition: opacity 1s ease-out;
}

@keyframes blobFloat {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(20px, -20px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Floating decorative elements */
.floating-element {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.floating-element-reverse {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.6s ease-out;
}

.animate-float {
  opacity: 1;
  transform: translateY(0);
  animation: float 6s ease-in-out infinite;
}

.animate-float-reverse {
  opacity: 1;
  transform: translateY(0);
  animation: floatReverse 7s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes floatReverse {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
}

/* Availability dot pulse */
.pulse-dot {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .animate-blob,
  .animate-blob-delayed,
  .floating-element,
  .floating-element-reverse,
  .animate-float,
  .animate-float-reverse,
  .pulse-dot {
    animation: none !important;
    transition: opacity 0.3s ease-out !important;
  }
}
</style>
