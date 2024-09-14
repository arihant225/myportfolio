import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./paths/Home";
import { CommonView } from "./paths/CommonView";

export const App:FC<{}>=()=>{
  return (  
  <>
  
  <CommonView/>

  </>
)
}