import { Dimensions } from 'react-native';
import { getUnitValue } from '../../utils';

export const maxHeight = {
    'h-0': {
        maxHeight: 0,
    },
    'h-px': {
        maxHeight: getUnitValue(0.25),
    },
    'h-0.5': {
        maxHeight: getUnitValue(0.5),
    },
    'h-1': {
        maxHeight: getUnitValue(1),
    },
    'h-1.5': {
        maxHeight: getUnitValue(1.5),
    },
    'h-2': {
        maxHeight: getUnitValue(2),
    },
    'h-2.5': {
        maxHeight: getUnitValue(2.5),
    },
    'h-3': {
        maxHeight: getUnitValue(3),
    },
    'h-3.5': {
        maxHeight: getUnitValue(3.5),
    },
    'h-4': {
        maxHeight: getUnitValue(4),
    },
    'h-5': {
        maxHeight: getUnitValue(5),
    },
    'h-6': {
        maxHeight: getUnitValue(6),
    },
    'h-7': {
        maxHeight: getUnitValue(7),
    },
    'h-8': {
        maxHeight: getUnitValue(8),
    },
    'h-9': {
        maxHeight: getUnitValue(9),
    },
    'h-10': {
        maxHeight: getUnitValue(10),
    },
    'h-11': {
        maxHeight: getUnitValue(11),
    },
    'h-12': {
        maxHeight: getUnitValue(12),
    },
    'h-14': {
        maxHeight: getUnitValue(14),
    },
    'h-16': {
        maxHeight: getUnitValue(16),
    },
    'h-20': {
        maxHeight: getUnitValue(20),
    },
    'h-24': {
        maxHeight: getUnitValue(24),
    },
    'h-28': {
        maxHeight: getUnitValue(28),
    },
    'h-32': {
        maxHeight: getUnitValue(32),
    },
    'h-36': {
        maxHeight: getUnitValue(36),
    },
    'h-40': {
        maxHeight: getUnitValue(40),
    },
    'h-44': {
        maxHeight: getUnitValue(44),
    },
    'h-48': {
        maxHeight: getUnitValue(48),
    },
    'h-52': {
        maxHeight: getUnitValue(52),
    },
    'h-56': {
        maxHeight: getUnitValue(56),
    },
    'h-60': {
        maxHeight: getUnitValue(60),
    },
    'h-64': {
        maxHeight: getUnitValue(64),
    },
    'h-72': {
        maxHeight: getUnitValue(72),
    },
    'h-80': {
        maxHeight: getUnitValue(80),
    },
    'h-96': {
        maxHeight: getUnitValue(96),
    },
    'h-full': {
        maxHeight: '100%',
    },
    'h-screen': {
        maxHeight: Dimensions.get('window').height,
    },
};
