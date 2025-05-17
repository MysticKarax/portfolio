# Product Designer Portfolio

A modern, multilingual portfolio website built for product designers using Vue.js 3, Tailwind CSS, and featuring a sleek dark mode theme.

![Portfolio Screenshot](public/portfolio-screenshot.png)

## Features

- **Modern Design**: Clean, professional aesthetic with thoughtful spacing and typography
- **Dark Mode**: Elegant dark theme with custom color palette and system preference detection
- **Responsive Layout**: Fully responsive design that looks great on devices from mobile to desktop
- **Multilingual Support**: Full i18n integration with English, Spanish, and Chinese translations
- **Smooth Animations**: Subtle animations and transitions for an engaging user experience
- **Modular Components**: Well-organized, reusable Vue components
- **SEO Friendly**: Semantic HTML and optimized content structure
- **Accessibility**: Designed with accessibility in mind
- **Performance Optimized**: Fast loading times and smooth interactions

## Technology Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS
- **Internationalization**: Vue I18n
- **Icons**: Heroicons
- **Animations**: Custom CSS transitions and Intersection Observer API
- **Deployment**: Ready for Netlify, Vercel, or similar platforms

## Project Structure

```
portfolio/
├── public/              # Static assets
│   └── JordiLogo.jpg    # Site logo
├── src/
│   ├── assets/          # Project assets (images, fonts)
│   ├── components/      # Vue components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── sections/    # Page section components
│   ├── composables/     # Reusable composition functions
│   ├── i18n/            # Internationalization
│   │   └── locales/     # Translation files
│   ├── App.vue          # Main app component
│   ├── main.js          # App entry point
│   └── index.css        # Global CSS
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Installation and Setup

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build and Deployment

### Build for Production

```sh
npm run build
# or
yarn build
```

The built files will be in the `dist` directory and ready for deployment.

### Deployment

This project can be easily deployed to platforms like Netlify, Vercel, or GitHub Pages.

#### Netlify Deployment

1. Push your code to a GitHub repository
2. Log in to Netlify
3. Click "New site from Git"
4. Choose your repository
5. Set build command to `npm run build`
6. Set publish directory to `dist`
7. Click "Deploy site"

## Customization

### Changing the Color Scheme

1. Edit `tailwind.config.js` to update the color palette:
   ```js
   colors: {
     'background': '#000000',
     'background-alt': '#121212',
     'text-primary': '#FFFFFF',
     'text-secondary': '#F5F5F5',
     'accent-primary': '#A450E1', // Change this to your primary brand color
     'accent-secondary': '#5C2C8C', // Change this to your secondary brand color
     'accent-tertiary': '#A0A0B0', // Change this to your tertiary color
     'nav-active': '#2A2A2D',
     'available': '#34D399',
   }
   ```

### Updating Content

1. Update the translation files in `src/i18n/locales/` to change the text content
2. Replace images in the components with your own work
3. Update the links and contact information in the Header and Footer components

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the component to `App.vue`
3. Update the navigation in `Header.vue` if needed
4. Add necessary translations to the locale files

## Browser Compatibility

This portfolio is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Internet Explorer is not supported.

## Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-feature-branch`
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern product design portfolios
- Icons from [Heroicons](https://heroicons.com/)
- Placeholder images generated with placeholder services

---

Created with ❤️ using Vue.js and Tailwind CSS
