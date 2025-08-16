import { FC } from "react";
import { DBConnect } from "./DB";
import { Article } from "./Articles/Article";

export const Articles:FC = () => {  
    const db =new DBConnect()
   
    db.getArticles()
    return <>
   <Article/>
    </>
}
