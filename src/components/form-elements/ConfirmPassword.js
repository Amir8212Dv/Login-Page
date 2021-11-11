import React , {useState} from 'react';

const ConfirmPassword = (props) => {

    const [clicked , setClicked] = useState(false)

    const eventHandler = event => {

        if (event.type === 'focus') setClicked(true)
        else if (event.type === 'blur' && !event.target.value) setClicked(false)
        else {setClicked(true)}
    }

    return (
        <div className={props.class[0]}>
            <label>Confirm Password</label>
            
            <input 
            type='password' 
            name='confirmPassword' 
            value={props.confirmPassword} 
            onChange={props.changeHandler} 
            onFocus={eventHandler} 
            onBlur={eventHandler} className={props.error ? '' : props.class[2] }/> 
            
            {(props.isEmpty || clicked) && <p className={props.error ? props.class[1] : ''}>{props.error}</p>}
        </div>
    );
};

export default ConfirmPassword;