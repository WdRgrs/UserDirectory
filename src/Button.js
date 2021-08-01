import React from 'react';

export default function Button(props) {
    const { goBack, goToNext, onFirstCard, onLastCard, deleteCard, onLastDelete } = props;

    return (
        <div className="Button">
            <span>

            <button className="PrevNext" disabled={onFirstCard} onClick={goBack}>&lt; Previous</button>
            </span>
            <div id="CButtons">
                <button className="CenterButton">Edit</button>
                <button className="CenterButton" disabled={onLastDelete} onClick={deleteCard} >Delete</button>
                <button className="CenterButton">New</button>
            </div>
            <button className="PrevNext" disabled={onLastCard} onClick={goToNext}>Next &gt;</button>
        </div>
    )
}