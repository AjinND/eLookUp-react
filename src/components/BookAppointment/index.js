import React from "react";
import Card from "react-bootstrap/Card";

const BookAppointment = () => {
  // console.log("Inside Book appoitment");
  return (
    <Card>
      <Card.Body>
        <h2>Booking Confirmed</h2>

        <div>
          <p>Visit Scheduled on: 21/03/2024, 3:30 p.m</p>
          <p>Job Type: Plumber</p>
          <p>Reach out to the technician on: +91 0345765274</p>
          <p>Technician Charge: Rs.500 (Pay on visit)</p>
        </div>
        <div>
          <h4>Thanks For Booking</h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookAppointment;
