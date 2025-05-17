<template>
  <section
    id="about"
    class="py-16 md:py-24 bg-background-alt/30 dark:bg-background/50 relative overflow-hidden"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div
        class="absolute top-[20%] right-[5%] w-80 h-80 rounded-full bg-accent-primary blur-3xl"
      ></div>
      <div
        class="absolute bottom-[5%] left-[15%] w-96 h-96 rounded-full bg-accent-secondary blur-3xl"
      ></div>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute top-20 left-10 w-24 h-24 border-2 border-accent-primary/20 rounded-lg rotate-12 hidden lg:block"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-primary/20 rounded-full hidden lg:block"
    ></div>
    <div
      class="absolute top-40 right-20 w-6 h-6 bg-accent-primary/20 rounded-full hidden lg:block"
    ></div>
    <div
      class="absolute bottom-40 left-20 w-10 h-10 bg-accent-primary/20 rounded-lg rotate-45 hidden lg:block"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section title -->
      <div class="text-center mb-16 animate-on-scroll" data-animation="fade-up" data-delay="0">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">About Me</h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="text-xl text-text-primary font-medium max-w-2xl mx-auto">
          Developing software with passion for Problem Solving
        </p>
      </div>

      <!-- About content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
        <!-- Profile image column -->
        <div
          class="order-2 lg:order-1 animate-on-scroll"
          data-animation="fade-right"
          data-delay="300"
        >
          <div class="relative">
            <!-- Image frame with decorative elements -->
            <div class="absolute inset-0 bg-accent-primary/10 rounded-xl transform rotate-3"></div>
            <div
              class="absolute inset-0 border-2 border-accent-primary/20 rounded-xl transform -rotate-2"
            ></div>

            <!-- Profile image -->
            <div class="relative rounded-xl overflow-hidden border-2 border-accent-tertiary/10">
              <img
                src="/yo-2.webp"
                alt="Jordi - Product Designer"
                class="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105 about-img"
              />
            </div>

            <!-- Floating badge/element -->
            <div
              class="absolute -bottom-6 -right-6 bg-background dark:bg-background-alt p-4 rounded-xl shadow-xl border border-accent-tertiary/10"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center text-white"
                >
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-text-secondary text-xs">Experience</div>
                  <div class="text-text-primary font-semibold">5+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- About text column -->
        <div
          class="order-1 lg:order-2 animate-on-scroll"
          data-animation="fade-left"
          data-delay="300"
        >
          <!-- Personal introduction -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-accent-primary mb-4">Personal Journey</h3>
            <p class="text-text-secondary mb-4">
              I'm driven by the desire to build technology that makes life easier, faster, and more
              connected to our loved ones. My focus is on creating clean, functional, and
              human-centered digital experiences.
            </p>
            <p class="text-text-secondary mb-4">
              I began coding while studying Computer Engineering at the University of Guadalajara,
              and have since developed tools for businesses ranging from industrial automation to
              digital banking.
            </p>
            <p class="text-text-secondary">
              I see programming not just as a skill, but as a way to understand how systems — and
              maybe even the universe — truly work.
            </p>
          </div>

          <!-- Design philosophy -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-accent-primary mb-4">
              Software Development Philosophy
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Value 1: Human-Centered -->
              <div
                class="bg-background-alt/40 dark:bg-background/70 p-5 rounded-lg border border-accent-tertiary/10 group transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-white"
                  >
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h4
                    class="font-medium text-text-primary transition-colors duration-300 group-hover:text-accent-primary"
                  >
                    Human-Centered
                  </h4>
                </div>
                <p
                  class="text-text-secondary text-sm transition-colors duration-300 group-hover:text-text-primary"
                >
                  Building with empathy, aiming to enhance real lives and relationships through
                  thoughtful digital experiences that foster connection and trust
                </p>
              </div>

              <!-- Value 2: Purpose-Driven -->
              <div
                class="bg-background-alt/40 dark:bg-background/70 p-5 rounded-lg border border-accent-tertiary/10 group transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-white"
                  >
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4
                    class="font-medium text-text-primary transition-colors duration-300 group-hover:text-accent-primary"
                  >
                    Purpose-Driven
                  </h4>
                </div>
                <p
                  class="text-text-secondary text-sm transition-colors duration-300 group-hover:text-text-primary"
                >
                  Guiding every decision with a clear purpose, ensuring that every line of code and
                  every feature serves a greater good — one project at a time
                </p>
              </div>

              <!-- Value 3: Simplicity & Clarity! -->
              <div
                class="bg-background-alt/40 dark:bg-background/70 p-5 rounded-lg border border-accent-tertiary/10 group transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-white"
                  >
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h4
                    class="font-medium text-text-primary transition-colors duration-300 group-hover:text-accent-primary"
                  >
                    Simplicity & Clarity
                  </h4>
                </div>
                <p
                  class="text-text-secondary text-sm transition-colors duration-300 group-hover:text-text-primary"
                >
                  Striving for simplicity and clarity in every design, ensuring that the user can
                  understand and interact with the system with ease.
                </p>
              </div>

              <!-- Value 4: Curiosity-First -->
              <div
                class="bg-background-alt/40 dark:bg-background/70 p-5 rounded-lg border border-accent-tertiary/10 group transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-white"
                  >
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
                        d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6-3.5 6-3.5 6 3.5-6 3.5z"
                      />
                    </svg>
                  </div>
                  <h4
                    class="font-medium text-text-primary transition-colors duration-300 group-hover:text-accent-primary"
                  >
                    Curiosity-First
                  </h4>
                </div>
                <p
                  class="text-text-secondary text-sm transition-colors duration-300 group-hover:text-text-primary"
                >
                  Driven by the desire to understand how everything works — from the smallest
                  function to the vast systems behind our universe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

// i18n removed - using direct English text

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
/* Animation and layout utilities */
.leading-tight {
  line-height: 1.1;
}
.leading-relaxed {
  line-height: 1.6;
}

/* Optional hover effects for interactive elements */
.transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Animation classes */
.animate-on-scroll {
  opacity: 0;
}

.animate-fade-up {
  animation: fadeUp 0.7s ease-out forwards;
}

.animate-fade-left {
  animation: fadeLeft 0.7s ease-out forwards;
}

.animate-fade-right {
  animation: fadeRight 0.7s ease-out forwards;
}

/* Keyframe animations */
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

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.about-img {
  mask-image: linear-gradient(to bottom, black 80%, transparent);
}
</style>
