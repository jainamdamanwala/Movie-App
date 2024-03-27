import React from 'react';
import './movieContent.css';
import Button from './Button';
import titleImg from '../images/transformer-title.png'
function MovieContent() {
    return ( 
    <div className="content active">
        <img src={titleImg} alt="Movie Title" className="movie-title" />
        <h4>
            <span>Year</span>
            <span> 
                <i>age</i>
            </span>
            <span>length</span>
            <span>Category</span>
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate laborum non assumenda at sunt aut, eius reprehenderit quisquam maxime fugiat omnis perferendis, dolorem sequi recusandae itaque similique ad. Odio.</p>
        <div className="button">
            <Button icon = {<ion-icon name="bookmark-outline"></ion-icon>} name="Book" color="#ff3700" bgColor="#ffffff"/>
            <Button icon = {<ion-icon name="add-outline"></ion-icon>} name="My List"/>
        </div>
    </div>
    );
}

export default MovieContent;