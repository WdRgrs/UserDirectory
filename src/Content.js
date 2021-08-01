import React, { useState, useEffect } from 'react';
import data from './data.js'
import  Button  from './Button.js';

export function Content() {
 
    const [dataArr, setDataArr] = useState([...data]); //Spread of Data.js
    const [cardIndex, setCardIndex] = useState(0); //Index of card in the data array
    const [person, setPerson] = useState(dataArr[cardIndex]); //Person object from data array at given index
    
    useEffect(() => {setPerson(dataArr[cardIndex])} , [dataArr, cardIndex]); //updating information displayed based on index of data array
    
    let { id, city, country, employer, title, favoriteMovies } = person; //destructured to target specific key of person object
    let { first, last } = person.name; //destructured to target specific name in name object of person

    //iterate over and print out every movie in the person.favorite movie object
    const favoriteMoviesList = 
        favoriteMovies.map((movie, index) => {
            return <li id="list" key={index}>{movie}</li>
        })

    // PROPS
    const goToNext = () => {setCardIndex(cardIndex => cardIndex + 1)};
    const goBack = () => {setCardIndex(cardIndex => cardIndex - 1)};
    const onFirstCard = cardIndex === 0;
    const onLastCard = cardIndex === dataArr.length - 1
    const onLastDelete = dataArr.length <= 1
    const deleteCard = () => {
        if (cardIndex === dataArr.length - 1 ) {
            goBack(); //having this function in allows you to delete the last item
            setDataArr(dataArr.filter(person => person.id + 1 !== id + 1))
        } else {
            setDataArr(dataArr.filter(person => person.id !== id))
        }
    }

    return (
        <>
            <header className="App-header">
                <div className="ContentBox">
                    <div className="box">
                        <p id="pageNumber">{cardIndex + 1}/{dataArr.length}</p>
                        <h1 className="ContentHead" id="name">{first} {last}</h1>
                        <div className="Information">
                            <div className="InformationDetails">
                                <p className="detailTitle">From: </p>
                                <p>{city}, {country}</p>
                            </div>
                            <div className="InformationDetails">
                                <p className="detailTitle">Job Title: </p>
                                <p>{title}</p>
                            </div>
                            <div className="InformationDetails">
                                <p className="detailTitle">Employer: </p>
                                <p>{employer}</p>
                            </div>
                        </div>
                        <div className="InformationDetails">
                                <p className="detailTitle">Favorite Movies: </p>
                                <ol>                 
                                        {favoriteMoviesList}                   
                                </ol>
                        </div>
                    </div>
                </div>
            </header>
            <Button
                goBack={goBack}
                goToNext={goToNext}
                onFirstCard={onFirstCard}
                onLastCard={onLastCard}
                deleteCard={deleteCard}
                onLastDelete={onLastDelete}
            />
        </>
        )    
}
