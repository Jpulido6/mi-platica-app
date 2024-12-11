import { Ionicons } from "@expo/vector-icons";
import { Route } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AnimatedPage } from "../AnimatedPage";
import { useCallback, useState } from "react";
import { useSharedValue } from "react-native-reanimated";


const { width } = Dimensions.get('window');


export function CustomTabBar({ state, navigation, descriptors }: BottomTabBarProps) {
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);
    const router = useRouter();

    const toggleBalance = useCallback(() => {
        setIsBalanceVisible(!isBalanceVisible);
    }, [isBalanceVisible]);

    return (
        <View style={styles.container}>
            <AnimatedPage
                isVisible={isBalanceVisible}
                onClose={toggleBalance}
            />

            {/* Floating Balance Button */}
            {!isBalanceVisible && (
                <TouchableOpacity
                    style={styles.floatingButton}
                    onPress={toggleBalance}
                >
                    <Ionicons name="logo-usd" size={24} color="#fff" />
                </TouchableOpacity>
            )}

            {/* Bottom Tab Bar */}
            <View style={styles.tabBar}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.title ?? route.name;
                    const isFocused = state.index === index;

                    if (route.name === 'formulario') return null;

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={() => {
                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                                });

                                if (!isFocused && !event.defaultPrevented) {
                                    navigation.navigate(route.name);
                                }
                            }}
                            style={styles.tab}
                        >
                            <Text style={[
                                styles.tabText,
                                { color: isFocused ? '#E41E7C' : '#8E8E93' }
                            ]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        zIndex: 1,
        backgroundColor: '#E41E7C',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 16,
        height: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        paddingHorizontal: 16,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 12,
        marginTop: 4,
    },
})