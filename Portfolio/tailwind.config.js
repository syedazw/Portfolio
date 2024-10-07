/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        royalblue: {
          "100": "#366af0",
          "200": "rgba(54, 106, 240, 0.81)",
          "300": "rgba(54, 106, 240, 0.65)",
        },
        gray: "rgba(30, 30, 30, 0.87)",
      },
      fontFamily: {
        ubuntu: "Ubuntu",
        inherit: "inherit",
      },
    },
    fontSize: {
      xs: "12px",
      smi: "13px",
      xl: "20px",
      "2xs": "11px",
      mini: "15px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
