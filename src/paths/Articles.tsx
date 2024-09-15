import { FC } from "react";
import { DBConnect } from "./DB";

export const Articles:FC = () => {  
    const db =new DBConnect()
    // db.postArticles(
    //     {
    //         articleTitle: "Connecting supabase",
    //         articleText: "This is a test post",
    //         author: "John Doe",
    //         created_at:new Date(),
    //         githublinks:"",
    //         id:0
            

            
    //     }
    // )
    db.getArticles()
    return <>
    articles
    </>
}
