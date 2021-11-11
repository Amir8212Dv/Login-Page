import React , {useState , useEffect, useRef} from 'react';
import styles from './SignUp.module.css'
import {Link} from 'react-router-dom'
import validate from './validate';
import Name from './form-elements/Name';
import Emaile from './form-elements/Emaile';
import Password from './form-elements/Password';
import ConfirmPassword from './form-elements/ConfirmPassword';
import CheckBox from './form-elements/CheckBox'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './Toast';


const SignUp = () => {

    const [data , setData] = useState({
        name : '',
        email : '' ,
        password : '',
        confirmPassword : '',
        checkBox : false,
        isEmpty : false
    })

    const [error , setError] = useState({})

    const signUpBtn = useRef()

    useEffect(() => {
        setError(validate(data))

    } , [data])

    const changeHandler = event => {

        if (event.target.name === 'checkBox') { 
            setData({...data , checkBox : !data.checkBox }) 
        } 
        else { setData({...data , [event.target.name] : event.target.value }) }
    }

    useEffect (() => {
        signUpBtn.current.disabled = !data.checkBox

    } , [data.checkBox])

    
    const submitHandler = event => {
        event.preventDefault()

        if (Object.keys(error).length > 0) {
            setData({...data , isEmpty : true})
            notify('Invalid data' , 'error')

        } else if (Object.keys(error).length === 0) {
            notify('SignedUp successfully!' , 'success')
        } 
    }

    return (
        <div className={styles.container} id={styles.signup}>
            <form onSubmit={submitHandler}>
                <h1>Sign Up</h1>
                
                <Name 
                isEmpty={data.isEmpty} 
                class={[styles.div_input , styles.error , styles.green]} 
                name={data.name} 
                changeHandler={changeHandler} 
                error={error.name} 
                />

                <Emaile 
                isEmpty={data.isEmpty} 
                class={[styles.div_input , styles.error , styles.green ]} 
                name={data.email} 
                changeHandler={changeHandler} 
                error={error.email} 
                />

                <Password 
                isEmpty={data.isEmpty} 
                class={[styles.div_input , styles.error , styles.green ]} 
                name={data.password} 
                changeHandler={changeHandler} 
                error={error.password} 
                />

                <ConfirmPassword 
                isEmpty={data.isEmpty} 
                class={[styles.div_input , styles.error , styles.green]} 
                name={data.confirmPassword} 
                changeHandler={changeHandler} 
                error={error.confirmPassword} 
                />

                <CheckBox 
                name={data.checkBox} 
                onChange={changeHandler} 
                />
                
                <div className={styles.btn}>
                    <Link to='/login'>Login</Link>
                    <button ref={signUpBtn} type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer/>

        </div>
    );
};

export default SignUp;