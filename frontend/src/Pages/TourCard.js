import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import './TourCard.css';
import { useNavigate } from 'react-router-dom';


const TourCard = ({ tour }) => {
    const navigate = useNavigate();
    const { id, title, city, photo, price, featured, reviews } = tour;

    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : totalRating / reviews?.length;

    // const handleBooking = async () => {
    //     const bookingDetails = {
    //         tourName: "Islamabad",
    //         fullName:
    //             "musaddiq",
    //         guestSize:
    //             3,
    //         phone:
    //             1234567
    //     };

    //     try {
    //         const response = await axios.post('http://localhost:4000/createBooking', bookingDetails);
    //         if (response.data.success) {
    //             alert('Your tour is booked!');
    //             // You can navigate to a confirmation page or perform other actions
    //         } else {
    //             alert('Failed to book the tour. Please try again.');
    //         }
    //     } catch (error) {
    //         console.error('Error booking the tour:', error);
    //         alert('An error occurred while booking the tour.');
    //     }
    // };

    const handleBookingClick = () => {
        navigate(`/tour/${id}`, { state: { tour } });
    };

    return (
        <div className="tour_card">
            <Card>
                <div className="tour_img">
                    <img src={photo} alt="tour-img" />
                    {featured && <span>Featured</span>}
                </div>

                <CardBody>
                    <div className="card_top d-flex align-items-center justify-content-between">
                        <span className="tour_location d-flex align-items-center gap-1">
                            <i className="fi fi-sr-marker"></i> {city}
                        </span>
                        <span className="tour_rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
                        </span>
                    </div>
                    <h5 className="tour_title"><Link to={`/tours/${id}`}>{title}</Link></h5>
                    <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
                        <h5 className="tour_price">${price}<span>/per person</span></h5>
                        {/* <button className="btn booking_btn"><Link to={`/Tour/${id}`}>Book Now</Link></button> */}
                        <button className="btn booking_btn" onClick={handleBookingClick}>Book Now</button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default TourCard;
