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
        bottomToTop: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '25': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scroll: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
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
        },
        smooth_story: {
          '0%': { transform: 'translateY(50px) translateX(50%)', opacity: '0' },
          '70%': { transform: 'translateY(-10px) translateX(50%)' },
          '100%': { transform: 'translateY(0px) translateX(50%)', opacity: '1' }
        },
        rotate_right: {
          from: { transform: 'rotate(0deg) translateY(-20%)' },
          to: { transform: 'rotate(-20deg) translateY(-20%)' }
        },
        rotate_left: {
          from: { transform: 'rotate(0deg) translateY(-20%)' },
          to: { transform: 'rotate(20deg) translateY(-20%)' }
        }
      },
      animation: {
        shake: 'shake 0.3s linear 1',
        fadeIn_late: 'fadeIn_late 2s linear 1',
        fadeIn_3: 'fadeIn 0.3s linear 1',
        fadeIn_5: 'fadeIn 1s linear 1',
        topToBottom: 'topToBottom 1s linear 1',
        bottomToTop: 'bottomToTop 1s linear 1',
        smooth1: 'smooth 1.3s linear 1',
        smooth2: 'smooth 1.5s linear 1',
        smooth3: 'smooth 1.7s linear 1',
        smooth_story: 'smooth_story 1.7s linear 1',
        leftToRight_infinite: 'leftToRight 60s linear infinite',
        leftToRight_button: 'leftToRight_button 2s linear 1',
        scroll: 'scroll 20s linear infinite',
        rotate_right: 'rotate_right 1s linear 1',
        rotate_left: 'rotate_left 1s linear 1'
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
