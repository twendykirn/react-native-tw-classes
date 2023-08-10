export const justifyContent: Record<
    string,
    Record<string, 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined>
> = {
    'justify-start': {
        justifyContent: 'flex-start',
    },
    'justify-end': {
        justifyContent: 'flex-end',
    },
    'justify-center': {
        justifyContent: 'center',
    },
    'justify-between': {
        justifyContent: 'space-between',
    },
    'justify-around': {
        justifyContent: 'space-around',
    },
    'justify-evenly': {
        justifyContent: 'space-evenly',
    },
};
