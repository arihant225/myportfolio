import { myExperiences } from "../Interfaces/Experience"
import { Months } from "../Interfaces/Months"
import { DevSkills } from "../Interfaces/Skills"
import "../styles/Experience.css"
export const Experience = () => {






    return <>
        <div className="main-container">
            <div className="tag">Skills</div>
            <ul >
                <div className="skills-table">
                    {
                        DevSkills.map(
                            e => <table>

                                <tr><td>{e.name}</td></tr>
                                {
                                    e.items.map(
                                        i => <tr><td>{i}</td></tr>
                                    )
                                }
                            </table>
                        )
                    }
                </div>


            </ul>
            <div className="tag">Experience</div>
            {
                <ul >{
                    [...myExperiences].reverse().map(ele => <div className="milestones">
                        <div className="exp-items">
                            <p><span>{ele.designation}</span><span>{Months[ele.from.getMonth()] + ', ' + ele.from.getFullYear()} - {!ele.to ? 'Present' : (Months[ele.to.getMonth()] + ', ' + ele.to.getFullYear())}</span>
                                <span>{ele.company}</span></p>
                        </div>
                        {
                            [...ele.experienceSummary].reverse().map(
                                ele => <div className="summary">
                                    <div className="">
                                        <p><span>{ele.title}</span>
                                            <span>{Months[ele.from.getMonth()] + ', ' + ele.from.getFullYear()} - {!ele.to ? 'Present' : (Months[ele.to.getMonth()] + ', ' + ele.to.getFullYear())}</span>
                                        </p>
                                        <p>{ele.description.map(e =>
                                            <li>{e}</li>
                                        )}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    )
                }
                </ul>
            }

        </div>


    </>
}