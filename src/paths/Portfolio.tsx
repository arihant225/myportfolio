import '../styles/Portfolio.css'

import img1 from '../assets/techstack (1).svg'
import img2 from '../assets/techstack (2).svg'
import img3 from '../assets/techstack (3).svg'
import img4 from '../assets/techstack (4).svg'
import img5 from '../assets/techstack (5).svg'
import img6 from '../assets/techstack (6).svg'
import img7 from '../assets/techstack (7).svg'
import img8 from '../assets/techstack (8).svg'
import img9 from '../assets/techstack (9).svg'
import img10 from '../assets/techstack (10).svg'
import img11 from '../assets/techstack (11).svg'
import img12 from '../assets/techstack (12).svg'
import dev from '../assets/dev.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




const srcs = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
]
export const Portfolio = () => {


    const [techs, setTechs] = useState(srcs);
    useEffect(() => {
        const _techImgs = document.querySelectorAll(".tech-img");
        _techImgs.forEach((ele, index) => {
            let radius = 180;

            let deg = Math.PI * 2 * (index + 1) / _techImgs.length;
            let img = (ele as HTMLImageElement)
            img.style.top = `${radius * Math.sin(deg) - 20}px`
            img.style.left = `${radius * Math.cos(deg) - 20}px`

        })
    }, [])




    return (
        <>
            <div className='portfolio-dev-intro'>

<div>
                <div className='tech-container'>
                    <img className='dev' src={dev} />

                    <div className='techs'>
                        {
                            techs.map(
                                src => <span><img className='tech-img' src={src} /></span>
                            )
                        }

                    </div>
                </div>
                </div>

                <div>
                   <div className='dev-intro-text'>
                  <span>  Hey, I'm Arihant Jain </span>
                  <span>A Full Stack Developer</span>
                  <span>& A Specialist Programmer at Infosys</span>
                  <span><Link to={"/Experience"}><button>Know more</button></Link><button>Connect Now</button></span>
                   </div>

                </div>
            </div>
        </>
    )
}