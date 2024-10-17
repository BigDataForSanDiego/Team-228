/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. for example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#000';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#ffffff',
    background: '#f2613f',
    tint: tintColorLight,
    icon: '#000',
    tabIconDefault: '#000',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#f2613f',
    tint: tintColorDark,
    icon: '#fff',
    tabIconDefault: '#fff',
    tabIconSelected: tintColorDark,
  },
};
