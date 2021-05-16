import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Dropdown from './Dropdown'
import LandingPageRoutes from './LandingPage.routes'
import Navbar from './Navbar'


export default function LandingPage() {
    return (
        <Router>
            <Navbar />
            <Dropdown />
            <div>
                <LandingPageRoutes />
            </div>
        </Router>
    )
}
