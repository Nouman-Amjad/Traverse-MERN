import React from 'react'
import Searchbar from '../Components/Searchbar'
import { Container, Row, Col} from 'reactstrap'
import Tour from './TourCard'
import tourData from '../Assets/data/tours'

const AllTours = () => {
  return (
    <div>
    <Searchbar />
    <div className="bg-cover bg-center h-screen d-flex justify-content-center align-items-center" style={{background: '#dbf9ff'}}>
      <Container>
        <Row>
          <Col>
          <h1>Featured Tours</h1>
          <Row>
            {tourData.map(tour => (
              <Col lg={3} key={tour.id}>
                <Tour tour={tour} />
              </Col>
            ))}
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default AllTours
