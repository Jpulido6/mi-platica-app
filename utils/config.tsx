import DollarIcon from "@/components/icons/DollarIcon";
import UserIcon from "@/components/icons/UserIcon";

export const CATEGORY_CONFIG = {
    Arriendo: {
        icon: (width: number, height: number) => <DollarIcon width={width} height={height} color='gray' />,
        textStyle: { color: 'gray' },
    },
    Comida: {
        icon: (width: number, height: number) => <UserIcon width={width} height={height} color='gray' />,
        textStyle: { color: 'gray' },
    },

    Mercado: {
        icon: (width: number, height: number) => <UserIcon width={width} height={height} color='gray' />,
        textStyle: { color: 'gray' },
    },
    otros:{
        icon: (width: number, height: number) => <UserIcon width={width} height={height} color='gray' />,
        textStyle: { color: 'gray' },
    }

}