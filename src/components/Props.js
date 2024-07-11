import '../App.css'
import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//simple props concept

export default function Props (props){
    console.log(props);
    return(
    <div>
    <Card style={{ width: 'fit-content', border: '2px solid #000', borderRadius: '10px', margin:'20px', justifyItems: 'center'}} className='Props'>
      <Card.Body style={{padding:'10px'}}>
      <Card.Title>Images Props Concept</Card.Title>
      <Card.Img variant="top" src={props.img} />
      <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    
  );
}