import { register } from '@/utils/supabase.crud'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert } from 'react-native'

export default function useRegister() {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const router = useRouter()


    const onChangeEmail = (value:string)=> setEmail(value)
    const onChangePassword = (value:string)=> setPassword(value)

    const registerUser = async () => {
        const response = await register(email, password)
        if(response.success){
            Alert.alert('Registro Exitoso')
            router.push('/setup')
        }
        else{
            Alert.alert('Error al registrar')
        }

    }
    return {
        registerUser,
        email,
        onChangeEmail,
        password,
        onChangePassword
    }
}
