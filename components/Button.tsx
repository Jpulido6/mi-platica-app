import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ThemedText } from './ThemedText'

interface ButtonProps{
    title: string
    onSubmit?: ()=>void
}

export default function Button({title, onSubmit}: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <ThemedText type='subtitle'>{title}</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#rgba(255,255,255,0.1)',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        marginRight: 5,
        fontSize: 16,
    },
})
