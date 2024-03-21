import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BookAppointment = () => {
  // console.log("Inside Book appoitment");
  return (
    <Card>
      <Card.Body>
        <div>This is some text within a card body.</div>
        <div>This is some text within a card body.</div>
        <div>This is some text within a card body.</div>
        <div>
          <input type="date" />
          <input type="time" />
          <input type="textbox" placeholder="address" />
        </div>
        <div>
          <Button
            variant="primary"
            type="submit"
            className="mb-3 d-flex justify-content-center"
            style={{
              backgroundImage: "linear-gradient(to right, #4be1ec, #cb5eee)",
            }}
          >
            Submit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookAppointment;
