import { Canvas } from "@react-three/fiber"
import { articles } from "../../articles"

import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei"
import { DirectionalLight } from "three"
import { Article } from "./Article"
import "../../styles/Article.css"
import { Link } from "react-router-dom"
export const Articles=()=>{
    return <div>
 <div className="article_template" >
    {
         
      articles.map((temp,index)=>{
        return (
            
        <Link to={"/Article/"+index}><div  className="list-of-articles">{temp.title}</div></Link>)
      })
      
    }
    </div>

    </div>
}