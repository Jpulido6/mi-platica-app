import { useStoreApp } from '@/store/useStroreApp'
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react'

export default function useUser() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { presupuesto } = useStoreApp()

    useEffect(() => {

        const checkFirstTime = () => {
            if (presupuesto === 0) {
                router.replace('/setup')
                setIsLoading(false)
            }
        }
        checkFirstTime()
    }, [presupuesto])


    return {
        isLoading,
    }
}
