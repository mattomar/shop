import { useState, useEffect } from 'react';
import React from 'react';
import "./styles/Home.css"


function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "https://www.stevehuffphoto.com/wp-content/uploads/2015/12/front.jpg", // Replace with actual image URLs
        "https://joelcamera.co.id/wp-content/uploads/2023/09/wotancraft-scout-black-camera-bag-1.jpg",
        "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2016/12/vinson-images-review-wotancraft-scout-shoulder-camera-bag-header.jpg"
     ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [slides.length]);

    return (
        <div className="jumbotron">
            <div className="left-container">
                <h1 className="jumbotron-title">Tom Fletcher</h1>
                <p className="jumbotron-text">ELEGANT LEATHER<br /> MEN'S BACKPACKS</p>
                <p className="jumbotron-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, recusandae cum eligendi molestias commodi necessitatibus reiciendis maiores soluta non nesciunt repellat numquam sed illum veritatis delectus deleniti distinctio officiis hic?</p>
                <button className="jumbotron-explore-more">Explore More</button>
            </div>

            <div className="right-container">
                <div className="slider-wrapper">
                    <div
                        className="slides"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div className="slide" key={index}>
                                <img src={slide} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;