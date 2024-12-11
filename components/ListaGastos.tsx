import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { Collapsible } from './Collapsible'
import { StyleSheet, View } from 'react-native'
import { useStoreApp } from '@/store/useStroreApp'
import DollarIcon from './icons/DollarIcon'
import UserIcon from './icons/UserIcon'
import { formatMoney } from '@/utils/formatMonet'
import useListGastos from '@/hooks/useListGastos'
import { CATEGORY_CONFIG } from '@/utils/config'

export default function ListaGastos() {
    // const { gasto } = useStoreApp()
    const { gastos, gastosXMes } = useListGastos()
    const width = 60
    const height = 60

    return (
        <>
            <ThemedView style={styles.titleContainer} >
                <ThemedText type="title">Listado  de tus Gastos</ThemedText>
            </ThemedView >
            {/* <ThemedText> </ThemedText>
            <Collapsible title={}>
            </Collapsible> */}
            {
                //  gastos.map((item, index) => (
                // <Collapsible key={index} title={item.getName()}>
                //     {
                //         item.getCategory() === 'Arriendo' && (<View style={styles.contentContainer}>
                //             <DollarIcon width={width} height={height} color='gray' />
                //             <View>
                //                 <ThemedText>Valor: {formatMoney(item.getAmount())}</ThemedText>
                //                 <ThemedText>Categoría: {item.getCategory()}</ThemedText>
                //                 <ThemedText>Fecha: {item.getCreatedAt().toString()}</ThemedText>
                //             </View>
                //         </View>)
                //     }
                //     {
                //         item.getCategory() === 'Comida' && (<View style={styles.contentContainer}>
                //             <UserIcon width={width} height={height} color='gray' />
                //             <View>
                //                 <ThemedText style={{color:'gray'}}>Valor: {formatMoney(item.getAmount())}</ThemedText>
                //                 <ThemedText style={{color:'gray'}}>Categoría: {item.getCategory()}</ThemedText>
                //                 <ThemedText style={{color:'gray'}}>Fecha: {item.getCreatedAt().toString()}</ThemedText>
                //             </View>
                //         </View>)
                //     }
                //     {
                //         item.getCategory() === 'Mercado' && (<View style={styles.contentContainer}>
                //             <UserIcon width={width} height={height} color='gray' />
                //             <View>
                //                 <ThemedText style={{color:'gray'}}>Valor: {formatMoney(item.getAmount())}</ThemedText>
                //                 <ThemedText style={{color:'gray'}}>Categoría: {item.getCategory()}</ThemedText>
                //                 <ThemedText style={{color:'gray'}}>Fecha: {item.getCreatedAt().toString()}</ThemedText>
                //             </View>
                //         </View>)
                //     }



                // </Collapsible>

                gastosXMes.map((item, index) => {
                    const category = item.getCategory() as keyof typeof CATEGORY_CONFIG;
                    const categoryConfig = CATEGORY_CONFIG[category] || {};
                    const Icon = categoryConfig.icon || null;
                    const textStyle = categoryConfig.textStyle || {};

                    return (
                        <Collapsible key={index} title={item.getName()}>
                            <View style={styles.contentContainer}>
                                {Icon && Icon(24, 24)}
                                <View>
                                    <ThemedText style={textStyle}>Valor: {formatMoney(item.getAmount())}</ThemedText>
                                    <ThemedText style={textStyle}>Categoría: {item.getCategory()}</ThemedText>
                                    <ThemedText style={textStyle}>Fecha: {item.getCreatedAt().toString()}</ThemedText>
                                </View>
                            </View>
                        </Collapsible>
                    );
                })

            }
        </>

    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
});
