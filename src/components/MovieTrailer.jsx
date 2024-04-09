import React, {useState} from 'react';
import './movieTrailer.css';
import Button from './Button.jsx';
import Modal from './Modal.jsx';

function MovieTrailer({movie}) {
    const [modal,setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return ( 
        <>
            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
                {/* <a href="#" className="playBtn">
                <ion-icon name="play-outline"></ion-icon>
                </a> */}
                <p onClick={toggleModal}><Button icon={<ion-icon name="play-circle-outline"></ion-icon>} name="Watch Trailer"/></p>
            </div>
            {movie.active && <Modal movie={movie} status = {modal} toggleModal = {toggleModal}/>}
        </>
     );
}

export default MovieTrailer;