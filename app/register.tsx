import React from 'react'
import { HelloWave } from '@/components/HelloWave'
import { StyleSheet, View } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import Input from '@/components/Input'
import useRegister from '@/hooks/useRegister'
import Button from '@/components/Button'

export default function RegisterScreen() {

    const { registerUser, email,onChangeEmail,password,onChangePassword } = useRegister()
    return (
        <View style={styles.container}>
            <ThemedText type='title' lightColor='#fff' > Regístrate <HelloWave /></ThemedText>

            <View style={styles.containerInputs}>
                <Input type='email-address' placeholder='Email' value={email} onChange={onChangeEmail } />
                <Input type='visible-password' placeholder='Password' value={password} onChange={ onChangePassword} />
                <Button title='Iniciar' onSubmit={registerUser} />

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
        width: '100%',
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
