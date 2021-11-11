import React from 'react';
import styles from './CheckBox.module.css'

const CheckBox = (props) => {

    return (
        <div className={styles.checkBox_container}>
            <label >I accept the terms of privety policy</label>

            <input 
            type='checkbox' 
            name='checkBox' 
            value={props.name}
            onChange={props.onChange}
            />

        </div>
    );
};

export default CheckBox;