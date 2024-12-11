import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const { width, height } = Dimensions.get('window');
interface AnimatedPageProps {
    isVisible: boolean;
    onClose: () => void;
}

export const AnimatedPage = ({ isVisible, onClose }: AnimatedPageProps) => {
    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);
    const buttonPosition = useSharedValue({ x: width / 2 - 30, y: height - 100 });

    useEffect(() => {
        if (isVisible) {
            scale.value = withSpring(1, { damping: 12 });
            opacity.value = withSpring(1);
        } else {
            scale.value = withSpring(0);
            opacity.value = withSpring(0);
        }
    }, [isVisible]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            position: 'absolute',
            width: interpolate(scale.value, [0, 1], [60, width]),
            height: interpolate(scale.value, [0, 1], [60, height]),
            borderRadius: interpolate(scale.value, [0, 1], [30, 0]),
            backgroundColor: '#E41E7C',
            transform: [{ scale: scale.value }],
            opacity: opacity.value,
            left: interpolate(scale.value, [0, 1], [buttonPosition.value.x, 0]),
            top: interpolate(scale.value, [0, 1], [buttonPosition.value.y, 0]),
        };
    });

    const contentStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scale.value, [0.5, 1], [0, 1]),
            transform: [{ scale: interpolate(scale.value, [0.5, 1], [0.7, 1]) }],
        };
    });

    return (
        <Animated.View style={animatedStyle}>
            <Animated.View style={[styles.pageContent, contentStyle]}>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={onClose}
                >
                    <Ionicons name="add" size={24} color="#fff" />
                </TouchableOpacity>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceTitle}>Balance Disponible</Text>
                    <Text style={styles.balanceAmount}>$100,000.00</Text>
                    <Text style={styles.totalBalance}>Total: $1,525,780.67</Text>
                </View>
            </Animated.View>
        </Animated.View>
    );
};



const styles = StyleSheet.create({
    pageContent: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        padding: 10,
    },
    balanceContainer: {
        alignItems: 'center',
    },
    balanceTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    balanceAmount: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    totalBalance: {
        color: '#fff',
        fontSize: 16,
        opacity: 0.8,
    },
})
