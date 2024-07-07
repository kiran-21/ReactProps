import '../App.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//simple props concept
function Props (props){
    console.log(props);
    return(
    <Card style={{ width: '18rem' }} className='Props'>
      <Card.Body>
      <Card.Title>Images Props Concept</Card.Title>
      <Card.Img variant="top" src={props.img} />
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default Props;