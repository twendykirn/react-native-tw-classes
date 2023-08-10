import { getUnitValue } from '../../utils';

export const borderWidth = {
    'border-0': {
        borderWidth: 0,
    },
    'border-2': {
        borderWidth: getUnitValue(0.5),
    },
    'border-4': {
        borderWidth: getUnitValue(1),
    },
    'border-8': {
        borderWidth: getUnitValue(2),
    },
    border: {
        borderWidth: getUnitValue(0.25),
    },
    'border-x-0': {
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    'border-x-2': {
        borderLeftWidth: getUnitValue(0.5),
        borderRightWidth: getUnitValue(0.5),
    },
    'border-x-4': {
        borderLeftWidth: getUnitValue(1),
        borderRightWidth: getUnitValue(1),
    },
    'border-x-8': {
        borderLeftWidth: getUnitValue(2),
        borderRightWidth: getUnitValue(2),
    },
    'border-x': {
        borderLeftWidth: getUnitValue(0.25),
        borderRightWidth: getUnitValue(0.25),
    },
    'border-y-0': {
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    'border-y-2': {
        borderTopWidth: getUnitValue(0.5),
        borderBottomWidth: getUnitValue(0.5),
    },
    'border-y-4': {
        borderTopWidth: getUnitValue(1),
        borderBottomWidth: getUnitValue(1),
    },
    'border-y-8': {
        borderTopWidth: getUnitValue(2),
        borderBottomWidth: getUnitValue(2),
    },
    'border-y': {
        borderTopWidth: getUnitValue(0.25),
        borderBottomWidth: getUnitValue(0.25),
    },
    'border-t-0': {
        borderTopWidth: 0,
    },
    'border-t-2': {
        borderTopWidth: getUnitValue(0.5),
    },
    'border-t-4': {
        borderTopWidth: getUnitValue(1),
    },
    'border-t-8': {
        borderTopWidth: getUnitValue(2),
    },
    'border-t': {
        borderTopWidth: getUnitValue(0.25),
    },
    'border-r-0': {
        borderRightWidth: 0,
    },
    'border-r-2': {
        borderRightWidth: getUnitValue(0.5),
    },
    'border-r-4': {
        borderRightWidth: getUnitValue(1),
    },
    'border-r-8': {
        borderRightWidth: getUnitValue(2),
    },
    'border-r': {
        borderRightWidth: getUnitValue(0.25),
    },
    'border-b-0': {
        borderBottomWidth: 0,
    },
    'border-b-2': {
        borderBottomWidth: getUnitValue(0.5),
    },
    'border-b-4': {
        borderBottomWidth: getUnitValue(1),
    },
    'border-b-8': {
        borderBottomWidth: getUnitValue(2),
    },
    'border-b': {
        borderBottomWidth: getUnitValue(0.25),
    },
    'border-l-0': {
        borderLeftWidth: 0,
    },
    'border-l-2': {
        borderLeftWidth: getUnitValue(0.5),
    },
    'border-l-4': {
        borderLeftWidth: getUnitValue(1),
    },
    'border-l-8': {
        borderLeftWidth: getUnitValue(2),
    },
    'border-l': {
        borderLeftWidth: getUnitValue(0.25),
    },
};
