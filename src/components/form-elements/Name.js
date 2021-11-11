import React , {useState} from 'react';

const Name = (props) => {
    
    const [clicked , setClicked] = useState(false)

    const eventHandler = event => {
        if (clicked && event.type === 'click') setClicked(false)
        if (event.type === 'blur') setClicked(true)
    }

    return (
        <div className={props.class[0]}>
            <label>Username</label>

            <input 
            type='text' 
            name='name' 
            value={props.name} 
            onChange={props.changeHandler} 
            onBlur={eventHandler} 
            onClick={eventHandler}
            className={props.error ? '' : props.class[2] } />
            
            {(props.isEmpty || clicked) && <p className={props.error ? props.class[1] : ''}>{props.error}</p>}
        </div>
    );
};

export default Name;

