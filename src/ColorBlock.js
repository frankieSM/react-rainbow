//COLORBLOCK COMPONENT
import React from 'react';

//props = colors array in app.js
function ColorBlock(props) {
    return (
        <div 
        className='colorBlock'
        style={{'backgroundColor': props.color}}>

            <p>{props.color}</p>
            
        </div>
    )
}

export default ColorBlock