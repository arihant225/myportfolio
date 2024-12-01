import '../styles/Portfolio.css'
import codeSource from '../assets/code.jpg'
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
const style = [
    { top: '0px', left: '10px' },
    { left: '10px', bottom: '0px' },
    { right: '10px', top: '0px' },
    { bottom: '0px', right: '10px' }
]
export const Portfolio = () => {


    const [techs, setTechs] = useState(srcs);
    const quesAns = [
        {
            Ques: 'I have been building solutions since',
            Ans: 2022
        }
        ,
        {
            Ques: 'Total No. of Experience ',
            Ans: new Date().getFullYear() - 2022 + ' years'
        },
        {
            Ques: 'No of Successfull projects I delivered',
            Ans: 4
        },
        {
            Ques: 'Stack Currently I am working in :',
            Ans: 'dotnet & Angular'
        }
    ]
    const[size,setSize]=useState(window.innerWidth)
    window.addEventListener('resize',()=>{
        setSize(window.innerWidth)

    })
    useEffect(() => {
        
        initJSForStack();
        initJSForQ_ARulers();
    }, [size])

    const initJSForQ_ARulers = () => {
        const center_img = document.getElementById("center-img-qa")
        if (center_img) {
            const horizontals = document.querySelectorAll("#horizontal-connector") as NodeListOf<HTMLHRElement>
            const verticals = document.querySelectorAll('#vertical-connector') as NodeListOf<HTMLHRElement>
            const QAItems = document.querySelectorAll("#ques_ans").forEach(
                (ele, index) => {

                    horizontals[index].style.position = 'absolute'
                    verticals[index].style.position = 'absolute'
                    verticals[index].style.transform = 'rotate(90deg)'
                    const main = (document.getElementById("main-qna-div"))
                    if (main)
                        verticals[index].style.width = (main.clientHeight) + 'px'
                    if (main)
                        (ele as HTMLDivElement).style.maxWidth = '40%'
                    verticals[index].style.height = '0.25px'


                    if (style[index].top) {
                        horizontals[index].style.top = index < 2 ? '-10px' : '120px'
                    }
                    if (style[index].bottom) {
                        horizontals[index].style.bottom = index < 2 ? '-10px' : '120px'
                    }
                    horizontals[index].style.width = '100%'
                    horizontals[index].style.left = '0px'



                }
            )
        }

    }

    const initJSForStack = () => {
        const _techImgs = document.querySelectorAll(".tech-img");
        const tech=document.getElementById("tech-container");
        if(tech)
        _techImgs.forEach((ele, index) => {
            let radius = tech.clientWidth/2  -50;

            let deg = Math.PI * 2 * (index + 1) / _techImgs.length;
            let img = (ele as HTMLImageElement)
            img.style.top = `${radius * Math.sin(deg) -20 }px`
            img.style.left = `${radius * Math.cos(deg) -20 }px`

        })
    }



    return (
        <>
            <div className='portfolio-dev-intro'>

                <div>
                    <div className='tech-container' id="tech-container">
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
                        <span>  hey,  </span>
                        <span>I'm <span className='imp'>Arihant Jain</span></span>
                        <span>A Full Stack Developer</span>
                        <span>& a <span className='imp'>Specialist Programmer</span> at <span className='imp'>Infosys</span></span>
                       
        
                    </div>

                </div>
            </div>

            <div className='Ques-Ans' id="main-qna-div">

                <p className='Ques-ans-center-img'><img id="center-img-qa" src={codeSource} /></p>
                {
                    quesAns.map(
                        (temp, index) => <>
                            <div style={style[index]} id="ques_ans" className='ques-Ans-items'>
                                <p>{temp.Ques}</p>
                                <p>{temp.Ans}</p>
                            </div>
                            <hr id='horizontal-connector' />
                            <hr id='vertical-connector' />
                        </>

                    )
                }
            </div>
        </>
    )
}