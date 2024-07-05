## Installation

### Prerequisites
- Node.js (version >= 12.0.0)
- npm (version >= 6.0.0)

### Steps

1. **Create React App with Vite**
   ```bash
   npx create-vite@latest my-react-app --template react
   cd my-react-app
   ```

2. **Install Tailwind CSS**
   ```bash
   # Install Tailwind CSS, PostCSS, and Autoprefixer
   npm install -D tailwindcss postcss autoprefixer

   # Initialize Tailwind CSS configuration
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS**
   Edit `tailwind.config.js` to customize Tailwind's configuration:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {}, // Customize Tailwind's default theme here
     },
     plugins: [], // Add any Tailwind CSS plugins here
   };
   ```

4. **Add Tailwind Directives to CSS**
   In your main CSS file (`./src/index.css`), add Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```
