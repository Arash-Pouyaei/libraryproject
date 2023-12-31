import {Formik, Field, Form, ErrorMessage} from 'formik'
import React, {useState} from 'react'
import * as Yup from "yup"
import {v4 as uuidv4} from 'uuid';
import { addUser } from '../../state-management/action/UsersAction';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink,useNavigate,redirect} from 'react-router-dom';


const Register = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.userState)
    const navigate = useNavigate()
    const [local,setlocal]=useState(JSON.parse(localStorage.getItem('user')))
    const [error,seterror]=useState("")
    return (
        <>
            {
                local ?
                    <>{redirect("/register/userpanel")}</>
                    :
                    <>
                    <div >

                            <div>
                                <div class="row">
                                    <Formik
                                        initialValues={{
                                            userId: uuidv4(),
                                            firstName: '',
                                            lastName: '',
                                            email: '',
                                            mobileNo: '',
                                            password: '',
                                            Confirmpassword:''
                                        }}
                                        validationSchema={Yup.object({
                                            firstName: Yup.string()
                                                .max(15, 'Must be 15 characters or less')
                                                .required('Required'),
                                            lastName: Yup.string()
                                                .max(15, 'Must be 15 characters or less')
                                                .required('Required'),
                                            email: Yup.string()
                                                .email("use correct email")
                                                .required("Required"),
                                            mobileNo: Yup.string()
                                                .required('Required'),
                                        
                                            password: Yup.string()
                                                .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "password must be strong")
                                                .required("Required"),
                                            Confirmpassword: Yup.string()
                                                .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "password must be strong")
                                                .required("Required"),
                                        })}
                                        onSubmit={(values, {setSubmitting}) => {

                                            if (user.find((i) => i.mobileNo !== values.mobileNo)) {
                                                if (values.password===values.Confirmpassword) {
                                                    setTimeout(() => {
                                                        setSubmitting(false);
                                                        dispatch(addUser(values));
                                                        localStorage.clear()
                                                        localStorage.setItem('user',JSON.stringify(values))
                                                        navigate("/register/userpanel")
                                                    }, 400);
                                                }else{
                                                    seterror("password and confirm password is not equal")
                                                }
                                            }

                                        }}
                                    >
                                        <Form>
                                            <div class="col-sm-12">
                                                <div class="row">
                                                    <div class="col-sm-6 form-group">
                                                        <label>First Name</label>
                                                        <Field class="form-control" name='firstName' type="text" 
                                                           placeholder="Enter First Name Here..." />
                                                        <p className="col-sm-2 col-form-label text-danger">
                                                            <ErrorMessage name="firstName"/>
                                                        </p>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label>Last Name</label>
                                                        <Field class="form-control" name='lastName' type="text" placeholder="Enter Last Name Here..."/>
                                                        <p className="col-sm-2 col-form-label text-danger">
                                                            <ErrorMessage name="lastName"/>
                                                        </p>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label>E-mail</label>
                                                        <Field class="form-control" type="text" name='email'
                                                            placeholder="Enter Email Address Here..."/>
                                                        <p className="col-sm-2 col-form-label text-danger">
                                                            <ErrorMessage name="email"/>
                                                        </p>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label>Mobile No</label>
                                                        <Field class="form-control" name='mobileNo' type="text"
                                                            placeholder="Enter Phone Number Here..."/>
                                                        <p className="col-sm-2 col-form-label text-danger">
                                                            <ErrorMessage name="mobileNo"/>
                                                        </p>
                                                    </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6 form-group">
                                                            <label>Password</label>
                                                            <Field class="form-control" name='password' type="text" placeholder="Password"/>
                                                            <p className="col-sm-2 col-form-label text-danger">
                                                                <ErrorMessage name="password"/>
                                                            </p>
                                                        </div>
                                                        <div class="col-md-6 form-group">
                                                            <label>Confirm Password</label>
                                                            <Field class="form-control" name='Confirmpassword' type="text" placeholder="Confirm Password"/>
                                                            <p className="col-sm-2 col-form-label text-danger">
                                                                <ErrorMessage name="Confirmpassword"/>
                                                            </p>
                                                            <p className="col-sm-2 col-form-label text-danger">
                                                                {error}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                             
                                                    
                                                        <button class="btn" type="submit">Register</button>
                                                   
                            
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                    </div>
                    </>
            }
        </>
    )
}

export default Register
