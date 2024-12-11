import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CheckIcon from './icons/CheckIcon'
import { ICategory, ICategoryList } from '@/interfaces/categories.interfaces';
import { useStoreApp } from '@/store/useStroreApp';

const CATEGORIES: ICategoryList[] = [
    {
        key: 1,
        name: 'Mercado',
        icon: <CheckIcon color='white' />,
        isCheck: false
    },
    {
        key: 2,
        name: 'Arriendo',
        icon: <CheckIcon color='white' />,
        isCheck: false
    },
    {
        key: 3,
        name: 'Comida',
        icon: <CheckIcon color='white' />,
        isCheck: false
    },
]

export default function Select() {
    const [categories, setCategories] = useState<ICategoryList[]>(CATEGORIES);
    const { setIsCheck, setCategoria } = useStoreApp()

    const handleCheck = (category: ICategoryList) => {
        setCategories((prevCategories) =>
            prevCategories.map((prevCategory) =>
                prevCategory.key === category.key
                    ? { ...prevCategory, isCheck: !prevCategory.isCheck }
                    : prevCategory
            )
        );
        setCategoria(category.name)
        setIsCheck(false)
    }

    return (

        <View style={styles.container}>
            {
                categories.map((category, index) =>
                    <TouchableOpacity key={index} style={styles.containerText} onPress={() => handleCheck(category)}>
                        <Text style={styles.text}>
                            {category.name}
                        </Text>
                        {category.isCheck && category.icon}
                    </TouchableOpacity>)
            }
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 'auto',
        borderRadius: 24,
        marginVertical: 10,
        backgroundColor: '#rgba(255,255,255,0.1)',

    },
    containerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#rgba(255,255,255,0.1)',
        borderBottomWidth: 1,
        marginHorizontal: 10
    },
    text: {
        fontSize: 16,
        color: 'white',

    }
})
