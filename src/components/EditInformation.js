import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup"
// import { editProducts } from '../../state-management/action/productsAction';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../state-management/action/UsersAction';
import { useNavigate } from 'react-router-dom';

export const EditInformation = () => {

    const dispatch = useDispatch();
    const navigate=useNavigate()
    const local = JSON.parse(localStorage.getItem('user'));
    const user = useSelector(store => store.userState);
    const filteredUser = user.filter(i => i.userId === local.userId);

  return (
    <>
            {filteredUser.map(Item => (
              <Formik
            initialValues={
              {
                userId:Item.userId,
                firstName:"",
                lastName:"",
                email:"",
                mobileNo:"",
              }
            }
            validationSchema={Yup.object({
              firstName: Yup.string().required("Required"),
              lastName: Yup.string().required("Required"),
              email: Yup.string().required("Required"),
              mobileNo:Yup.string().required("required")
            })}
            onSubmit={(values)=>{
                dispatch(editUser(Item.userId,values))
                localStorage.clear()
                localStorage.setItem("user",JSON.stringify({userId:Item.userId,firstName:values.firstName,lastName:values.lastName,email:values.email,mobileNo:values.mobileNo}))
                navigate(-1)
          }}
            >
            <Form>
            <div>

        <div class="container-fluid pt-5">
            <div class="row px-xl-5">
                <div class="col-lg-8">
                    <div class="mb-4">
                <div className="form-group">
                  <label htmlFor="firstName">firstName</label>
                  <Field type="text" id="firstName" name="firstName" className="form-control" placeholder={Item.firstName}/>
                    <p className="col-sm-2 col-form-label text-danger">
                        <ErrorMessage name="firstName"/>
                    </p>
                </div>
                  <div className="form-group">
                  <label htmlFor="lastName">lastName</label>
                  <Field type="text" id="lastName" name="lastName" className="form-control"  placeholder={Item.lastName} />
                    <p className="col-sm-2 col-form-label text-danger">
                      <ErrorMessage name="lastName"/>
                    </p>
                </div>
                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <Field type="email" id="email" name="email" className="form-control" placeholder={Item.email} />
                    <p className="col-sm-2 col-form-label text-danger">
                      <ErrorMessage name="email"/>
                    </p>
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNo">mobileNo</label>
                  <Field type="number" id="mobileNo" name="mobileNo" className="form-control" placeholder={Item.mobileNo}  />
                    <p className="col-sm-2 col-form-label text-danger">
                      <ErrorMessage name="mobileNo"/>
                    </p>
                </div>
                </div>
              <button type="submit" className="btn btn-primary" >
                edit
              </button>
              <button type='button' class="btn btn-primary float-end" onClick={p=>navigate(-1)}>don't edit</button>
            </div>
              </div>
                </div>
                  </div>
            </Form>
            </Formik>
      ))
    }
    </>
    
    
  )
}
