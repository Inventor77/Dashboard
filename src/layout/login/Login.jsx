import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Login.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import CustomField from '../../components/CustomField';

const validationYupSchema = yup.object({
    name: yup.string().required("").min(2, 'Name is too Short!')
        .max(70, 'Name is too Long!')
        .required('Name is required field'),
    // password: 
});

export default class Login extends Component {
    // static propTypes = { second: third }
    render() {
        return (
            <div className='login_layout flex w-full min-h-screen justify-center items-center'>
                <div className='form_container bg-cyan-700 flex flex-col md:flex-row md:space-y-0 md:space-x-6 space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white'>
                    <div className='bg-white rounded-xl shadow-lg p-8'>
                        {/* <h1 className='font-bold text-4xl tracking-wide'>
                            Login
                        </h1> */}
                        <Formik
                            validationSchema={validationYupSchema}
                            initialValues={{ name: "", password: "" }}
                            onSubmit={(val) => console.log(val)}
                        >
                            {({ errors, touched }) => (
                                <Form
                                    className='flex flex-col space-y-4 text-gray-700 md:w-84'
                                >
                                    < CustomField
                                        label="Name:"
                                        name="name"
                                        type="text"
                                        errors={errors.name}
                                        touched={touched.name}
                                    />
                                    < CustomField
                                        label="Password:"
                                        name="password"
                                        type="password"
                                        errors={errors.password}
                                        touched={touched.password}
                                    />
                                    {/* <label >Password:</label>
                                    <Field name='password' type='password' /> */}
                                    <br></br>
                                    <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-8 py-2 uppercase text-sm" type="submit">Submit</button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    {/* <div className="flex flex-col justify-between">
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>
                                Hello, User
                            </h1>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
