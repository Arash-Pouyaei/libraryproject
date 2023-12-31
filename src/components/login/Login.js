import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage, replace} from 'formik'
import * as Yup from "yup"
import Register from './Register'
import {UserPanel} from './PanelUser'
import {redirect,useNavigate, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Login = () => {

    const [user,setUser] = useState(localStorage.getItem('user'))
    const users =useSelector(store=>store.userState)
    const navigate=useNavigate()

    return (
        <>
            {


                user?
                <>

                        <Navigate to="/login/userpanel" replace={true} />
               
                
                        </>
                        :
                        <>
                            <Formik
                                initialValues={{mobileNo: '', password: ''}}
                                validationSchema={Yup.object({
                                    mobileNo: Yup.string()
                                        .max(15, 'Must be 15 characters or less')
                                        .required('Required'),
                                    password: Yup.string()
                                        .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "password must be strong")
                                        .required("Required")
                                })}
                                onSubmit={(values, {setSubmitting}) => {
                                    if (users.find((i) => i.mobileNo === values.mobileNo && i.password === values.password)) {
                                        setTimeout(() => {
                                        //     setloggedin(users.filter(a => a.mobileNo === values.mobileNo));
                                            localStorage.setItem('user',JSON.stringify(users.find((i) => i.mobileNo === values.mobileNo && i.password === values.password)))
                                            navigate("/login/userpanel", { replace: true})
                                            setSubmitting(false);
                                        }, 400);
                                    }

                                }}
                            >
                                <div className=' container d-flex justify-content-center align-items-center vh-100'
                                     style={{flexDirection: "column"}}>
                                    <h4 class=" text-center mt-1 mb-5 pb-1"><span class="px-2">Login</span></h4>

                                    <div className="">
                                        <Form>

                                            
                                            <Field class="form-control" name="mobileNo" type="text"
                                                   placeholder="Mobile No"/>
                                            <p className="col-sm-2 col-form-label text-danger">
                                                <ErrorMessage name="mobileNo"/>
                                            </p>

                                            <Field class="form-control" id="password" name="password" type="password"
                                                   placeholder="Password"/>
                                            <p class="help-block text-danger"></p>
                                            <p className="col-sm-2 col-form-label text-danger">
                                                <ErrorMessage name="password"/>
                                            </p>

                                            <div class="text-center pt-1 mb-5 pb-1">
                                                <button  type="submit">Login</button>
                                            
                                            </div>

                                            <div>
                                                
                                                <button type="button" class="btn " onClick={a => navigate("/register")} >Create new</button>
                                            </div>

                                        </Form>
                                    </div>
                                </div>
                            </Formik>
                            </>}
            
            </>
        )
    }
export default Login
