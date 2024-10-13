import { useState, useEffect } from 'react';
import React from 'react';
import "./styles/Home.css";

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
        <div>
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

            {/* New parent container */}
            <div className="underjumb">
                <div className="icon-item">
                    <i className="fa-solid fa-truck icon"></i> {/* Truck Icon */}
                    <p>Fast Delivery</p>
                </div>
                <div className="icon-item">
                    <i className="fa-solid fa-hand-holding-dollar icon"></i> {/* Hand Holding Dollar Icon */}
                    <p>Affordable Prices</p>
                </div>
                <div className="icon-item">
                    <i className="fa-solid fa-boxes-stacked icon"></i> {/* Boxes Stacked Icon */}
                    <p>Secure Packaging</p>
                </div>
                <div className="icon-item">
                    <i className="fa-solid fa-cash-register icon"></i> {/* Cash Register Icon */}
                    <p>Easy Checkout</p>
                </div>
            </div>

            {/* About Us Section */}
            <div className="about-section">
                <div className="about-left-container">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-description"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /><br /><br /><br />Optio ad sed velit earum provident, eveniet tempora iure voluptatem. Commodi veniam minus suscipit deserunt atque repellat reprehenderit? Minima voluptas nulla et? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dapibus tortor. Donec nec dolor nec ipsum tristique vehicula et non eros. Nullam tincidunt ligula ut dui cursus condimentum.</p>
                </div>
                <div className="about-right-container">
                    <img src="https://us.images.westend61.de/0000901021pw/low-section-of-man-holding-bag-while-walking-on-street-in-city-CAVF33915.jpg" alt="About Us" className="about-image" />
                </div>
            </div>
        </div>
    );
}

export default Home;