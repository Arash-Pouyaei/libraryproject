import React from 'react'
import {BrowserRouter as Link, NavLink} from 'react-router-dom';

export const Header = ({appRoutes}) => {
    return (
        <>
            <div class="container-fluid">
                <div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="d-inline-flex align-items-center">
                        <NavLink to="/login">login</NavLink> 
                            <span >|</span>
                            <NavLink class="text-dark" to="/">Home</NavLink>
                            <span >|</span>
                            <NavLink  to="/admin">admin</NavLink>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
