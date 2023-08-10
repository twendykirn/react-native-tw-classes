export const alignContent: Record<
    string,
    Record<string, 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | undefined>
> = {
    'content-center': {
        alignContent: 'center',
    },
    'content-start': {
        alignContent: 'flex-start',
    },
    'content-end': {
        alignContent: 'flex-end',
    },
    'content-between': {
        alignContent: 'space-between',
    },
    'content-around': {
        alignContent: 'space-around',
    },
    'content-stretch': {
        alignContent: 'stretch',
    },
};
