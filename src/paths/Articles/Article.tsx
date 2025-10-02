import { useRef, useState } from 'react';
import '../../styles/Article.css';
import { articles, IArticle } from '../../articles';


export const Article = () => {
const refs=useRef<(HTMLParagraphElement|null)[]>([])

const [article,setArticle]=useState<IArticle>(articles[+document.URL.split('/')[document.URL.split('/').length-1]])
           
      
      
      
      

  
    return (
      <>
        <div className="article_template" >
          <h1>{article.title}</h1>
          <p>{article.intro}</p>
    
          <ul>
            {article.tips.map((tip, i) => (
              <li key={tip.title} >
                <strong >{tip.title}</strong>
                {tip.description && (
                  <p>
                    {tip.description
                      .split(">")
                      .filter((e) => e)
                      .map((e, j) => (
                        <div key={j}>{e}</div>
                      ))}
                  </p>
                )}
                <ol>
                  {tip.points.map((point, j) => (
                    <li key={point.point_title}>
                      <h4>{point.point_title}</h4>
                      <p><strong>Intuition:</strong> {point.intuition}</p>
                      <p><strong>Reasoning:</strong> {point.reasoning}</p>
                      <p><strong>Example:</strong> {point.example}</p>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
    
          <p>Happy Coding! 🚀</p>
        </div>
      </>
    );
    
};

