import { useStoreApp } from '@/store/useStroreApp'
import { addInitialAmount } from '@/utils/supabase.crud'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'

export default function useSetup() {
    const [names, setNames] = React.useState('')
    const [budget, setBudget] = React.useState('')
    const { setPresupuesto, setName, setIsFirstTime } = useStoreApp()

    const router = useRouter();

    const handleSetup = () => {
        if (names.length > 0 && Number(budget) > 0) {
            setName(names)
            addInitialAmount(Number(budget))
            setIsFirstTime(false)
            router.push('/(tabs)/')
        }
    }


    // const handleSetup = () => {
    //     if (names.length > 0 && Number(budget) > 0) {
    //         setName(names)
    //         setPresupuesto(Number(budget))
    //         setIsFirstTime(false)
    //         router.push('/(tabs)/')
    //     }

    // }
    return {
        names,
        setNames,
        budget,
        setBudget,
        handleSetup,
        setIsFirstTime
    }
}
