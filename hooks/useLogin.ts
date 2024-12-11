import { login } from '@/utils/supabase.crud'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert } from 'react-native'

export default function useLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const onChangeEmail = (value: string) => setEmail(value)
    const onChangePassword = (value: string) => setPassword(value)

    const handleLogin = async () => {
        const response = await login(email, password);
        if (response.success) {
            Alert.alert('Inicio de sesión exitoso');
            router.push('/(tabs)');
        } else {
            Alert.alert('Error', response.error || 'Error al iniciar sesión');
        }

    }
    return {
        email,
        password,
        onChangeEmail,
        onChangePassword,
        handleLogin
    }
}
