import { IGastos } from '@/interfaces/gastos.interface'
import React from 'react'
import { getExpenses } from '@/utils/supabase.crud'

export default function useListGastos() {
    const [gastos, setGastos] = React.useState<Gastos[]>([])

    React.useMemo(async () => {
        const data = await getExpenses()

        const gastos = data.map((gasto) => {
            return new Gastos(
                gasto.id,
                gasto.created_at,
                gasto.name_expense,
                gasto.value_expense,
                gasto.categorie_expense,
            )
        })
        setGastos(gastos)
    }, [gastos])

    const gastosMes = gastos.filter(({getCreatedAt})=>{
        const fecha = new Date(getCreatedAt())
        const ahora = new Date()

        return fecha.getFullYear() === ahora.getFullYear() && fecha.getMonth() === ahora.getMonth()
    })

    const gastosXMes = gastosMes.sort((a, b)=>{
        const fechaA = new Date(a.getCreatedAt())
        const fechaB = new Date(b.getCreatedAt())
        const hoy = new Date()

        const esHoyA = fechaA.getDate() === hoy.getDate() && fechaA.getMonth() === hoy.getMonth() && fechaA.getFullYear() === hoy.getFullYear();
        const esHoyB = fechaB.getDate() === hoy.getDate() && fechaB.getMonth() === hoy.getMonth() && fechaB.getFullYear() === hoy.getFullYear();

        if(esHoyA && !esHoyB) return -1;
        if(!esHoyA && esHoyB) return 1;

        return fechaB.getTime() - fechaA.getTime();

    })



    return {
        gastos,
        gastosXMes
    }
}

class Gastos {
    constructor(
        private _id: number,
        private _created_at: string,
        private _name: string,
        private _amount: number,
        private _category: string,
    ) { }

    public getId() {
        return this._id
    }
    public getCreatedAt() {
        return new Date(this._created_at).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
    }
    public getName() {
        return this._name
    }
    public getAmount() {
        return this._amount
    }
    public getCategory() {
        return this._category
    }



}
