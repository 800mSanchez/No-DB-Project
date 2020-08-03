import React from 'react';

const Buttons = props => {
    
    return (
        <div className="nav">
                <h3 onClick={props.previousChange}>{'Previous Movie'}</h3>
                 <div className="alters">
                    <h5
                    onClick={() => props.updateMovie(props.movie.id)}>Edit</h5>
                    <h5 className="delete-btn"
                            onClick={() => props.deleteMovie(props.movie.id)}>Delete</h5>
                   {/*  <h5>New</h5> */}
                </div>
                <h3 onClick={props.nextChange}>{'Next Movie'}</h3>
        </div>
    )
}

export default Buttons