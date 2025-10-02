import { FC } from "react";
import { Portfolio } from "./Portfolio";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Article } from "./Articles/Article";
import { Articles } from "./Articles/Articles";

export const Home:FC<{}>=(props)=>{
    return(
        <>
    
        <Routes>
        <Route path="Articles"  Component={Articles}/>
        <Route path="Article/:id"  Component={Article}/>

        <Route  path="*" Component={Portfolio}/>

        </Routes>
        
        </>
    )
}