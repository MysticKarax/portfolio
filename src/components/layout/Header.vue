<template>
  <header
    class="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-accent-tertiary/20 dark:bg-background-alt/90 transition-all duration-300"
  >
    <div class="container mx-auto px-4 py-4 md:py-5 relative">
      <nav class="flex items-center justify-between">
        <!-- Logo - Left side -->
        <div class="flex items-center">
          <a href="#" class="block">
            <img src="/logo.svg" alt="Jordi Logo" class="h-10 w-auto" />
          </a>
        </div>

        <!-- Navigation Links - Center (hidden on mobile) -->
        <div class="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
          <a
            v-for="navItem in navItems"
            :key="navItem.path"
            :href="navItem.path"
            class="px-4 py-2 rounded-full text-sm transition-colors duration-300"
            :class="
              activeLink === navItem.path
                ? 'bg-nav-active text-text-primary font-medium'
                : 'text-accent-tertiary hover:text-text-primary'
            "
            @click.prevent="setActiveLink(navItem.path)"
          >
            {{ navItem.label }}
          </a>
        </div>

        <!-- Right side elements - Availability & Social Media -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- Availability Status -->
          <div class="hidden lg:flex items-center space-x-2">
            <span class="h-2.5 w-2.5 rounded-full bg-available"></span>
            <span class="text-text-primary text-sm">Available</span>
          </div>

          <!-- Language Selector Removed -->

          <!-- Social Media Icons -->
          <div class="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/jordidev-mx"
              class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <!-- LinkedIn Icon -->
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/MysticKarax"
              class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <!-- GitHub Icon -->
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            <a
              href="mailto:jordan.empresa@outlook.com"
              class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <!-- Email Icon -->
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5 0v.511l8.25 6.188 8.25-6.188V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75zm16.5 1.822-7.72 5.792a1.5 1.5 0 0 1-1.81 0L3.75 8.572v8.678c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.572z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Mobile Menu Button (visible only on mobile) -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-accent-tertiary hover:text-text-primary relative h-6 w-6"
          aria-label="Toggle menu"
        >
          <transition name="icon-fade" mode="out-in">
            <Bars3Icon v-if="!isMobileMenuOpen" key="menu" class="h-6 w-6 absolute inset-0" />
            <XMarkIcon v-else key="close" class="h-6 w-6 absolute inset-0" />
          </transition>
        </button>
      </nav>

      <!-- Mobile Menu (conditionally rendered) -->
      <transition name="menu">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden fixed inset-x-0 top-[4.5rem] bg-background/90 backdrop-blur-sm dark:bg-background-alt/90"
        >
          <div class="container mx-auto px-4">
            <div class="py-4 border-t border-accent-tertiary/20">
              <div class="flex flex-col space-y-3">
                <a
                  v-for="(navItem, index) in navItems"
                  :key="navItem.path"
                  :href="navItem.path"
                  class="px-3 py-2 rounded-md transition-all duration-300 menu-item"
                  :style="{ '--delay': index * 50 + 'ms' }"
                  :class="
                    activeLink === navItem.path
                      ? 'bg-nav-active text-text-primary font-medium'
                      : 'text-accent-tertiary hover:text-text-primary'
                  "
                  @click.prevent="
                    setActiveLink(navItem.path);
                    toggleMobileMenu();
                  "
                >
                  {{ navItem.label }}
                </a>
              </div>

              <div class="mt-6 pt-4 border-t border-accent-tertiary/20">
                <!-- Mobile Availability Status -->
                <div class="flex items-center space-x-2 px-3 py-2 menu-item" style="--delay: 150ms">
                  <span class="h-2.5 w-2.5 rounded-full bg-available"></span>
                  <span class="text-text-primary text-sm">Available</span>
                </div>

                <!-- Mobile Language Switcher Removed -->

                <!-- Mobile Social Media Icons -->
                <div class="mt-4 px-3 flex items-center space-x-6 menu-item" style="--delay: 200ms">
                  <a
                    href="https://www.linkedin.com/in/jordidev-mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <!-- LinkedIn Icon -->
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/MysticKarax"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <!-- GitHub Icon -->
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useDarkMode } from '@/composables/useDarkMode';

// Initialize dark mode
const { isDarkMode, toggleDarkMode } = useDarkMode();

// Nav items
const navItems = [
  { key: 'home', path: '#home', label: 'Home' },
  { key: 'projects', path: '#projects', label: 'Projects' },
  { key: 'career', path: '#career', label: 'Career' },
  { key: 'about', path: '#about', label: 'About' },
];

// Active link state
const activeLink = ref('#home');

// Set active link
const setActiveLink = (path) => {
  // Update activeLink state
  activeLink.value = path;

  // Update URL hash
  history.pushState(null, null, path);

  // Extract the element ID from the path (remove the # symbol)
  const targetId = path.substring(1);

  // Find the target element
  const targetElement = document.getElementById(targetId);

  // Scroll to the element if it exists
  if (targetElement) {
    // Use smooth scrolling behavior
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu when clicking outside
const closeMobileMenu = () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};

// Language functionality removed - using direct English text

// Click outside directive removed - not needed after removing language dropdown

// Initialize active link based on URL hash
onMounted(() => {
  const hash = window.location.hash || '#home';
  activeLink.value = hash;

  // Add scroll event listener to highlight active section
  window.addEventListener('scroll', handleScroll);

  // Add click outside listener for mobile menu
  document.addEventListener('click', handleClickOutside);
});

// Clean up event listeners
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});

// Handle scroll to highlight active section
const handleScroll = () => {
  // This would require implementation based on actual section positioning
  // Here's a placeholder for the functionality
  const scrollPosition = window.scrollY + 100;

  // This would be populated with actual section elements
  // For now, we're just using the default home section
};

// Handle click outside for mobile menu
const handleClickOutside = (event) => {
  const menuButton = document.querySelector('[aria-label="Toggle menu"]');
  const mobileMenu = document.querySelector('.md\\:hidden.mt-4');

  if (
    isMobileMenuOpen.value &&
    menuButton &&
    !menuButton.contains(event.target) &&
    mobileMenu &&
    !mobileMenu.contains(event.target)
  ) {
    closeMobileMenu();
  }
};
</script>

<style scoped>
/* Mobile Menu Transition */
.menu-enter-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

/* Menu Items Staggered Animation */
.menu-enter-active .menu-item {
  transition: all 0.3s ease var(--delay, 0ms);
}

.menu-leave-active .menu-item {
  transition: all 0.2s ease;
}

.menu-enter-from .menu-item {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-leave-to .menu-item {
  opacity: 0;
  transform: translateY(-10px);
}

/* Icon Transition */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.2s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}
</style>
