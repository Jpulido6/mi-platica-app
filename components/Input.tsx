import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput, TextInputProps } from 'react-native'
type TextType = KeyboardTypeOptions

interface InputProps {
    type: TextType
    value: string
    onChange: (value: string) => void
    placeholder?: string
    props?: TextInputProps
}
export default function Input({ type, value, onChange, placeholder, props }: InputProps) {
    return (
        <TextInput
            {...props}
            keyboardType={type}
            value={value}
            style={styles.input}
            onChangeText={onChange}
            placeholder={placeholder}
            placeholderTextColor={'#fff'}
            selectionColor={'#fff'}
        />

    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 8,
        padding: 10,
        borderColor: '#ccc',
        color: '#fff',
        fontSize: 16,
    },

})
