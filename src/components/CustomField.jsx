import React, { Component } from 'react'
import { Field, ErrorMessage } from 'formik';

export default class CustomField extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Field
                    name={this.props.name}
                    type={this.props.type}
                    className={`ring-1 ring-gray-400 ${this.props.errors && this.props.touched ? "ring-red-500" : "ring-gray-400"}
                                            w-full rounded-md px-6 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-600`}
                />
                <ErrorMessage name={this.props.name}>{msg => <div className='text-red-500'>{msg}</div>}</ErrorMessage>
            </div>
        )
    }
}
