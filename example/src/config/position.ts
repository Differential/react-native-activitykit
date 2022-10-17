import { Dimensions } from 'react-native';

// TODO: assuming window width/height is static.
const window = Dimensions.get('window');
let { width, height } = window;
if (width > height) {
  const tempWidth = width;
  width = height;
  height = tempWidth;
}

// Device Dimension Constants
export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;

// Calculating ratio from predefined breakpoints
// Ignore the nested ternary please...
const ratioX = DEVICE_WIDTH < 375 ? (DEVICE_WIDTH < 320 ? 0.75 : 0.875) : 1; // eslint-disable-line no-nested-ternary,max-len

const baseUnitConstant = 4;
const unit = baseUnitConstant * ratioX;

// vw() shortcut
export function vw(value: number) {
  return Math.round(DEVICE_WIDTH * value);
}

// vh() shortcut
export function vh(value: number) {
  return Math.round(DEVICE_HEIGHT * value);
}

// baseUnit() shortcut
export function baseUnit(value: number) {
  return Math.round(unit * value);
}
