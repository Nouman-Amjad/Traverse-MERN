import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './tourGallery.module.css';
import pakistan from '../Assets/destination_images/pakistan.jpg';
import newzeland from '../Assets/destination_images/newzeland.jpg';
import netherland from '../Assets/destination_images/netherlands.jpg';
import england from '../Assets/destination_images/london.jpg';
import thailand from '../Assets/destination_images/thailand.jpg';
import france from '../Assets/destination_images/france.jpg';
import portugal from '../Assets/destination_images/portugal.jpg';
import italy from '../Assets/destination_images/italy.jpg';

const TourGallery = () => {
    const [showButton, setShowButton] = useState(false);

    return (
        <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    src={pakistan}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="pakistan"
                />

                <img
                    src={newzeland}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="newzeland"
                />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                    src={netherland}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="netherland"
                />

                <img
                    src={england}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="england"
                />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                    src={thailand}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="thailand"
                />

                <img
                    src={france}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="france"
                />
            </div>
        </div>
    );
};
export default TourGallery;
