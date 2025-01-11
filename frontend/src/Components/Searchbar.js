import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import axios from 'axios';
import "./SearchBar.css";
import AllTours from "../Pages/AllTours";
import Tour from '../Pages/TourCard'; 

const Searchbar = () => {
  const [tourData, setTourData] = useState([]); // State to hold tour data

  const buttonStyle = {
    backgroundColor: '#3d7e8e',
    paddingLeft: '7%',
    paddingRight: '7%',
    marginBottom: '5%'
  };
  const locationRef = useRef('');
  const budgetRef = useRef(0);
  const dateRef = useRef('');

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const budget = budgetRef.current.value;
    const date = dateRef.current.value;
    if (location === '' || budget === '') { return alert("All field Required!"); }

    try {
      const response = await axios.get(`http://localhost:4000/tours/search/getTourbySearch?city=${location}&price=${budget}`);
      console.log(response.data.data);

      if (response.data.data.length > 0) {
        const data = response.data.data.map(item => ({
          id: item._id,
          title: item.title,
          city: item.city,
          address: item.address,
          distance: item.distance,
          price: item.price,
          maxGroupSize: item.maxGroupSize,
          desc: item.desc,
          reviews: item.reviews,
          photo: item.photo,
          featured: item.featured
        }));
        setTourData(data); // Update state with tour data
      }

    } catch (error) {
      console.error('Error fetching tour data:', error);
      alert('Error fetching tour data. Please try again later.');
    }
  };

  const searchAll = async () => {
   <AllTours />
  }

  return (
    <div className="bg-cover bg-center h-screen d-flex justify-content-center align-items-center" style={{ background: '#dbf9ff' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" sm="8">
            <div className="text-center">
              <p className="pcontent">Start your vacation now</p>
              <p>Looking for your dream vacation destination but don't know where to start? With the help of experienced knowledgeable travel agents, you can plan a trip of a lifetime with ease.</p>
            </div>
            <div className="search_bar">
              <Form className="d-sm-flex flex-sm-column flex-lg-row gap-4 align-items-sm-center align-items-lg-start">
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                  <div><span className="icon"><i className="fi fi-br-calendar"></i></span>
                    <h6>Date</h6>
                    <input type="date" placeholder="" ref={dateRef}></input>
                  </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                  <div>
                    <span className="icon"><i className="fi fi-sr-usd-square"></i></span>
                    <h6>Budget</h6>
                    <input type="number" placeholder="$" ref={budgetRef}></input>
                  </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                  <div><span className="icon"><i className="fi fi-sr-marker"></i></span>
                    <h6>Location</h6>
                    <input type="text" placeholder="Where are you going?" ref={locationRef}></input>
                  </div>
                </FormGroup>
              </Form>
              <div className="btn-group" style={{ width: '200px' }}>
                <Button className="Search" type="Submit" onClick={searchHandler} style={buttonStyle}>Search</Button>
                <Button className="Search" type="Submit" onClick={searchAll} style={buttonStyle}>Show All</Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="">
          <h1>Destinations</h1>
          <Row>
            {tourData.map(tour => (
              <Col lg={3} key={tour.id}>
                <Tour tour={tour} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Searchbar;
