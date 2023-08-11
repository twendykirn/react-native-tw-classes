import { StyleSheet, Platform, Appearance } from 'react-native';

export { alignContent } from './src/classes/flexbox/alignContent';
export { alignItems } from './src/classes/flexbox/alignItems';
export { alignSelf } from './src/classes/flexbox/alignSelf';
export { flexBasis } from './src/classes/flexbox/flexBasis';
export { flexDirection } from './src/classes/flexbox/flexDirection';
export { flexGap } from './src/classes/flexbox/flexGap';
export { flexGrow } from './src/classes/flexbox/flexGrow';
export { flexShrink } from './src/classes/flexbox/flexShrink';
export { flexWrap } from './src/classes/flexbox/flexWrap';
export { justifyContent } from './src/classes/flexbox/justifyContent';
export { aspectRatio } from './src/classes/layout/aspectRatio';
export { display } from './src/classes/layout/display';
export { overflow } from './src/classes/layout/overflow';
export { position } from './src/classes/layout/position';
export { topRightBottomLeft } from './src/classes/layout/topRightBottomLeft';
export { zIndex } from './src/classes/layout/zIndex';
export { opacity } from './src/classes/effects/opacity';
export { borderRadius } from './src/classes/borders/borderRadius';
export { borderStyle } from './src/classes/borders/borderStyle';
export { borderWidth } from './src/classes/borders/borderWidth';
export { height } from './src/classes/sizing/height';
export { maxHeight } from './src/classes/sizing/maxHeight';
export { maxWidth } from './src/classes/sizing/maxWidth';
export { minHeight } from './src/classes/sizing/minHeight';
export { minWidth } from './src/classes/sizing/minWidth';
export { width } from './src/classes/sizing/width';
export { margin } from './src/classes/spacing/margin';
export { padding } from './src/classes/spacing/padding';

let globalStyles: Record<string, any> = {};

interface InitialStyleObject {
    classes: Record<string, any>;
    colors?: Record<string, Record<string, string>>;
}

const createClassesWithColors = (
    className: string,
    styleName: string,
    colors: Record<string, Record<string, string>>
) => {
    let res: Record<string, any> = {};

    const colorsKeys = Object.keys(colors);
    const colorsObjects = Object.values(colors);

    const colorsTitles = Object.keys(colorsObjects);
    const colorsValues = Object.values(colorsObjects);

    for (let i = 0; i < colorsKeys.length; i++) {
        for (let k = 0; k < colorsTitles.length; k++) {
            res = {
                ...res,
                [`${className}-${colorsKeys[i]}-${colorsTitles[k]}`]: { [`${styleName}`]: colorsValues[k] },
            };
        }
    }

    return res;
};

export const initStyles = ({ classes, colors }: InitialStyleObject) => {
    let endClasses = { ...classes };

    if (colors) {
        endClasses = {
            ...endClasses,
            ...createClassesWithColors('bg', 'backgroundColor', colors),
            ...createClassesWithColors('border', 'borderColor', colors),
            ...createClassesWithColors('text', 'color', colors),
        };
    }

    globalStyles = StyleSheet.create(endClasses);
};

export const tw = (className: string, style?: any) => {
    const classes = className.split(' ');

    const isAndroid = Platform.OS === 'android';
    const isIOS = Platform.OS === 'ios';
    const isDarkMode = Appearance.getColorScheme() === 'dark';

    let endStyle: Record<string, any> = {};

    let prefixedClasses: string[] = [];

    let value: Record<string, any> | undefined = undefined;
    let classTitle = '',
        prefix = '',
        isSkip = false;

    for (let i = 0; i < classes.length; i++) {
        isSkip = false;
        classTitle = classes[i];
        prefix = classTitle.includes(':') ? classTitle.split(':')[0] : '';

        if (
            (prefix === 'dark' && isDarkMode) ||
            (prefix === 'android' && isAndroid) ||
            (prefix === 'ios' && isIOS) ||
            !prefix
        ) {
            if (prefix) {
                classTitle = classTitle.replace(`${prefix}:`, '');
                prefixedClasses.push(classTitle);
            } else {
                isSkip = prefixedClasses.includes(classTitle);
            }

            if (!isSkip) {
                value = globalStyles[classTitle];

                if (value) {
                    endStyle[classTitle] = value;
                }
            }
        }
    }

    if (style) {
        endStyle = StyleSheet.create({ endStyle: { ...endStyle, ...style } }).endStyle;
    }

    return endStyle;
};
