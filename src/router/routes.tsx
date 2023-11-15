import React from "react"
import {RouteObject, Navigate} from 'react-router-dom'
import Dashboard from "../pages/Dashboard"

export const routes: RouteObject[] = [
    {path: '/home', element: <Dashboard /> },
    {path: '*', element: <Navigate to={'/home'} replace/> }
]