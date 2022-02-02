interface ISize {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

interface IBreakpoint {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

const size: ISize = {
  xs: 567,
  sm: 768,
  md: 997,
  lg: 1200,
};

const breakpoints: IBreakpoint = Object.entries(size).reduce(
  (prev, [key, value]) => ({ ...prev, [key]: `(min-width: ${value}px)` }),
  {
    xs: '',
    sm: '',
    md: '',
    lg: '',
  },
);

export default breakpoints;
