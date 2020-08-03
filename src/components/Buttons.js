import React from 'react';

const Buttons = props => {
    
    return (
        <div className="nav">
                <h3 onClick={props.previousChange}>{'Previous Movie'}</h3>
                 <div className="alters">
                    <h5
                    onClick={() => props.updateMovie(props.movie.id)}>Updated</h5>
                    <h5
                    onClick={() => props.deleteMovie(props.movie.id)}>Delete</h5>
                    <h5 
                    onClick={() => props.editMovie(props.movie.id)} placeholder="title">Edit</h5>
                </div>
                <h3 onClick={props.nextChange}>{'Next Movie'}</h3>
        </div>
    )
}

export default Buttons