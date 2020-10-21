//async validations?
import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {StyledSignUp} from './styles/StyledSignUp'

const LoginPage = () => {
    const { register, handleSubmit, errors, reset, formState } = 
    useForm({
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const [error, setError] = useState(false)

    const onSubmit = (currentUser) => {
        console.log("this is the new user data", currentUser)
        postNewUser(currentUser)
        reset()
    };

    const postNewUser = newUser => {
        axios
            .post('https://pintereach-backend-ajg.herokuapp.com/users/login', 
            newUser)
            .then(res => {
                console.log("res data", res.data)
                console.log("res", res)
                const token = res.data.token
                localStorage.setItem('token', token)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
            .finally = () => {
                
            }
    }

    return (
        <StyledSignUp onSubmit={handleSubmit(onSubmit)}>
            <div className='mainBody'>
                <div className='welcome'>
                    <h1>Your Articles Await...</h1>
                </div>
                <div className='form'>
                    <h2>Login</h2>            
                    {error ? <p>The username and/or password is not valid</p> : null}
                    <input 
                        type="text"
                        placeholder="Username" 
                        name="username" 
                        ref={register({
                            required: true, 
                            minLength: 4})} 
                    />                
                    <input 
                        type="password"
                        placeholder="Password" 
                        name="password" 
                        ref={register({required: true, minLength: 6})} 
                    />
                    {errors.password && <p className='errorMessage'>*Password must be a minimum of 6 characters</p>}                
                    <input 
                        type="submit" 
                        value="Sign In" 
                        disabled={!formState.isValid}
                    />                
                    <Link to='/SignUpPage'>Don't have an account?</Link>            
                    </div>
            </div>
        </StyledSignUp>
    )
}

export default LoginPage