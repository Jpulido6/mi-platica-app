export interface ICategory {
    id: number,
    nombreGasto: string,
    valorGasto: string,
    categoria: ICategoryList, 
    isCheck: boolean    
}

export interface ICategoryList {
    key: number,
    name: string,
    icon?: React.ReactNode,
    isCheck: boolean
}