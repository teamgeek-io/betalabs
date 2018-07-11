import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["300", "400", "700"]
    }
  ]
});

export default typography;