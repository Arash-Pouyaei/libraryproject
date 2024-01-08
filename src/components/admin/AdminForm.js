import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from "yup"
import {AdminPanel} from './AdminPanel'
import Swal from 'sweetalert2'
import { redirect,useNavigate, Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AdminForm = () => {
    const [admin,setadmin] = useState(JSON.parse(localStorage.getItem('admin')))
    const admins = useSelector(store=>store.AdminState)
    const navigate=useNavigate()
    return (
        <>
                        {admin ?
                         <>
                        <Navigate to="/admin/adminpanel" replace={true} />
                        </>
                           :
                           <>
                        <Formik
                            initialValues={{username: "", email: "", password: ""}}
                            validationSchema={Yup.object({
                                username: Yup.string()
                                    .max(15, "maximum 15 characters")
                                    .min(2, "minimum 2 characters")
                                    .required("Required"),
                                email: Yup.string()
                                    .email("use correct email")
                                    .required("Required"),
                                password: Yup.string()
                                    .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "password must be strong")
                                    .required("Required")
                            })}
                            onSubmit={(values, {setSubmitting}) => {
                                
                                setTimeout(() => {
                                    if (admins.find((item) => item.username === values.username && item.email === values.email && item.password === values.password)) {
                                        Swal.fire({
                                            timer: 1500,
                                            showConfirmButton: false,
                                            willOpen: () => {
                                                Swal.showLoading();
                                            },
                                            willClose: () => {

                                               
                                                localStorage.setItem('admin',JSON.stringify(values))
                                              
                                                navigate("/admin/adminpanel", { replace: true});

                                                Swal.fire({
                                                    icon: 'success',
                                                    title: ` ${values.username} Successfully logged in!`,
                                                    showConfirmButton: false,
                                                    timer: 1500,
                                                });
                                            },
                                        });

                                    } else {
                                        Swal.fire({
                                            timer: 1500,
                                            showConfirmButton: false,
                                            willOpen: () => {
                                                Swal.showLoading();
                                            },
                                            willClose: () => {
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Error!',
                                                    text: 'Incorrect email or password.',
                                                    showConfirmButton: true,
                                                });
                                            },
                                        });
                                    }
                                    setSubmitting(false)
                                }, 500)
                            }}
                        >
                            <div class="container-fluid pt-5">
                                <div class="row px-xl-5 h-100 d-flex align-items-center justify-content-center">
                                    <div class="col-lg-7 mb-5 ">
                                        <div class="contact-form">
                                            <div id="success"></div>
                                            <Form>
                                                <Field class="form-control" name="username" type="text"
                                                       placeholder="Your Name"/>
                                                <p class="help-block text-danger"></p>

                                                <p className='text-danger'>
                                                    <ErrorMessage name="username"/>
                                                </p>

                                                <Field type="email" class="form-control" id="email" name="email"
                                                       placeholder="Your Email"/>
                                                <p class="help-block text-danger"></p>

                                                <p className='text-danger'>
                                                    <ErrorMessage name="email"/>
                                                </p>

                                                <Field class="form-control" id="password" name="password"
                                                       type="password" placeholder="Password"/>
                                                <p class="help-block text-danger"></p>

                                                <p className="col-sm-2 col-form-label text-danger">
                                                    <ErrorMessage name="password"/>
                                                </p>

                                                <button type="submit" class="btn btn-primary py-2 px-4"
                                                        id="sendMessageButton">
                                                    Submit
                                                </button>

                                            </Form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Formik>
                    </>}
            
        </>
    )
}
export default AdminForm;


