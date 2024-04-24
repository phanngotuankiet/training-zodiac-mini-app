module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        "yellow-ds": "#F4EEE3",
        "color-icons": "9F7C34",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
