import Button from '@/components/Button'
import { HelloWave } from '@/components/HelloWave'
import Input from '@/components/Input'
import { ThemedText } from '@/components/ThemedText'
import useLogin from '@/hooks/useLogin'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function LoginScreen() {

    const {email, handleLogin, password,onChangeEmail, onChangePassword} = useLogin()
    return (
        <View style={styles.container}>
            <ThemedText type='title' lightColor='#fff' > Inicia sesión <HelloWave /></ThemedText>

            <View style={styles.containerInputs}>
                <Input type='email-address' placeholder='Email' value={email} onChange={onChangeEmail} />
                <Input type='visible-password' placeholder='Contraseña' value={password} onChange={onChangePassword} />
                <Button title='Iniciar' onSubmit={handleLogin} />

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
