<template>
  <div class="min-h-screen flex flex-col bg-background dark:bg-background-alt text-text-primary">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Section components with transition groups -->
      <transition-group name="section" tag="div" appear>
        <!-- Hero Section -->
        <Hero key="hero" />

        <!-- Recent Projects Section -->
        <Projects key="projects" />

        <!-- Skillset Section -->
        <Skillset key="skillset" />

        <!-- Career Section -->
        <Career key="career" />

        <!-- About Me Section -->
        <About key="about" />

        <!-- Contact Section -->
        <Contact key="contact" />
      </transition-group>
    </main>

    <!-- Footer -->
    <footer class="bg-background-alt dark:bg-background py-8 border-t border-accent-tertiary/20">
      <div class="container mx-auto px-4">
        <Footer />
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Layout components
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

// Section components
import Hero from './components/sections/Hero.vue';
import Skillset from './components/sections/Skillset.vue';
import Projects from './components/sections/Projects.vue';
import Career from './components/sections/Career.vue';
import About from './components/sections/About.vue';
import Contact from './components/sections/Contact.vue';

// Check for saved dark mode preference or system preference
onMounted(() => {
  // Add scroll event listener to update active section in header
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});

// Function to highlight active section when scrolling
const handleScroll = () => {
  const sections = document.querySelectorAll('section[id]');
  let scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('a[href*="#"]').forEach((link) => {
        link.classList.remove('active');
      });

      const activeLink = document.querySelector(`a[href*="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

// Set up intersection observer for scroll animations
onMounted(() => {
  if ('IntersectionObserver' in window) {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally unobserve after animation
            // observer.unobserve(entry.target)
          } else {
            // Optional: remove the class when element is out of view
            // entry.target.classList.remove('visible')
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      },
    );

    animateElements.forEach((element) => {
      observer.observe(element);
    });
  }
});
</script>

<style>
/* Base styles */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for fixed header */
}

body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Section transitions */
.section-enter-active,
.section-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.section-enter-from,
.section-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Active nav link style */
.nav-link {
  @apply px-4 py-2 rounded-full transition-all duration-300;
}

.nav-link.active {
  @apply bg-nav-active text-text-primary font-medium;
}

.nav-link:not(.active) {
  @apply text-accent-tertiary hover:text-text-primary;
}

/* Dark mode toggle transition */
.dark-mode-toggle {
  @apply transition-all duration-300 transform;
}

.dark-mode-toggle:hover {
  @apply shadow-lg scale-110;
}

/* Other animation helpers */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
