import React from 'react';

const validationComponent = (props) => {
    let validationText = 'Text is too short!';

    if (props.textLength >= 5) {
        validationText = 'That\'s OK';
    }

    return(
        <div>
            <p>{validationText}</p>
        </div>
    );

}

export default validationComponent;