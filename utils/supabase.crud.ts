import { IGastos } from "@/interfaces/gastos.interface"
import { supabase } from "./supabase"

export const addInitialAmount = async (amount: number) => {
    const { data, error } = await supabase.from('budget').insert([{ initial_amount: amount, current_amount: amount }])

    if (error) console.log('error', error)
    else console.log('data', data)

}

export const getAmount = async (): Promise<{
    inicialAmount: number;
    currentAmount: number;
}> => {
    const user = await supabase.auth.getUser();
    if (!user.data.user) return { inicialAmount: 0, currentAmount: 0 };

    const { data, error } = await supabase
        .from('budget')
        .select('initial_amount, current_amount')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        console.log('error', error);
        return { inicialAmount: 0, currentAmount: 0 };
    }

    console.log('data', data);

    return { inicialAmount: data.initial_amount, currentAmount: data.current_amount };
}

export const register = async(email: string, password:string) =>{
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })
        if (error) return { success: false, error: error.message }
        else return { success: true, data: data }

    } catch (error) {
        console.log('error', error)
        return { success: false, error: 'Error al registrar' }        
    }
}

export const login = async(email: string,password:string )=>{
    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) return { success: false, error: error.message }
        else return { success: true, data: data }
    } catch (error) {
        console.log('error', error)
        return { success: false, error: 'Error al iniciar sesión' }
        
    }

}




export const addExpense = async (expense: IGastos) => {

    await updateCurrentAmount(expense.monto)

    const { data, error } = await supabase.from('expenses').insert([{
        name_expense: expense.nombreGasto,
        value_expense: expense.monto,
        categorie_expense: expense.categoria
    }])

    if (error) console.log(error)
    else console.log(data)
}

export const updateCurrentAmount = async (amount: number) => {
    console.log('amount', amount)
    const budget = await getAmount()
    console.log('budget', budget)

    const { inicialAmount, currentAmount } = budget

    // if (amount < inicialAmount) return null

    if (currentAmount != null) {
        // if (currentAmount < amount) return null
        // if (currentAmount === amount) return null
        const newAmount = currentAmount - amount

        const { data, error } = await supabase.from('budget').update({ current_amount: newAmount }).order('created_at', { ascending: false }).limit(1)

        if (error) {
            console.log('error al actualizar',error)
            return null
        }
        console.log('dara',data)
    }
}

export const getExpenses = async () => {
    const { data, error } = await supabase.from('expenses').select('*').order('created_at', { ascending: false })

    if (error) {
        console.log(error)
        return []
    }
    return data
}