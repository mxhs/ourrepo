import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'

export const SignUpPage = () => {
    const { register, handleSubmit, errors, reset, formState } 
    = useForm({
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const [error, setError] = useState(false)

    const onSubmit = (newUser) => {
        console.log("this is the new user data", newUser)
        postNewUser(newUser)
        reset()
    };

    const history = useHistory()

    const postNewUser = newUser => {
        axios
            .post('https://pintereach-backend-ajg.herokuapp.com/users/signup', newUser)
            .then(res => {
                console.log("res data", res.data)
                history.push('/LoginPage')
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
            <h2>Sign Up</h2>
            <div>
                {error ? <p>The username already exists.</p> : null}
                <input 
                    type="text"
                    placeholder="Username" 
                    name="username" 
                    ref={register({
                        required: true, 
                        minLength: 4})} 
                />
                {errors.username && <p className='errorMessage'>*Username must be a minimum of 4 characters</p>}
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="Password" 
                    name="password" 
                    ref={register({required: true, minLength: 6})} 
                />
                {errors.password && <p className='errorMessage'>*Password must be a minimum of 6 characters</p>}
            </div>
            <div>
                <input 
                    type="submit" 
                    value="Sign Up" 
                    disabled={!formState.isValid}
                />
            </div>
            <Link to='/LoginPage'>Already have an account?</Link>
        </form>
    )
}

