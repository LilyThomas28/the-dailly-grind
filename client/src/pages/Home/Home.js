import React from "react";
import { Card } from "react-bootstrap";

export default function Home() {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "50%" }} className="text-center p-4 m-4">
        <Card.Title>Home Page</Card.Title>
      </Card>
    </div>
  );
}
