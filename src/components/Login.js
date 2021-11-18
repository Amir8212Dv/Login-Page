import React , {useState , useEffect} from 'react';
import Name from './form-elements/Name';
import Password from './form-elements/Password'
import validate from './validate';
import styles from './SignUp.module.css'
import {Link} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './Toast';


const Login = () => {
    document.title = 'Login'
    const [data , setData] = useState({
        name : '',
        password : '',
        isEmpty : false
    })

    const [error , setError] = useState({})

    useEffect(() => {
        setError(validate(data))
        
    } , [data])

    const changeHandler = event => {
        setData({...data , [event.target.name] : event.target.value })
    }

    const submitHandler = event => {
        event.preventDefault()

        if (Object.keys(error).length > 3) {
            setData({...data , isEmpty : true})

            notify('Invalid data' , 'error') 

        } else if (Object.keys(error).length === 3) {
            notify('SignedIn successfully!' , 'success')
        } 
    }

    return (
        <div className={styles.container} id={styles.login}>
            <form onSubmit={submitHandler}>
                <h1>Login</h1>

                <Name 
                isEmpty={data.isEmpty} 
                class={[styles.div_input , styles.error , styles.green]} 
                name={data.name} 
                changeHandler={changeHandler} 
                error={error.name} 
                />
                
                <Password 
                isEmpty={data.isEmpty} 
                class={[styles.div_input , styles.error , styles.green]} 
                name={data.name} 
                changeHandler={changeHandler} 
                error={error.password} 
                />
                
                <div className={styles.btn}>
                    <Link to='/signup'>Sign up</Link>
                    <button type='submit'>Sign in</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Login;
