import React, { useState } from 'react'
import { NavLink, Route, Routes, redirect,useNavigate,Outlet} from 'react-router-dom';
import { EditInformation } from '../EditInformation';

export const UserPanel = () => {
    const [a,seta] = useState(JSON.parse(localStorage.getItem('user')))
    const navigate=useNavigate()
    return (
        <>
            {
                a?
                <>
                <div>
                <div class=" container-fluid bg-secondary py-2 px-xl-5">

                </div>
            </div>

            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 border">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                            <ul class="navbar-nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                                <li>
                                    <NavLink  to="/login/userpanel/information">
                                         Your Information
                                    </NavLink>
                                </li>
                                <li >
                                    <NavLink to="/login/userpanel/cart" >
                                        Your Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <a onClick={a =>{seta(null);localStorage.clear();navigate("/login", { replace: true})}}> 
                                         log out
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <Routes>
                    <Route path='/login/userpanel/information' index element={<EditInformation/>}></Route>
                </Routes> */}

                <Outlet/>
            </div>
            </>
                :
            <>
                {
                    redirect("/login")
                }
            </>
}
        </>

    )
}





