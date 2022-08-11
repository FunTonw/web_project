/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 這邊是我的晃動動態
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(-5%)' },
          '25%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-5%)' },
          '75%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(-5%)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100$': { opacity: '1' }
        },
        fadeIn_late: {
          '0%': { opacity: '0' },
          '25%': { opacity: '0' },
          '100$': { opacity: '1' }
        },
        topToBottom: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '25': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scroll: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        },
        bottomToTop: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bottomToTop_contact: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(33.3%)', opacity: '1' }
        },
        leftToRight: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        leftToRight_button: {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '50%': { transform: 'translateX(-10%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' }
        },
        smooth: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '70%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        }
      },
      animation: {
        shake: 'shake 0.3s linear 1',
        fadeIn_late: 'fadeIn_late 2s linear 1',
        fadeIn_3: 'fadeIn 0.3s linear 1',
        fadeIn_5: 'fadeIn 1s linear 1',
        topToBottom: 'topToBottom 2s linear 1',
        bottomToTop: 'bottomToTop 2s linear 1',
        bottomToTop_1s: 'bottomToTop 1s linear 1',
        bottomToTop_contact: 'bottomToTop_contact 1.2s linear 1',
        smooth1: 'smooth .9s linear 1',
        smooth2: 'smooth 1.1s linear 1',
        smooth3: 'smooth 1.3s linear 1',
        leftToRight_infinite: 'leftToRight 60s linear infinite',
        leftToRight_button: 'leftToRight_button 2s linear 1',
        scroll: 'scroll 20s linear infinite'
      }
    }
  },
  // 變數加在這邊
  variants: {
    extend: {
      animation: ['hover']
    }
  },
  plugins: []
}
