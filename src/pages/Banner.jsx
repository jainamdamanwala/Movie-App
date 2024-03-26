import React, {useState, useEffect} from 'react';
import bgImg from '../images/bg-transformer.jpg';
import './banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);
    const fetchData = () =>{
        fetch('http://localhost:3000/data/movieData.json')
        .then(res=>res.json())
        .then(data => setMovies(data))
        .catch(e=>console.log(e.message));
    };

    useEffect(()=>{
        fetchData()
    },[]);

    return ( 
        <div className='banner'>
            <div className="movie">
                <img src={bgImg} alt="Background Image" className='bgImg active'/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="content active">
                                <img src="" alt="Movie Title" className="movie-title" />
                                <h4>
                                    <span>Year</span>
                                    <span> 
                                        <i>age</i>
                                    </span>
                                    <span>length</span>
                                    <span>Category</span>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate laborum non assumenda at sunt aut, eius reprehenderit quisquam maxime fugiat omnis perferendis, dolorem sequi recusandae itaque similique ad. Odio.</p>
                                <div className="button">Button</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="date active">
                                <h2>On 15th August</h2>
                            </div>
                            <div className="trailer d-flex align-items-center justify-content-center active">
                                <a href="#" className="playBtn">
                                <ion-icon name="play-outline"></ion-icon>
                                </a>
                                <p>Watch Trailer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Banner;