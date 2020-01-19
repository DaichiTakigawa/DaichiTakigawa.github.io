import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.45,
  scaleRatio: 2.00,
  headerFontFamily: ["Noto Sans JP", "sans-serif"],
  bodyFontFamily: ["Noto Sans JP", "sans-serif"],
  headerWeight: 700,
  googleFonts: [
    {
      name: "Noto Sans JP",
      styles: ["700", "400&dispaly=swap"],
    },
  ],
})

export default typography

export const { scale, rhythm } = typography
