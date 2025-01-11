import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom' // Import Link from react-router-dom

const MyBookings = () => {
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/booking', {
      email: localStorage.getItem('email')
    })
      .then((res) => {
        console.log(res.data.data)
        setBooking(res.data.data)
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, []);
  const books = bookings.filter((booking)=>{
    return booking.userEmail==localStorage.getItem('email')
  })
  return (
    <div>
      <div className="bg-cover bg-center h-screen d-flex justify-content-center align-items-center" style={{ background: '#dbf9ff' }}>
        <Container>
          <h1>My Bookings</h1>
          <Row>
            {books.map((tour) => {
              const {
                bookAt,
                createdAt,
                fullName,
                guestSize,
                phone,
                tourName,
                updatedAt,
                userEmail,
                userId
              } = tour;
              
              return (
                  
                <React.Fragment key={tour._id}>
                  <Card>
                    <CardBody>
                      <div className="card_top d-flex align-items-center justify-content-between">
                        <span className="tour_location d-flex align-items-center gap-1">
                          {phone} {/* Placeholder for city */}
                        </span>
                        <span className="tour_rating d-flex align-items-center gap-1">
                           {tourName}
                        </span>
                      </div>
                      <h5 className="tour_title"><Link to={`/tours/${tour.id}`}>{fullName}</Link></h5> {/* Placeholder for id and title */}
                      <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
                        <h5 className="tour_price">{guestSize}</h5> {/* Placeholder for price */}
                        <button className="btn booking_btn">Delete</button>
                      </div>
                    </CardBody>
                  </Card>
                </React.Fragment>
              )
            })} 
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MyBookings;
