import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'PalanquinDark',
  },
  defaultSemiBold: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'PalanquinDark',
  },
  title: {
    fontSize: 48,
    fontWeight: 'regular',
    lineHeight: 32,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 5,
    fontFamily: 'OrelegaOne',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'PalanquinDark',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#00ffee',
    fontFamily: 'PalanquinDark',
  },
});
