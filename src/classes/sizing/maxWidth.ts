import { Dimensions } from 'react-native';
import { getUnitValue } from '../../utils';

export const maxWidth = {
    'max-w-0': {
        maxWidth: 0,
    },
    'max-w-xs': {
        maxWidth: getUnitValue(80),
    },
    'max-w-sm': {
        maxWidth: getUnitValue(96),
    },
    'max-w-md': {
        maxWidth: getUnitValue(112),
    },
    'max-w-lg': {
        maxWidth: getUnitValue(128),
    },
    'max-w-xl': {
        maxWidth: getUnitValue(144),
    },
    'max-w-2xl': {
        maxWidth: getUnitValue(168),
    },
    'max-w-3xl': {
        maxWidth: getUnitValue(192),
    },
    'max-w-4xl': {
        maxWidth: getUnitValue(224),
    },
    'max-w-5xl': {
        maxWidth: getUnitValue(256),
    },
    'max-w-6xl': {
        maxWidth: getUnitValue(288),
    },
    'max-w-7xl': {
        maxWidth: getUnitValue(320),
    },
    'w-full': {
        maxWidth: '100%',
    },
    'w-screen': {
        maxWidth: Dimensions.get('window').width,
    },
};
