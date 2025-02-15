const colors = require('tailwindcss/colors')
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'montserrat': [
  				'Montserrat',
  				'sans-serif'
  			],
  			'merriweather': [
  				'Merriweather',
  				'serif'
  			],
  			'comfortaa': [
  				'Comfortaa',
  				'cursive'
  			],
  			'chakrapetch': [
  				'Chakra Petch',
  				'sans-serif'
  			]
  		},
  		height: {
  			mobileNav: 'calc(100vh - 3.5rem)'
  		},
  		boxShadow: {
  			customproducts: '4px 4px 8px 0px rgba(0, 0, 0, 0.77)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	colors: {
            ...colors,
  		primary: {
  			'100': '#F5F3FF',
  			'200': '#DACBFF',
  			'300': '#BFA3FF',
  			'400': '#A079FF',
  			'500': '#8751FF',
  			'600': '#6537FF',
  			'700': '#4723E2',
  			'800': '#3117B3',
  			'900': '#1E0F8D'
  		},
  		secondary: {
  			'100': '#E5F7F1',
  			'200': '#C1EDDF',
  			'300': '#99E0CC',
  			'400': '#72D1B8',
  			'500': '#4FBEA4',
  			'600': '#34A38F',
  			'700': '#1F8873',
  			'800': '#126057',
  			'900': '#0A483F'
  		},
  		accent: {
  			'100': '#FFF5E5',
  			'200': '#FFD2B6',
  			'300': '#FFAD85',
  			'400': '#FF8960',
  			'500': '#FF652B',
  			'600': '#E04311',
  			'700': '#B5280B',
  			'800': '#8E160C',
  			'900': '#71110A'
  		}
  	}
  },
  plugins: [
   require('@tailwindcss/forms'),
      require("tailwindcss-animate")
],

}

