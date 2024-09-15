import { FC, useEffect, useState } from "react"
import { NavBarLinks } from "./NavBar"
import { Link } from "react-router-dom"

interface Props{
    links:NavBarLinks[]
    title:string
    active:()=>void
}
export const SideBar:FC<Props> = (props) => {
    useEffect(()=>{
       
        props.active()  
    },[])
    const [visible, setVisible] = useState(false)
    return (
        <div className="sideNavBar">
            <p > {props.title} </p>
            <p>
                <span onClick={() => { setVisible(!visible) }} className="material-symbols-outlined"> menu</span>
            </p>
            {visible ? <div className="backdrop" onClick={() => { setVisible(false) }}></div> : <></>}

            {visible ? <nav>


                <p > Portfolio </p>
                {
                    props.links.map(
                        (link)=>{
                            return link.func?<button onClick={link.func}>{link.name}</button>:<Link to={link.path||'/'}><button onClick={()=>{props.active();setVisible(false)}}>{link.name}</button></Link>

                        }
                    )
                }

            </nav> : <></>}
        </div>
    )
}