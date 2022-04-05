import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import GoogleButton from 'react-google-button';
import CustomField from '../../components/CustomField';
import Rocket from '../../assets/images/rocket.png'
import './Login.scss'

const validationYupSchema = yup.object({
    email: yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password is too Short!')
        .max(25, 'Password is too Long!')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            `Must Contain Uppercase, Lowercase,
            Number and special case Character`)
                .required('Password is required field')
});

export default class Login extends Component {
    render() {
        return (
            <div className='login_layout flex w-full min-h-screen justify-center items-center'>
                <div className='form_container bg-cyan-700 flex flex-col md:flex-row md:space-y-0 md:space-x-6 space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden'>
                    <div className="relative">
                        <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-20 -top-20"></div>
                        <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -bottom-28"></div>
                        <div className='relative z-10  bg-white rounded-xl shadow-lg p-8'>
                            <Formik
                                validationSchema={validationYupSchema}
                                initialValues={{ name: "", password: "" }}
                                onSubmit={(val) => console.log(val)}
                            >
                                {({ errors, touched }) => (
                                    <Form
                                        className='flex flex-col justify-between space-y-4 text-gray-600 md:w-80 h-96'
                                    >
                                        <div className="text-2xl text-gray-400 font-bold">
                                            Login
                                        </div>
                                        < CustomField
                                            label="Email:"
                                            name="email"
                                            type="email"
                                            errors={errors.email}
                                            touched={touched.email}
                                        />
                                        < CustomField
                                            label="Password:"
                                            name="password"
                                            type="password"
                                            errors={errors.password}
                                            touched={touched.password}
                                        />
                                        <GoogleButton className='googleButton'
                                        // style={{ width: '100%', height: '40px' }}
                                        />
                                        <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-8 py-2 uppercase text-sm" type="submit">Submit</button>
                                        <div className="text-sm">
                                            Not have an account?
                                            <span className='underline text-teal-500 ml-2 cursor-pointer'>Create your account</span>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-fit ">
                        <div className='w-80 sm:w-112'>
                            <img src={Rocket} className='w-full' alt="rocket" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
