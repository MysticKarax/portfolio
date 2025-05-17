import './index.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Create app with i18n support
const app = createApp(App)

// Define vMotion directive
const vMotion = {
  mounted(el, binding) {
    // Ensure binding and value exist
    if (!binding?.value) {
      console.warn('vMotion: missing binding value');
      return;
    }

    // Function to safely get and apply styles
    const applyStyles = (styles) => {
      if (!styles) return;
      
      // Handle opacity
      if (typeof styles.opacity === 'number') {
        el.style.opacity = styles.opacity;
      }

      // Handle transform
      let transform = [];
      if (typeof styles.y === 'number') {
        transform.push(`translateY(${styles.y}px)`);
      }
      if (typeof styles.x === 'number') {
        transform.push(`translateX(${styles.x}px)`);
      }
      if (transform.length > 0) {
        el.style.transform = transform.join(' ');
      }
    };

    // Apply initial styles
    if (binding.value.initial) {
      applyStyles(binding.value.initial);
    }

    // Handle enter animation
    if (binding.value.enter) {
      const delay = binding.value.enter?.transition?.delay || 0;
      const duration = binding.value.enter?.transition?.duration || 500;

      setTimeout(() => {
        el.style.transition = `all ${duration}ms ease`;
        applyStyles(binding.value.enter);
      }, delay);
    }
  }
}

// Register vMotion directive globally
app.directive('motion', vMotion)

// i18n removed - using direct English text

// Mount app
app.mount('#app')
