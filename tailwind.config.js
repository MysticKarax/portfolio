/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy for manual control
  theme: {
    extend: {
      colors: {
        // Main brand colors
        'background': '#000000',
        'background-alt': '#121212',
        'text-primary': '#FFFFFF',
        'text-secondary': '#F5F5F5',
        'accent-primary': '#A450E1', // Vibrant Purple
        'accent-secondary': '#5C2C8C', // Deep Purple/Indigo
        'accent-tertiary': '#A0A0B0', // Medium Gray
        
        // UI-specific colors
        'nav-active': '#2A2A2D', // Pill-shaped nav background
        'available': '#34D399', // Green dot for availability
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px', // Extended to match requirements
      },
    },
  },
  plugins: [],
}

