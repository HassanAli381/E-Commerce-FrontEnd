import React from 'react';
import img1 from './../Images/img1.avif';
import img2 from './../Images/img2.jpg';
import img3 from './../Images/img3.avif';
import './Slider.css';

function Slider() {
    return (
        <div id="carouselExample" className="carousel slide container">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 height-550" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100 height-550" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100 height-550" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;
