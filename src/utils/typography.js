import Typography from 'typography';
import theme from 'typography-theme-moraga';
theme.headerWeight = 400;

const typography = new Typography(theme);

export const { scale, rhythm, options } = typography;
export default typography;
