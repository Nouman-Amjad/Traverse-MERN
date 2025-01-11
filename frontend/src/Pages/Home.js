import React from 'react';
import backgroundImage from '../Assets/bg.jpg';
import {Container, Row, Col, Button} from 'reactstrap'
import AllTours from './AllTours';
import { NavLink, Link } from 'react-router-dom';
import "./Home.css"
import Searchbar from '../Components/Searchbar';
import FeaturedTours from './FeaturedTours';

const Home = () =>{

  return (
    <div>
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
    
    <Container>
      <Row className="justify-content-center">
        <Col lg='2'></Col>
        <Col lg='8' className="text-center">
          <div className='content'>
            <p className='FirstLine'>WHERE <span className='highlight'>EVERY</span> MILE </p>
            <p className='SecondLine'>IS A SMILE</p>
            <p className="text">Welcome to a world where the journey is just as enchanting as the destination. At Traverse we invite you to embark on a voyage that transcends the ordinary, where every step is a story, and every adventure unveils a new chapter.</p>
          </div>
        </Col>
        <Col lg='2'></Col>
        
      </Row>
      
    </Container>
    </div>
    <Searchbar/>
    <Container>
      <Row>
        <Col lg = "12" className='mb-5'>
          <h2 className='FeaturedTour'>Our Featured Tours</h2>
        </Col>
        <FeaturedTours />
        
      </Row>
      <Button className="btn view_btn"><Link to={`/AllTours`} >View All</Link></Button>
    </Container>
    </div>
  );
}

export default Home;
