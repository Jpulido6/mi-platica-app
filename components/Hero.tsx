import { useHero } from '@/hooks/useShowValue';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EyeIcon from './icons/EyeIcon';
import EyeOffIcon from './icons/EyeoffIcon';
import UserIcon from './icons/UserIcon';
import SettingIcon from './icons/SettingsIcon';
import { formatMoney } from '@/utils/formatMonet';
import ArrowDownIcon from './icons/ArrowDownIcon';
import ArrowUpIcon from './icons/ArrowUpIcon';
import { ThemedText } from './ThemedText';
import CloseIcon from './icons/CloseIcon';

export default function Hero() {
    const {
        toggleShowPresupuesto,
        showValue,
        presupuesto,
        config,
        name,
        isFirstTime,
        disponible,
        showCuenta,
        toggleCuenta,
        totalGastado
    } = useHero()

    const [heightAnim] = React.useState(new Animated.Value(0));
    React.useEffect(() => {
        Animated.timing(heightAnim, {
            toValue: showCuenta ? 0: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    }, [showCuenta]);

    const animatedHeight = heightAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['35%', '100%']
    });
    // kiBVoCCrxs7yAgow

    const width = 24
    const height = 24

    const totalBudgetModal = () => {
        return (
            <>
                <TouchableOpacity style={styles.close} onPress={toggleCuenta}>
                    <CloseIcon width={width} height={height} color='white' />
                </TouchableOpacity>

                <View style={styles.containerTotal}>
                    <ThemedText type='subtitle' style={styles.total}>Presupuesto: {presupuesto > 0 ? formatMoney(presupuesto) : 0}</ThemedText>
                    <ThemedText type='subtitle' style={styles.total}>Gastado:    {totalGastado > 0 ? formatMoney(totalGastado) : 0}</ThemedText>
                    <ThemedText type='subtitle' style={styles.total}>Disponible: {disponible > 0 ? formatMoney(disponible) : 0}</ThemedText>
                </View>
            </>
        )
    }
    const sectionHero = () => {
        return (
            <>
                <View style={styles.header}>
                    <View style={styles.userSection}>
                        <UserIcon color="#fff" />
                        <Text style={styles.greeting}>
                            <Text style={styles.greetingPrefix}>Hola </Text>
                            <Text style={styles.username}>{name ? `,${name}` : ''}</Text>
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        {
                            isFirstTime ?
                                <TouchableOpacity onPress={config}>
                                    <SettingIcon color='white' />
                                </TouchableOpacity>
                                : null
                        }
                    </View>
                </View>

                <View style={styles.balanceContainer}>
                    <View style={styles.balanceRow}>
                        <Text style={styles.balanceLabel}>Disponible</Text>
                        <TouchableOpacity onPress={toggleShowPresupuesto}>
                            {!showValue ? <EyeIcon width={width} height={height} color='white' /> : <EyeOffIcon width={width} height={height} color='white' />}
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.balanceAmount}>
                        {showValue ? `${disponible != 0 ? formatMoney(disponible) : formatMoney(presupuesto)}` : "$ ***.***"}
                    </Text>

                    <Text style={styles.totalBalance}>
                        Total: {presupuesto > 0 ? formatMoney(presupuesto) : 0}
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={toggleCuenta}>
                        <Text style={styles.buttonText}>Tu Cuenta</Text>
                        <ArrowDownIcon color='white' width={width} height={height} />
                    </TouchableOpacity>
                </View>
            </>

        )
    }
    return (
        <Animated.View style={[styles.container, { height: animatedHeight }]}>
            {
                showCuenta ? (
                    sectionHero()
                ) : (
                    totalBudgetModal()
                )
            }
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#7D8DF6',
        // padding: 20,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // zIndex: 10
        backgroundColor: '#7D8DF6',
        padding: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        // Nuevas propiedades para crear efecto hexagonal
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,        
        // Sombra para mejor efecto visual
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greeting: {
        marginLeft: 10,
        color: '#fff',
    },
    greetingPrefix: {
        color: '#rgba(255,255,255,0.7)',
    },
    username: {
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    helpIcon: {
        marginLeft: 15,
    },
    balanceContainer: {
        marginTop: 10,
    },
    balanceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    balanceLabel: {
        color: '#rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    balanceAmount: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'SpaceMono',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    totalBalance: {
        color: '#rgba(255,255,255,0.7)',
        fontSize: 14,
        marginBottom: 15,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#rgba(255,255,255,0.1)',
        padding: 12,
        borderRadius: 25,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        marginRight: 5,
        fontSize: 16,
    },
    containerTotal: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        borderRadius: 24,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10
    },
    close: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#rgba(255,255,255,0.1)',
        alignSelf: 'center',
        marginBottom: 10
    },
    total: {
        color: 'white'
    }
});


//#A1CEDC