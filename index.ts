import { StyleSheet, Platform, Appearance } from 'react-native';

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
