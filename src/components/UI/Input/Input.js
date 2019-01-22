import React from 'react';

const Input = (props) => {
    let inputElement = null;

    switch(props.elementType){
        case('textarea'):
            inputElement = <textarea value={props.value} onChange={props.changed} {...props.elementConfig}/>;
            break;
        default: 
            inputElement = <input value={props.value} onChange={props.changed} {...props.elementConfig} />;
        
    }
    return(
        <div>
            {inputElement}
        </div>
    );
}

export default Input;