import { FlexAlignType } from 'react-native';

export const alignItems: Record<string, Record<string, FlexAlignType | undefined>> = {
    'items-center': {
        alignItems: 'center',
    },
    'items-start': {
        alignItems: 'flex-start',
    },
    'items-end': {
        alignItems: 'flex-end',
    },
    'items-baseline': {
        alignItems: 'baseline',
    },
    'items-stretch': {
        alignItems: 'stretch',
    },
};
