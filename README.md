# react-native-tw-classes

A small package that allows you to use classes and some basic logic from Tailwind.

You can pass own custom classes if you want.

-   No dependencies
-   Simple and clear API

## Installation

```
npm install react-native-tw-classes
```

## Usage

Import needed classes at the beginning of the app:

```ts
// App.tsx

import * as React from 'react';
import {
    initStyles,
    alignContent,
    alignItems,
    alignSelf,
    flexBasis,
    flexDirection,
    flexGap,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    aspectRatio,
    display,
    overflow,
    position,
    topRightBottomLeft,
    zIndex,
    opacity,
    borderRadius,
    borderStyle,
    borderWidth,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    width,
    margin,
    padding,
} from 'react-native-tw-classes';

initStyles({
    classes: {
        ...alignContent,
        ...alignItems,
        ...alignSelf,
        ...flexBasis,
        ...flexDirection,
        ...flexGap,
        ...flexGrow,
        ...flexShrink,
        ...flexWrap,
        ...justifyContent,
        ...aspectRatio,
        ...display,
        ...overflow,
        ...position,
        ...topRightBottomLeft,
        ...zIndex,
        ...opacity,
        ...borderRadius,
        ...borderStyle,
        ...borderWidth,
        ...height,
        ...maxHeight,
        ...maxWidth,
        ...minHeight,
        ...minWidth,
        ...width,
        ...margin,
        ...padding,
    },
});

const App = () => {
    return <MyComponent />;
};

export default App;
```

Use your classes:

```tsx
// MyComponent.tsx

import * as React from 'react';
import { tw } from 'react-native-tw-classes';

const MyComponent = () => {
    return (
        <View style={tw('justify-end flex-row gap-2')}>
            <Text>Example 1</Text>
            <Text>Example 2</Text>
        </View>
    );
};
```

You can also use StyleSheet or inline styles at the same time, it will be merged with classes automatically:

```tsx
// MyComponent.tsx

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tw } from 'react-native-tw-classes';

const MyComponent = () => {
    return (
        <View style={tw('justify-center items-center')}>
            <View style={tw('justify-end flex-row gap-2', styles.container)}>
                <Text>Example 1</Text>
                <Text>Example 2</Text>
            </View>
            <View style={tw('justify-end flex-row gap-2', { backgroundColor: 'red' })}>
                <Text>Example 3</Text>
                <Text>Example 4</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
    },
});
```

Package supports OS and colorTheme mods out of the box:

```tsx
// MyComponent.tsx

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tw } from 'react-native-tw-classes';

const MyComponent = () => {
    return (
        <View style={tw('justify-center android:items-center')}>
            <View style={tw('justify-end dark:flex-row gap-2', styles.container)}>
                <Text>Example 1</Text>
                <Text>Example 2</Text>
            </View>
            <View style={tw('justify-end ios:flex-row gap-2', { backgroundColor: 'red' })}>
                <Text>Example 3</Text>
                <Text>Example 4</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
    },
});
```

## Colors

Package doesn't have default colors as Tailwind, so you need to add them by yourself in init function.
It creates `borderColor`, `color` and `backgroundColor` classes automatically if it detects at least one added color.

Currently parser accepts only Object Colors as in the example.

Import needed classes at the beginning of the app:

```ts
// App.tsx

import * as React from 'react';
import { alignItems, flexDirection, flexGap, justifyContent } from 'react-native-tw-classes';

initStyles({
    classes: {
        ...alignItems,
        ...flexDirection,
        ...flexGap,
        ...justifyContent,
    },
    colors: {
        tahiti: {
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
        },
        black: {
            1000: '#000000',
        },
    },
});

const App = () => {
    return <MyComponent />;
};

export default App;
```

Use `borderColor`, `color` or `backgroundColor` classes in your code:

```tsx
// MyComponent.tsx

import * as React from 'react';
import { tw } from 'react-native-tw-classes';

const MyComponent = () => {
    return (
        <View style={tw('bg-tahiti-100 border-black-1000')}>
            <Text>Example 1</Text>
            <Text>Example 2</Text>
        </View>
    );
};
```
