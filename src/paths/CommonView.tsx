import { FC, ReactElement } from "react"
import { NavBar } from "./NavBar/NavBar"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Experience } from "./Experience"

interface Props {
}

export const CommonView: FC<Props> = (props) => {
    return (
        <>
            <NavBar  />
            <div className="render">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Portfolio" element={<Home />} />
                <Route path="/Experience" element={<Experience />} />
            </Routes>
            </div>
        </>
    )
}