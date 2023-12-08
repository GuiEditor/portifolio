'use client'

import NavBarComponent from '@/app/components/navbar';
import MainView from "./components/mainView";
import { useEffect } from 'react';
import getAlgo from './config/storageConfig';



export default function Home() {
    useEffect(() => {
        fetch()
    }, [])
    
    async function fetch() {
        await getAlgo()
    }

    return (
        <div>
            <NavBarComponent />
            <MainView />
        </div>
    )
}