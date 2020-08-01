import React from 'react';

const Buttons = props => {
    
    return (
        <div className="nav">
                <h3 onClick={props.previousChange}>{'Previous Movie'}</h3>
                 <div className="alters">
                    {/* <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button> */}
                </div>
                <h3 onClick={props.nextChange}>{'Next Movie'}</h3>
        </div>
    )
}

export default Buttons