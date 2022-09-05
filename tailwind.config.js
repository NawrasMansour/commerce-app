/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'clr-primary-1': 'hsl(22, 28%, 21%)',
          'clr-primary-2': 'hsl(22, 28%, 29%)',
          'clr-primary-3': 'hsl(22, 28%, 37%)',
          'clr-primary-4': 'hsl(22, 28%, 45%)',
          'clr-primary-5': 'hsl(22, 31%, 52%)',
          'clr-primary-6': 'hsl(22, 31%, 60%)',
          'clr-primary-7': 'hsl(22, 31%, 67%)',
          'clr-primary-8': 'hsl(20, 31%, 74%)',
          'clr-primary-9': 'hsl(22, 31%, 81%)',
          'clr-primary-10': 'hsl(22, 31%, 88%)',
          'clr-grey-1': 'hsl(209, 61%, 16%)',
          'clr-grey-2': 'hsl(211, 39%, 23%)',
          'clr-grey-3': 'hsl(209, 34%, 30%)',
          'clr-grey-4': 'hsl(209, 28%, 39%)',
          'clr-grey-5': 'hsl(210, 22%, 49%)',
          'clr-grey-6': 'hsl(209, 23%, 60%)',
          'clr-grey-7': 'hsl(211, 27%, 70%)',
          'clr-grey-8': 'hsl(210, 31%, 80%)',
          'clr-grey-9': 'hsl(212, 33%, 89%)',
          'clr-grey-10': 'hsl(210, 36%, 96%)',
          'clr-white': '#fff',
          'clr-red-dark': 'hsl(360, 67%, 44%)',
          'clr-red-light': 'hsl(360, 71%, 66%)',
          'clr-green-dark': 'hsl(125, 67%, 44%)',
          'clr-green-light': 'hsl(125, 71%, 66%)',
          'clr-black': '#222',
          'clr-star': '#ffb900',
        },
      },
    },
    minHeight: {
      '20v': '20vh',
      '60v': '60vh',
    },
    height: {
      '0.5r' : '0.5rem',
      '0.75r' : '0.75rem',
      '1r': '1rem',
      '1.5r': '1.5rem',
      '2r'  : '2rem',
      '2.5r': '2.5rem',
      '4r': '4rem',
      '5r': '5rem',
      '50px': '50px',
      '75px': '75px',
      '100px': '100px',
      '225px': '225px',
      '300px': '300px',
      '500px': '500px',
      '550px': '550px',
      '600px': '600px',
      '100%': '100%',
    },
    // gridTemplateColumns: {
    //   1: 'repeat(1, minmax(0, 1fr))',
    //   2: 'repeat(2, minmax(0, 1fr))',
    //   3: 'repeat(3, minmax(0, 1fr))',
    //   4: 'repeat(4, minmax(0, 1fr))',
    //   5: 'repeat(5, minmax(0, 1fr))',
    //   'products-grid': '200px minmax(1000px, 1fr)',
    // },
  },
  plugins: [],
}