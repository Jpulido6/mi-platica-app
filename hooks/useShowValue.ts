import { IGastos } from "@/interfaces/gastos.interface"
import { useStoreApp } from "@/store/useStroreApp"
import { getAmount } from "@/utils/supabase.crud"
import { useRouter } from "expo-router"
import { useEffect, useState } from "react"

export const useHero = () => {
    const [showPresupuesto, setShowPresupuesto] = useState<boolean>(true)
    const [showCuenta, setShowCuenta] = useState<boolean>(true)
    const { setShowValue, showValue, name, isFirstTime, gastado } = useStoreApp()
    const [disponible, setDisponible] = useState<number>(0)
    const [totalGastado, setTotalGastado] = useState<number>(0)
    const [presupuesto, setPresupuesto] = useState<number>(0)

    const router = useRouter()
    useEffect(() => {
        const loadAmount = async () => {
            const data = await getAmount()
            console.log('pres=>',data)
            if (data) {
                setDisponible(data.currentAmount)
                const total = data.inicialAmount - data.currentAmount
                setPresupuesto(data.inicialAmount)
                setTotalGastado(total)
            }
        }
        loadAmount()
    }, [])

    const config = () => {
        router.replace('/setup')
    }

    const toggleCuenta = () => setShowCuenta(!showCuenta)
    const toggleShowPresupuesto = () => {
        setShowPresupuesto(!showPresupuesto)
        setShowValue(showPresupuesto)
    }

    return {
        toggleShowPresupuesto,
        showPresupuesto,
        showValue,
        presupuesto,
        config,
        name,
        isFirstTime,
        disponible,
        toggleCuenta,
        showCuenta,
        gastado,
        totalGastado
    }
}