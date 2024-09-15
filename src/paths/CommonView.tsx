import { FC, ReactElement } from "react"
import { NavBar } from "./NavBar/NavBar"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Experience } from "./Experience"
import { Articles } from "./Articles"

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
                <Route path="/Articles" element={<Articles />} />
            </Routes>
            </div>
        </>
    )
}