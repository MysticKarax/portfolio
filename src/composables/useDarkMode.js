import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDarkMode = ref(false)

  // Check if user has already chosen a theme
  const getStoredTheme = () => localStorage.getItem('theme')
  
  // Check if system is set to dark mode
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // Update the DOM
  const updateTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    isDarkMode.value = dark
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    updateTheme(!isDarkMode.value)
  }

  // Initialize theme
  onMounted(() => {
    const stored = getStoredTheme()
    if (stored) {
      updateTheme(stored === 'dark')
    } else {
      updateTheme(getSystemTheme() === 'dark')
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!getStoredTheme()) {
        updateTheme(e.matches)
      }
    })
  })

  return {
    isDarkMode,
    toggleDarkMode
  }
}

