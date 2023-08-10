import { FlexAlignType } from 'react-native';

export const alignSelf: Record<string, Record<string, 'auto' | FlexAlignType | undefined>> = {
    'self-auto': {
        alignSelf: 'auto',
    },
    'self-start': {
        alignSelf: 'flex-start',
    },
    'self-end': {
        alignSelf: 'flex-end',
    },
    'self-center': {
        alignSelf: 'center',
    },
    'self-stretch': {
        alignSelf: 'stretch',
    },
    'self-baseline': {
        alignSelf: 'baseline',
    },
};
