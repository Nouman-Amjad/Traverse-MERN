import React from 'react';
import { Col } from 'reactstrap';
import TourCard from './TourCard'; // Assuming this is your component for rendering a single tour card
import TourData from '../Assets/data/tours'; // Assuming this is your array of tour data

const FeaturedTours = () => {
  return (
    <div className="bg-cover bg-center py-4" style={{ background: '#fff' }}>
      <div className="container">
        <div className="row">
          {TourData.map(tour => (
            <Col key={tour.id} lg="3" sm="12" className="mb-4">
              <TourCard tour={tour} />
            </Col>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTours;
