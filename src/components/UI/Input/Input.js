import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch(props.elementType){
        case('textarea'):
            inputElement = <textarea value={props.value} onChange={props.changed} {...props.config}/>;
            break;
        default: 
            inputElement = <input value={props.value} onChange={props.changed} {...props.config} />;
        
    }
    return(
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;