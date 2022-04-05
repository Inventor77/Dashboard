import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import CustomField from '../../components/CustomField';
import Rocket from '../../assets/images/rocket.png'

const validationYupSchema = yup.object({
    name: yup.string().min(2, 'Name is too Short!')
        .max(36, 'Name is too Long!')
        .required('Name is required field'),
    password: yup.string()
        .min(8, 'Password is too Short!')
        .max(25, 'Password is too Long!')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])$/gm, "Please Enter Valid Password")
        .required('Password is required field')
});

export default class Signup extends Component {
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
                                            Signup
                                        </div>
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
                                        <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-8 py-2 uppercase text-sm" type="submit">Submit</button>
                                        <div className="text-sm">
                                            Already have an account?
                                            <span className='underline text-teal-500 ml-2 cursor-pointer'>Login</span>
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
