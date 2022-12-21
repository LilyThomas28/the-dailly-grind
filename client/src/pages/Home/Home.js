import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import './home.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "50%" }} className="text-center p-4 m-4">
        <Card.Body>
          <Card.Title><h1 className="title">Home Page</h1></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Click the button to find a coffee shop near you!
          </Card.Subtitle>
          <Card.Link href="Contact">
            <Button>Card Link</Button>
            </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
