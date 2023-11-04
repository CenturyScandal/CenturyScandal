import React from "react"
import { Outlet } from "react-router-dom"
import data from "../en-data"
import "./layout.css"
import Header from "../components/Header"

export default function Layout() {
    console.log()
    return (
        
        <div className="layout">
            <div className="background">

            </div>
            <Header />
            <Outlet />
        </div>
    )
}