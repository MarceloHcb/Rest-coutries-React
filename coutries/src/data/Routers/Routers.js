import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AllElements } from "../../components/AllElements/AllElements"
import { Element } from "../../components/Element/Element"
export const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<AllElements/>} />
           <Route exact path="/:name" element={<Element/>}/>
        </Routes>
        </BrowserRouter>
    )
}