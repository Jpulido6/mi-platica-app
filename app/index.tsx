import React, { useEffect, useState } from 'react'
import LoginScreen from './login'
import { supabase } from '@/utils/supabase'
import { Session } from '@supabase/supabase-js'
import RegisterScreen from './register'
import HomeScreen from './(tabs)'
import { useRouter } from 'expo-router'

export default function index() {
    const [user, setUser] = useState<Session | null>(null);
    const router = useRouter();

    useEffect(() => {
        const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                console.log('Usuario autenticado:', session.user);
                setUser(session);
            } else {
                console.log('Usuario deslogueado');
                setUser(null);
            }
        });

        return () => subscription?.subscription.unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            router.replace('/(tabs)');
        }
    }, [user, router]);

    if (!user) {
        return <LoginScreen />;
    }

    return null;

}
