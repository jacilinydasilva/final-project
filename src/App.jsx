import React, { useState } from 'react';
import { Container, Row, Col, Stack, Card, CardGroup } from 'react-bootstrap';
import CourseCard from './Components/CourseCard.jsx';
import SearchBar from './Components/SearchBar.jsx';
import NavBar from './Components/NavBar.jsx';
import data from './course_catalog.js';
import './App.css';

//import Course from "./new.json";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import FormDataComponent from './components/form-data-component';
function App(props) {

  // const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("")

  console.log(data);
  return (
    <main>
      <NavBar />
      <SearchBar
        setQuery={setQuery}
        data={data}
      />


      <Container>
        <h2 className="section-title">Courses</h2>

        <Row xs={1} md={3} className="g-4">
          {data.filter(course => course.Course_Description.includes(query) || query === "").map(course => (
            <Col>

                 <CourseCard course={course} key={course.Course_Code} />
         
            </Col>))}
        </Row>   
        
      </Container>
    </main>
  );
}


export default App;