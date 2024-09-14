import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NavBarLinks } from "./NavBar"
interface Props {
    links: NavBarLinks[]
    title:string
    active:()=>void
}
export const TopNavBar: FC<Props> = (props) => {
    useEffect(()=>{
        props.active()  
    },[])
    
    return <nav className="topNavBar">
        <p>
            {props.title}
        </p>
        <p>

            {
                props.links.map(
                    (link) => {
                        return link.func ? <button onClick={link.func}>{link.name}</button> : <Link to={link.path || '/'} onClick={props.active}><button onClick={()=>props.active}>{link.name}</button></Link>

                    }
                )
            }
        </p>

    </nav>

}