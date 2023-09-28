"use client"

import MainHeader from "./includes/MainHeader"
import TopMenu from "./includes/TopMenu"
import Footer from "./includes/Footer"
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'


export default function MainLayout({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.addEventListener("storage", function () {
            let res = localStorage.getItem('isLoading')
            res === 'false' ? setIsLoading(false) : setIsLoading(true)
        })
    })
    return (
        <>
            <div>
                <div id="MainLayout" className="max-w-[1300px] mx-auto ">
                    <div>
                        {isLoading ? <Loading /> : <div></div>}
                        <TopMenu />
                        <MainHeader />
                        
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}