import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Check } from 'react-native-feather';

import theme from '../config/theme';

const styles = StyleSheet.create({
    border: {
        backgroundColor: theme.colors.bg,
        borderColor: theme.colors.lightGray,
        borderWidth: 2,
        borderRadius: 8,
    },
    position: {
        position: 'absolute',
        alignSelf: 'center',
        justifySelf: 'center',
        paddingTop: 2,
    },
});

type Props = {
    size?: number;
    color?: string;
    checked: boolean;
};

const Checkbox = ({
    size = 30,
    color = theme.colors.saucy,
    checked,
}: Props) => {
    const renderUnchecked = () => (
        <View style={[styles.border, { height: size, width: size }]} />
    );

    const renderChecked = () => (
        <View
            style={[
                styles.border,
                { height: size, width: size, backgroundColor: color },
            ]}
        >
            <View style={styles.position}>
                <Check color={theme.colors.bg} />
            </View>
        </View>
    );

    return checked ? renderChecked() : renderUnchecked();
};

export default Checkbox;
