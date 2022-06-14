import React from 'react';
import Card from "react-bootstrap/Card";
import { CardGroup } from 'react-bootstrap';
import './CourseCard.css';


function CourseCard(props) {
  return (
    <div>
      <Card style={{ width: "24rem", height: "470px", 
  backgroundColor : {  props.course.Department == "English" ? "lightblue"      
                  : props.course.Department == "History" ? "green" : }}}>
        <Card.Body>
          <Card.Title>{props.course.Course_Name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.course.Course_Code}</Card.Subtitle>
          <Card.Text>
            {props.course.Prerequisites}
          </Card.Text>
          <Card.Text>
            {props.course.Department}
          </Card.Text>
          <Card.Text>
            {props.course.Course_Description}
          </Card.Text>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CourseCard;