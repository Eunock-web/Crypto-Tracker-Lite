import { View, type ViewProps } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const colorScheme = useColorScheme() ?? 'light';
    const backgroundColor = colorScheme === 'light' ? (lightColor ?? '#fff') : (darkColor ?? '#151718');

    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
