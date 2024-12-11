import { IGastos } from '@/interfaces/gastos.interface'
import { useStoreApp } from '@/store/useStroreApp'
import { addExpense } from '@/utils/supabase.crud'
import React from 'react'
import { Alert } from 'react-native'

export default function useFormulario() {
    const [nameGasto, setNameGasto] = React.useState('')
    const [valorGasto, setValorGasto] = React.useState('')

    const {
        categoria,
        presupuesto,
        setGasto,
        disponible,
        setGastado,
        setCategoria,
        isCheck,
        setIsCheck
    } = useStoreApp()

    const toggleIsOpen = () => setIsCheck(isCheck)

    const onNameChange = (value: string) => {
        setNameGasto(value)
    }
    const onValorChange = (value: string) => {
        setValorGasto(value)
    }

    const onSubmit = () => {        
        const gasto: IGastos = {
            nombreGasto: nameGasto,
            monto: Number(valorGasto),
            categoria: categoria,
        }
        addExpense(gasto)
        setGastado(Number(valorGasto))
        resetForm()
        setGasto(gasto)
    }
    
    
    const resetForm = () => {
        setNameGasto('')
        setValorGasto('')
        setCategoria('')
    }


    return {
        nameGasto,
        valorGasto,
        categoria,
        disponible,
        presupuesto,
        onNameChange,
        onValorChange,
        onSubmit,
        toggleIsOpen,
        isCheck
    }
}
