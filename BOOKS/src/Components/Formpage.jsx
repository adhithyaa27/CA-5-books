import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import './Formpage.css';

function Formpage() {
    
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    
    const [registerSuccessful, setRegisterSuccessful] = useState(false);
    const [isFormEdited, setIsFormEdited] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setRegisterSuccessful(true);
    };

    const handleFormChange = () => {
        setIsFormEdited(true);
    };

    return (
        <div className='Main'>
            <Link to='/'>
            <button className="nameBtn">BACK</button>    
            </Link>
            <div className="content">
            {registerSuccessful && (
                <div className='success'>
                    <p>Registration Successful</p>
                </div>
            )}
            <h1 className='title'>CREATE ACCOUNT</h1>
            <form className='Form' onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>
                <label>Your Name:</label>
                <input type="text" name='yourName' {...register("yourName", {
                    required: "Your Name is required!",
                    minLength: {
                        value: 3,
                        message: "Your Name must be more than 3 characters"
                    },
                    maxLength: {
                        value: 30,
                        message: "Your Name cannot be more than 30 characters"
                    }
                })} />
                {errors.yourName && <p className='err'>{errors.yourName.message}</p>}

                <label>Email :</label>
                <input type="email" name='email' {...register("email", { required: "Email is required!", pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" } })} />
                {errors.email && <p className='err'>{errors.email.message}</p>}

                <label>Password :</label>
                <input type="password" name='password' {...register("password", {
                    required: "Password is required",
                    pattern: {
                        value: /^(?=.*[!@#$%^&*])\w+\S+/,
                        message: "Password must contain at least one special character "
                    },
                    minLength: {
                        value: 10,
                        message: "Password cannot be less than 10 characters"
                    }
                })} />
                {errors.password && (<p className='err'>{errors.password.message}</p>)}

                <label>Confirm Password :</label>
                <input
                    type="password"
                    name="confirmPassword"
                    {...register("confirmPassword", {
                        validate: (value) =>
                            value === getValues("password") || "Passwords do not match",
                    })}
                />
                {errors.confirmPassword && <p className="err">{errors.confirmPassword.message}</p>}
                
                <button id='btn' type="submit" disabled={!isFormEdited}>Sign Up</button>
            </form>
            </div>
        </div>
    )
}

export default Formpage;