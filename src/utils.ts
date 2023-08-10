import { Dimensions } from 'react-native';

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const { width, height } = Dimensions.get('window');
const [shortDimension] = width < height ? [width] : [height];

export const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

const ONE_UNIT = 4;

export const getUnitValue = (multiplier: number) => scale(ONE_UNIT * multiplier);
