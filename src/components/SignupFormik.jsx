import React from 'react'
import './SignupFormik.css'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SignupFormik = () => {
  return (
    <>
    <div className='form-body'>
        <h1 className='form-h1'>ReactForm = Formik + Yup</h1>

        <Formik
        initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }}
        validationSchema={Yup.object({
            name: Yup.string().min(2, "Name must be at least 2 characters").required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(6, "Name must be at least 6 characters").required("Required"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Required')
        })}

        onSubmit={(values, {setSubmitting, resetForm}) => {
            setTimeout(() => {
                alert("Thanks for signup.")
                resetForm();
                setSubmitting(false);
            }, 400);
            console.log(JSON.stringify(values, null, 2));
        }}
        >

            {({ isSubmitting}) => (
                <Form className='signup-form'>

                    <label htmlFor='name'>Name</label>
                    <Field type="text" name="name" placeholder="john" />
                    <ErrorMessage name='name' />
                    
                    <label htmlFor='email'>Email</label>
                    <Field type="email" name="email" placeholder="john@gmail.com" />
                    <ErrorMessage name='email' />

                    <label htmlFor='password'>Password</label>
                    <Field type="password" name="password" placeholder="******" />
                    <ErrorMessage name='password' />

                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <Field type="password" name="confirmPassword" placeholder="******" />
                    <ErrorMessage name='confirmPassword' />

                    <button className='btn' type='submit' disabled={isSubmitting}>SignUp</button>
                </Form>
            )}

        </Formik>
    </div>
    </>
  )
}

export default SignupFormik