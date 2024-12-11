import { ICategory } from "@/interfaces/categories.interfaces";
import { IGastos } from "@/interfaces/gastos.interface";
import { create } from "zustand";


interface Store {
    presupuesto: number,
    setPresupuesto: (presupuesto: number) => void,
    resetPresupuesto: () => void,
    showValue:boolean,
    setShowValue: (showValue: boolean) => void
    name:string
    setName: (name: string) => void
    disponible:number
    setDisponible: (disponible: number) => void
    gastado:number
    setGastado: (gastado: number) => void
    isCheck:boolean
    setIsCheck: (isCheck: boolean) => void
    categoria: string,
    setCategoria: (categoria: string) => void
    gasto:IGastos[]
    setGasto: (gasto: IGastos) => void
    isFirstTime:boolean
    setIsFirstTime: (isFirstTime: boolean) => void
}

export const useStoreApp = create<Store>((set) => ({
    presupuesto: 0,
    showValue: false,
    name:"",
    disponible:0,
    gastado:0,
    isCheck:false,
    categoria: "",
    gasto: [],
    isFirstTime: true,
    setPresupuesto: (presupuesto: number) => set({ presupuesto }),
    resetPresupuesto: () => set({ presupuesto: 0 }),
    setShowValue: (showValue:boolean) => set({showValue: !showValue }),
    setName: (name:string) => set({name}),
    setDisponible: (disponible:number) => set({disponible}),
    setGastado: (gastado:number) => set(
        (state) => ({
            gastado: gastado,
            disponible: state.presupuesto - gastado
        })
    ),
    setIsCheck: (isCheck:boolean) => set({isCheck: !isCheck}),
    setCategoria: (categoria:string) => set({categoria}),
    setGasto: (gasto:IGastos) => set((state) => ({gasto: [...state.gasto, gasto]})),
    setIsFirstTime: (isFirstTime:boolean) => set({isFirstTime: !isFirstTime})
    
    
}))

