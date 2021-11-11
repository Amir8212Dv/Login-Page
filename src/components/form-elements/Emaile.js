import React , {useState} from 'react';

const Emaile = (props) => {

    const [clicked , setClicked] = useState(false)

    const eventHandler = event => {
        if (clicked && event.type === 'focus') setClicked(false)
        if (event.type === 'blur') setClicked(true)
    }
    
    return (
        <div className={props.class[0]}>
            <label>email</label>
            
            <input 
            type='email' 
            name='email' 
            value={props.email} 
            onChange={props.changeHandler} 
            onFocus={eventHandler} 
            onBlur={eventHandler} className={props.error ? '' : props.class[2] }/>
            
            {(props.isEmpty || clicked) && <p className={props.error ? props.class[1] : ''}>{props.error}</p>}
        </div>
    );
};

export default Emaile;