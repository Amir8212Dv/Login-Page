import React , {useState} from 'react';

const Password = (props) => {

    const [clicked , setClicked] = useState(false)

    const eventHandler = event => {
        if (event.type === 'focus') setClicked(true)
    }
    
    return (
        <div className={props.class[0]}>
            <label>password</label>
            
            <input 
            type='password' 
            name='password' 
            value={props.password} 
            onChange={props.changeHandler} 
            onFocus={eventHandler} 
            className={ props.error ? '' : props.class[2] }/>
            
            {(props.isEmpty || clicked) && <p className={props.error ? props.class[1] : ''}>{props.error}</p>}
            
        </div>
    );
};

export default Password;

