import Button from '@/components/Button'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon'
import ArrowUpIcon from '@/components/icons/ArrowUpIcon'
import Input from '@/components/Input'
import Select from '@/components/Select'
import { ThemedText } from '@/components/ThemedText'
import useFormulario from '@/hooks/useFormulario'
import { useStoreApp } from '@/store/useStroreApp'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function formularioScreen() {
    const { categoria, nameGasto, onNameChange, isCheck, toggleIsOpen, valorGasto, onValorChange, onSubmit } = useFormulario()
    return (
        <View style={styles.container}>
            <ThemedText type='title'>Agregar Gasto</ThemedText>
            <Input type='default' placeholder='Nombre del gasto' value={nameGasto} onChange={onNameChange} />
            <Input type='numeric' placeholder='Valor del gasto' value={valorGasto} onChange={onValorChange} />
            <TouchableOpacity style={styles.button} onPress={toggleIsOpen}>
                <Text style={styles.buttonText}>{categoria ? categoria : 'Selecciona categoría'}</Text>
                {
                    isCheck ? <ArrowUpIcon color='white' /> : <ArrowDownIcon color='white' />
                }
            </TouchableOpacity>
            {
                isCheck && <Select />
            }            
            <Button title='Guardar' onSubmit={() => onSubmit()} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#7D8DF6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '80%',
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

})
