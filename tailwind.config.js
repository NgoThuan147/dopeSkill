/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cyan-900': '#164E63',
        'white': '#FFFFFF',
        'grey-50': '#F9FAFB',
        'grey-100': '#F3F4F6',
        'grey-200': '#E5E7EB',
        'grey-300': '#D1D5DB',
        'grey-400': '#9CA3AF',
        'grey-500': '#6B7280',
        'grey-600': '#4B5563',
        'grey-700': '#374151',
        'grey-800': '#1F2937',
        'grey-900': '#111827',
        'primary-color': '#DC030E',
        'blue-600': '#2563EB',
        'amber-500': '#F59E0B',
        'rgba-0.6': 'rgba(17, 24, 39, 0.6)',
      },
      boxShadow: {
        '3xl': '0px 0px 6px rgba(0, 0, 0, 0.1)',
      }
    },
    fontFamily: {
      'display': ['SVN-Gilroy, sans-serif'],
      'body': ['SVN-Gilroy, sans-serif'],
      'sans': ['SVN-Gilroy, sans-serif']
    },
  },
  plugins: [],
}
