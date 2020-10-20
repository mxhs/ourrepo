//async validations?
import React, {useState} from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

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

    const history = useHistory()

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <div>
                {error ? <p>The username and/or password is not valid</p> : null}
                <input 
                    type="text"
                    placeholder="Username" 
                    name="username" 
                    ref={register({
                        required: true, 
                        minLength: 4})} 
                />
            </div>
            <div>
                <input 
                    type="password"
                    placeholder="Password" 
                    name="password" 
                    ref={register({required: true, minLength: 6})} 
                />
                {errors.password && <p className='errorMessage'>*Password must be a minimum of 6 characters</p>}
            </div>
            <div>
                <input 
                    type="submit" 
                    value="Sign In" 
                    disabled={!formState.isValid}
                />
            </div>
            <Link to='/SignUpPage'>Don't have an account?</Link>
        </form>
    )
}

export default LoginPage