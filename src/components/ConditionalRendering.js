import "../App.css";
import React from "react";
import Card from "react-bootstrap/Card";

export default function ConditionalRendering(props) {


  
  return (
    <Card style={{ width: 'auto', border: '2px solid #000', borderRadius: '10px', margin:'20px' }}>
      <Card.Body style={{padding: '10px'}}>
        {/* with the help vanilla JS we can do conditional rendering here. See the Component in the index.js file */}
        {props.setup && <h2> setup: {props.setup}</h2>}
        <p>Line: {props.line}</p>
        <p>The number of upvotes = {props.upvotes}</p>
      </Card.Body>
    </Card>
  );
}
