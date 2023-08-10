import { getUnitValue } from '../../utils';

export const borderRadius = {
    'rounded-none': {
        borderRadius: 0,
    },
    'rounded-sm': {
        borderRadius: getUnitValue(0.5),
    },
    rounded: {
        borderRadius: getUnitValue(1),
    },
    'rounded-md': {
        borderRadius: getUnitValue(1.5),
    },
    'rounded-lg': {
        borderRadius: getUnitValue(2),
    },
    'rounded-xl': {
        borderRadius: getUnitValue(3),
    },
    'rounded-2xl': {
        borderRadius: getUnitValue(4),
    },
    'rounded-3xl': {
        borderRadius: getUnitValue(6),
    },
    'rounded-full': {
        borderRadius: 9999,
    },
    'rounded-s-none': {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
    },
    'rounded-s-sm': {
        borderStartStartRadius: getUnitValue(0.5),
        borderEndStartRadius: getUnitValue(0.5),
    },
    'rounded-s': {
        borderStartStartRadius: getUnitValue(1),
        borderEndStartRadius: getUnitValue(1),
    },
    'rounded-s-md': {
        borderStartStartRadius: getUnitValue(1.5),
        borderEndStartRadius: getUnitValue(1.5),
    },
    'rounded-s-lg': {
        borderStartStartRadius: getUnitValue(2),
        borderEndStartRadius: getUnitValue(2),
    },
    'rounded-s-xl': {
        borderStartStartRadius: getUnitValue(3),
        borderEndStartRadius: getUnitValue(3),
    },
    'rounded-s-2xl': {
        borderStartStartRadius: getUnitValue(4),
        borderEndStartRadius: getUnitValue(4),
    },
    'rounded-s-3xl': {
        borderStartStartRadius: getUnitValue(6),
        borderEndStartRadius: getUnitValue(6),
    },
    'rounded-s-full': {
        borderStartStartRadius: 9999,
        borderEndStartRadius: 9999,
    },
    'rounded-e-none': {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
    },
    'rounded-e-sm': {
        borderStartEndRadius: getUnitValue(0.5),
        borderEndEndRadius: getUnitValue(0.5),
    },
    'rounded-e': {
        borderStartEndRadius: getUnitValue(1),
        borderEndEndRadius: getUnitValue(1),
    },
    'rounded-e-md': {
        borderStartEndRadius: getUnitValue(1.5),
        borderEndEndRadius: getUnitValue(1.5),
    },
    'rounded-e-lg': {
        borderStartEndRadius: getUnitValue(2),
        borderEndEndRadius: getUnitValue(2),
    },
    'rounded-e-xl': {
        borderStartEndRadius: getUnitValue(3),
        borderEndEndRadius: getUnitValue(3),
    },
    'rounded-e-2xl': {
        borderStartEndRadius: getUnitValue(4),
        borderEndEndRadius: getUnitValue(4),
    },
    'rounded-e-3xl': {
        borderStartEndRadius: getUnitValue(6),
        borderEndEndRadius: getUnitValue(6),
    },
    'rounded-e-full': {
        borderStartEndRadius: 9999,
        borderEndEndRadius: 9999,
    },
    'rounded-t-none': {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    'rounded-t-sm': {
        borderTopLeftRadius: getUnitValue(0.5),
        borderTopRightRadius: getUnitValue(0.5),
    },
    'rounded-t': {
        borderTopLeftRadius: getUnitValue(1),
        borderTopRightRadius: getUnitValue(1),
    },
    'rounded-t-md': {
        borderTopLeftRadius: getUnitValue(1.5),
        borderTopRightRadius: getUnitValue(1.5),
    },
    'rounded-t-lg': {
        borderTopLeftRadius: getUnitValue(2),
        borderTopRightRadius: getUnitValue(2),
    },
    'rounded-t-xl': {
        borderTopLeftRadius: getUnitValue(3),
        borderTopRightRadius: getUnitValue(3),
    },
    'rounded-t-2xl': {
        borderTopLeftRadius: getUnitValue(4),
        borderTopRightRadius: getUnitValue(4),
    },
    'rounded-t-3xl': {
        borderTopLeftRadius: getUnitValue(6),
        borderTopRightRadius: getUnitValue(6),
    },
    'rounded-t-full': {
        borderTopLeftRadius: 9999,
        borderTopRightRadius: 9999,
    },
    'rounded-r-none': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    'rounded-r-sm': {
        borderTopRightRadius: getUnitValue(0.5),
        borderBottomRightRadius: getUnitValue(0.5),
    },
    'rounded-r': {
        borderTopRightRadius: getUnitValue(1),
        borderBottomRightRadius: getUnitValue(1),
    },
    'rounded-r-md': {
        borderTopRightRadius: getUnitValue(1.5),
        borderBottomRightRadius: getUnitValue(1.5),
    },
    'rounded-r-lg': {
        borderTopRightRadius: getUnitValue(2),
        borderBottomRightRadius: getUnitValue(2),
    },
    'rounded-r-xl': {
        borderTopRightRadius: getUnitValue(3),
        borderBottomRightRadius: getUnitValue(3),
    },
    'rounded-r-2xl': {
        borderTopRightRadius: getUnitValue(4),
        borderBottomRightRadius: getUnitValue(4),
    },
    'rounded-r-3xl': {
        borderTopRightRadius: getUnitValue(6),
        borderBottomRightRadius: getUnitValue(6),
    },
    'rounded-r-full': {
        borderTopRightRadius: 9999,
        borderBottomRightRadius: 9999,
    },
    'rounded-b-none': {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    'rounded-b-sm': {
        borderBottomRightRadius: getUnitValue(0.5),
        borderBottomLeftRadius: getUnitValue(0.5),
    },
    'rounded-b': {
        borderBottomRightRadius: getUnitValue(1),
        borderBottomLeftRadius: getUnitValue(1),
    },
    'rounded-b-md': {
        borderBottomRightRadius: getUnitValue(1.5),
        borderBottomLeftRadius: getUnitValue(1.5),
    },
    'rounded-b-lg': {
        borderBottomRightRadius: getUnitValue(2),
        borderBottomLeftRadius: getUnitValue(2),
    },
    'rounded-b-xl': {
        borderBottomRightRadius: getUnitValue(3),
        borderBottomLeftRadius: getUnitValue(3),
    },
    'rounded-b-2xl': {
        borderBottomRightRadius: getUnitValue(4),
        borderBottomLeftRadius: getUnitValue(4),
    },
    'rounded-b-3xl': {
        borderBottomRightRadius: getUnitValue(6),
        borderBottomLeftRadius: getUnitValue(6),
    },
    'rounded-b-full': {
        borderBottomRightRadius: 9999,
        borderBottomLeftRadius: 9999,
    },
    'rounded-l-none': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    'rounded-l-sm': {
        borderTopLeftRadius: getUnitValue(0.5),
        borderBottomLeftRadius: getUnitValue(0.5),
    },
    'rounded-l': {
        borderTopLeftRadius: getUnitValue(1),
        borderBottomLeftRadius: getUnitValue(1),
    },
    'rounded-l-md': {
        borderTopLeftRadius: getUnitValue(1.5),
        borderBottomLeftRadius: getUnitValue(1.5),
    },
    'rounded-l-lg': {
        borderTopLeftRadius: getUnitValue(2),
        borderBottomLeftRadius: getUnitValue(2),
    },
    'rounded-l-xl': {
        borderTopLeftRadius: getUnitValue(3),
        borderBottomLeftRadius: getUnitValue(3),
    },
    'rounded-l-2xl': {
        borderTopLeftRadius: getUnitValue(4),
        borderBottomLeftRadius: getUnitValue(4),
    },
    'rounded-l-3xl': {
        borderTopLeftRadius: getUnitValue(6),
        borderBottomLeftRadius: getUnitValue(6),
    },
    'rounded-l-full': {
        borderTopLeftRadius: 9999,
        borderBottomLeftRadius: 9999,
    },
    'rounded-ss-none': {
        borderStartStartRadius: 0,
    },
    'rounded-ss-sm': {
        borderStartStartRadius: getUnitValue(0.5),
    },
    'rounded-ss': {
        borderStartStartRadius: getUnitValue(1),
    },
    'rounded-ss-md': {
        borderStartStartRadius: getUnitValue(1.5),
    },
    'rounded-ss-lg': {
        borderStartStartRadius: getUnitValue(2),
    },
    'rounded-ss-xl': {
        borderStartStartRadius: getUnitValue(3),
    },
    'rounded-ss-2xl': {
        borderStartStartRadius: getUnitValue(4),
    },
    'rounded-ss-3xl': {
        borderStartStartRadius: getUnitValue(6),
    },
    'rounded-ss-full': {
        borderStartStartRadius: 9999,
    },
    'rounded-se-none': {
        borderStartEndRadius: 0,
    },
    'rounded-se-sm': {
        borderStartEndRadius: getUnitValue(0.5),
    },
    'rounded-se': {
        borderStartEndRadius: getUnitValue(1),
    },
    'rounded-se-md': {
        borderStartEndRadius: getUnitValue(1.5),
    },
    'rounded-se-lg': {
        borderStartEndRadius: getUnitValue(2),
    },
    'rounded-se-xl': {
        borderStartEndRadius: getUnitValue(3),
    },
    'rounded-se-2xl': {
        borderStartEndRadius: getUnitValue(4),
    },
    'rounded-se-3xl': {
        borderStartEndRadius: getUnitValue(6),
    },
    'rounded-se-full': {
        borderStartEndRadius: 9999,
    },
    'rounded-ee-none': {
        borderEndEndRadius: 0,
    },
    'rounded-ee-sm': {
        borderEndEndRadius: getUnitValue(0.5),
    },
    'rounded-ee': {
        borderEndEndRadius: getUnitValue(1),
    },
    'rounded-ee-md': {
        borderEndEndRadius: getUnitValue(1.5),
    },
    'rounded-ee-lg': {
        borderEndEndRadius: getUnitValue(2),
    },
    'rounded-ee-xl': {
        borderEndEndRadius: getUnitValue(3),
    },
    'rounded-ee-2xl': {
        borderEndEndRadius: getUnitValue(4),
    },
    'rounded-ee-3xl': {
        borderEndEndRadius: getUnitValue(6),
    },
    'rounded-ee-full': {
        borderEndEndRadius: 9999,
    },
    'rounded-es-none': {
        borderEndStartRadius: 0,
    },
    'rounded-es-sm': {
        borderEndStartRadius: getUnitValue(0.5),
    },
    'rounded-es': {
        borderEndStartRadius: getUnitValue(1),
    },
    'rounded-es-md': {
        borderEndStartRadius: getUnitValue(1.5),
    },
    'rounded-es-lg': {
        borderEndStartRadius: getUnitValue(2),
    },
    'rounded-es-xl': {
        borderEndStartRadius: getUnitValue(3),
    },
    'rounded-es-2xl': {
        borderEndStartRadius: getUnitValue(4),
    },
    'rounded-es-3xl': {
        borderEndStartRadius: getUnitValue(6),
    },
    'rounded-es-full': {
        borderEndStartRadius: 9999,
    },
    'rounded-tl-none': {
        borderTopLeftRadius: 0,
    },
    'rounded-tl-sm': {
        borderTopLeftRadius: getUnitValue(0.5),
    },
    'rounded-tl': {
        borderTopLeftRadius: getUnitValue(1),
    },
    'rounded-tl-md': {
        borderTopLeftRadius: getUnitValue(1.5),
    },
    'rounded-tl-lg': {
        borderTopLeftRadius: getUnitValue(2),
    },
    'rounded-tl-xl': {
        borderTopLeftRadius: getUnitValue(3),
    },
    'rounded-tl-2xl': {
        borderTopLeftRadius: getUnitValue(4),
    },
    'rounded-tl-3xl': {
        borderTopLeftRadius: getUnitValue(6),
    },
    'rounded-tl-full': {
        borderTopLeftRadius: 9999,
    },
    'rounded-tr-none': {
        borderTopRightRadius: 0,
    },
    'rounded-tr-sm': {
        borderTopRightRadius: getUnitValue(0.5),
    },
    'rounded-tr': {
        borderTopRightRadius: getUnitValue(1),
    },
    'rounded-tr-md': {
        borderTopRightRadius: getUnitValue(1.5),
    },
    'rounded-tr-lg': {
        borderTopRightRadius: getUnitValue(2),
    },
    'rounded-tr-xl': {
        borderTopRightRadius: getUnitValue(3),
    },
    'rounded-tr-2xl': {
        borderTopRightRadius: getUnitValue(4),
    },
    'rounded-tr-3xl': {
        borderTopRightRadius: getUnitValue(6),
    },
    'rounded-tr-full': {
        borderTopRightRadius: 9999,
    },
    'rounded-br-none': {
        borderBottomRightRadius: 0,
    },
    'rounded-br-sm': {
        borderBottomRightRadius: getUnitValue(0.5),
    },
    'rounded-br': {
        borderBottomRightRadius: getUnitValue(1),
    },
    'rounded-br-md': {
        borderBottomRightRadius: getUnitValue(1.5),
    },
    'rounded-br-lg': {
        borderBottomRightRadius: getUnitValue(2),
    },
    'rounded-br-xl': {
        borderBottomRightRadius: getUnitValue(3),
    },
    'rounded-br-2xl': {
        borderBottomRightRadius: getUnitValue(4),
    },
    'rounded-br-3xl': {
        borderBottomRightRadius: getUnitValue(6),
    },
    'rounded-br-full': {
        borderBottomRightRadius: 9999,
    },
    'rounded-bl-none': {
        borderBottomLeftRadius: 0,
    },
    'rounded-bl-sm': {
        borderBottomLeftRadius: getUnitValue(0.5),
    },
    'rounded-bl': {
        borderBottomLeftRadius: getUnitValue(1),
    },
    'rounded-bl-md': {
        borderBottomLeftRadius: getUnitValue(1.5),
    },
    'rounded-bl-lg': {
        borderBottomLeftRadius: getUnitValue(2),
    },
    'rounded-bl-xl': {
        borderBottomLeftRadius: getUnitValue(3),
    },
    'rounded-bl-2xl': {
        borderBottomLeftRadius: getUnitValue(4),
    },
    'rounded-bl-3xl': {
        borderBottomLeftRadius: getUnitValue(6),
    },
    'rounded-bl-full': {
        borderBottomLeftRadius: 9999,
    },
};
