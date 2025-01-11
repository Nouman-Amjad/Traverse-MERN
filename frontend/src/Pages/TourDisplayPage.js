import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const TourDisplayPage = () => {
    const location = useLocation();
    const tour = location.state.tour;
    const { id } = useParams();
    const navigate = useNavigate();
    const [tourData, setTourData] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        userEmail: '',
        phoneNumber: '',
        guestSize: 1,
        bookAt: new Date()
    });

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/tours/${id}`);
                if (response.data.success) {
                    setTourData(response.data.data);
                } else {
                    console.error('Failed to fetch tour data');
                }
            } catch (error) {
                console.error('Error fetching tour data:', error);
            }
        };

        fetchTourData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            bookAt: date
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const bookingDetails = {
                userId: '1', 
                userEmail: formData.userEmail,
                tourName: tour.title, 
                fullName: formData.fullName,
                guestSize: formData.guestSize,
                phone: formData.phoneNumber,
                bookAt: formData.bookAt
            };
            const response = await axios.post('http://localhost:4000/Booking', bookingDetails);
            if (response.data.success) {
                navigate('/thankyou');
            } else {
                console.error('Failed to book the tour:', response.data.message);
            }
        } catch (error) {
            console.error('Error booking the tour:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    {/* <img src={tour?.photo} alt={tour?.title} className="img-fluid" style={{ borderRadius: '5px' }} /> */}
                </div>
                <div className="col-md-6">
                    <div className="tour-form">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="userEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name:</label>
                                <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="guestSize" className="form-label">Number of Guests</label>
                                <input type="number" className="form-control" id="guestSize" name="guestSize" value={formData.guestSize} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bookAt" className="form-label">Select Date:</label>
                                <DatePicker
                                    id="bookAt"
                                    selected={formData.bookAt}
                                    onChange={handleDateChange}
                                    className="form-control"
                                    dateFormat="dd/MM/yyyy"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TourDisplayPage;
