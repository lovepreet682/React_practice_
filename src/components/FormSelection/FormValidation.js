import React, { useState } from 'react'

function FormValidation() {
    const [formHandle, setFormHandle] = useState({
        name: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: ""
    })

    const ChangeInputFunction = (e) => {
        const { name, value } = e.target
        setFormHandle({ ...formHandle, [name]: value });
    }

    //Show the error
    const [error, setError] = useState({})

    const HandleSubmit = (e) => {
        e.preventDefault();

        //it will holds the error
        const ValidationError = {};
        if (!formHandle.name) {
            ValidationError.name = 'Name is required';
        } else if (formHandle.name.length < 4) {
            ValidationError.name = "Name word must be 4 letter above"
        }

        if (!formHandle.email) {
            ValidationError.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formHandle.email)) {
            ValidationError.email = 'Invalid email format';
        }

        if (!formHandle.password) {
            ValidationError.password = 'Password is required';
        } else if (formHandle.password.length < 6) {
            ValidationError.password = 'Password must be at least 6 characters long';
        }
        if (!formHandle.confirmPassword) {
            ValidationError.confirmPassword = "Confirm password is required";
        }
        if (formHandle.confirmPassword !== formHandle.password) {
            ValidationError.confirmPassword = "password not matched"
        }

        setError(ValidationError)

        if (Object.keys(ValidationError).length === 0) {
            alert("Form Submitted successfully")
        }
    }

    return (
        <>
            <div id="formValidation" className='pt-5'>
                <div className="container">
                    <h2 className='text-center py-3'>Register Here</h2>
                    <form action="" className='' id='formStyling' onSubmit={HandleSubmit}>
                        <div className="row  justify-content-center">
                            <div class="col-md-4 col-lg-3 col-12 mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="name" class="form-control" name='name' value={formHandle.name} onChange={ChangeInputFunction} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {error.name && <span className="error">{error.name}</span>}
                            </div>

                            <div class="col-md-4 col-lg-3 col-12 mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter Your Email</label>
                                <input type="email" class="form-control" name="email" value={formHandle.email} onChange={ChangeInputFunction} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {error.email && <span className="error">{error.email}</span>}
                            </div>
                        </div>

                        <div className="row  justify-content-center">
                            <div class="col-md-4 col-lg-3 col-12 mb-3">
                                <label for="exampleInputEmail1" class="form-label">Password</label>
                                <input type="password" class="form-control" name='password' value={formHandle.password} onChange={ChangeInputFunction} id="exampleInputEmail1" aria-describedby="emailHelp" />

                                {error.password && <span className="error">{error.password}</span>}
                            </div>

                            <div class="col-md-4 col-lg-3 col-12 mb-3">
                                <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" name='confirmPassword' value={formHandle.confirmPassword} onChange={ChangeInputFunction} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {error.confirmPassword && <span className="error">{error.confirmPassword}</span>}
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-success '>Submit Here</button>
                        </div>
                    </form >
                </div >
            </div >
        </>
    )
}

export default FormValidation