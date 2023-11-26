import React from "react"
import {RouteObject, Navigate} from 'react-router-dom'
import Dashboard from "../pages/Dashboard"
import CreateDeck from "../pages/Decks/CreateDeck"

export const routes: RouteObject[] = [
    {path: '/decks/add', element: <CreateDeck /> },
    {path: '/home', element: <Dashboard /> },
    {path: '*', element: <Navigate to={'/home'} replace/> }
]