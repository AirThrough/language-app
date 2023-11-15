import React, {FC} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {routes} from "./routes"
import PageWrapper from "../components/PageWrapper"

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <PageWrapper>
                <Routes>
                    {
                        routes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={route.element}
                                />
                            )
                        })
                    }
                </Routes>
            </PageWrapper>
        </BrowserRouter>
    )
}

export default AppRouter