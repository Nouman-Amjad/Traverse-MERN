import React from 'react'
import TourCard from './TourCard'
import TourData from '../Assets/data/tours'
import {Col} from 'reactstrap'
const Tour = () => {
  return (
    <div>
      <div className="row">
          {TourData.map(tour => (
            <Col key={tour.id} lg="3" sm="12" className="mb-4">
              <TourCard tour={tour} />
            </Col>
          ))}
        </div>
    </div>
  )
}

export default Tour
