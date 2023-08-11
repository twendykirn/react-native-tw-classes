import { Dimensions, PixelRatio, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const ONE_UNIT = 4;

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const { width, height } = Dimensions.get('window');
const [shortDimension] = width < height ? [width] : [height];

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const defaultScale = (size: number) => {
    let pixelRatio = PixelRatio.get();

    const isAndroid = Platform.OS === 'android';

    if (isAndroid && pixelRatio === 3 && height * PixelRatio.get() < (isAndroid ? 2000 : 1750)) {
        pixelRatio = 2.7;
        return Math.floor(PixelRatio.roundToNearestPixel((pixelRatio * size) / 3));
    }

    if (DeviceInfo.isTablet()) {
        return Math.floor(moderateScale(size, 0.1));
    }

    return Math.floor(moderateScale(size));
};

export const getUnitValue = (multiplier: number) => defaultScale(ONE_UNIT * multiplier);
