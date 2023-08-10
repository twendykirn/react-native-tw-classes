export const flexDirection: Record<
    string,
    Record<string, 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined>
> = {
    'flex-row': {
        flexDirection: 'row',
    },
    'flex-row-reverse': {
        flexDirection: 'row-reverse',
    },
    'flex-col': {
        flexDirection: 'column',
    },
    'flex-col-reverse': {
        flexDirection: 'column-reverse',
    },
};
