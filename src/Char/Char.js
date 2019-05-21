import React from 'react';

const char = (props) => {
    let myStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={myStyle} onClick={props.click}>
            {props.letter}
        </div>
    );
}

export default char