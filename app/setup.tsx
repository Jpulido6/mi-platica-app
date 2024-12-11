import { HelloWave } from '@/components/HelloWave'
import Input from '@/components/Input'
import { ThemedText } from '@/components/ThemedText'
import useSetup from '@/hooks/useSetup'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '@/components/Button'


export default function SetupScreen() {
    const { budget, names, setNames, setBudget, handleSetup} = useSetup()
    return (
        <View style={styles.container}>
            <ThemedText type='title' lightColor='#fff' > Bienvenido <HelloWave /></ThemedText>

            <View style={styles.containerInputs}>
                <Input type='default' placeholder='Nombres' value={names} onChange={setNames} />
                <Input type='numeric' placeholder='Presupuesto' value={budget} onChange={setBudget} />
                <Button title='Guardar' onSubmit={handleSetup} />

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7D8DF6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerInputs: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5
    }
})
