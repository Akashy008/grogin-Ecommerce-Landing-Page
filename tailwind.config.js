/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*","./src/**"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern2': "url('./assets/main.png')",

        // 'logo': "url('./assets/logo.png')",


        'hero-pattern': "url('./assets/bannerLarge.png')",

        'svg-1': "url('./assets/SVG-1.png')",
        'svg-2': "url('./assets/SVG-2.png')",
        'svg-3': "url('./assets/SVG-3.png')",
        'svg-4': "url('./assets/SVG-4.png')",

        'card-1': "url('./assets/card-1.jpeg')",
        'card-2': "url('./assets/card-2.jpeg')",
        'card-3': "url('./assets/card-3.jpeg')",

        'card-4': "url('./assets/Banner-lg-1.jpeg')",
        'card-5': "url('./assets/Banner-lg-2.jpeg')",
        'card-6': "url('./assets/Banner-lg-3.jpeg')",
        'card-7': "url('./assets/Banner-lg-4.jpeg')",
       
        
        
      },
      fontFamily:{
          Inter:["'Inter', sans-serif"]
      },
    },
  },
  plugins: [],
}

