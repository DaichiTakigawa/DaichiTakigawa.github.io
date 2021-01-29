import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  scaleRatio: 2.0,
  headerFontFamily: ['Noto Sans JP', 'sans-serif'],
  bodyFontFamily: ['Noto Sans JP', 'sans-serif'],
  headerWeight: 700,
})

export default typography

export const {scale, rhythm} = typography
