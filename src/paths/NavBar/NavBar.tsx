import { FC, useState } from "react";
import "../../styles/NavBar.css"
import { TopNavBar } from "./TopNavBar";
import { SideBar } from "./SideBar";
import { title } from "process";
import { useResolvedPath } from "react-router-dom";

export interface NavBarLinks{
    name:string,
    path?:string,
    func?:()=>void
}
const dev="Arihant's "

export const NavBar:FC<{}>=(props)=>{


    const [title,setTitle]=useState(dev)

    const active=()=>{
       setTimeout(() => {
        let path  = window.location.pathname.split("/")
        setTitle( dev+" "+(path[path.length-1]?path[path.length-1]:'Portfolio'))
       }, 100);
  
    }


    const links:NavBarLinks[]=[
        {name:"Portfolio ",path:"/Portfolio"},
        {name:"Articles ",path:"/Articles"},
        {name:"Projects ",path:"/Projects"},
        {name:"Catch Me up",func:()=>{}},

    ]
    return <>
    <TopNavBar active={active} title={title} links={links}/>
    <SideBar active={active} title={title} links={links}/>
    </>

}