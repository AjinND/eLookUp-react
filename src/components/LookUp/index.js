import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";

const states = [
  "Maharastra",
  "Kerala",
  "Karnataka",
  "Jammu",
  "Kashmir",
  "Tamil Nadu",
  "Goa",
];

const jobs = ["Plumber", "Electrician", "Cleaner"];

const cities = {
  Maharastra: ["asdca", "nagpur", "pune"],
  Kerala: ["ashaa", "thrissur", "kochi"],
  Karnataka: ["adfcuye", "bengalore", "mysore"],
  Goa: ["abc", "def", "ghi"],
};

const LookUp = () => {
  const [state, setState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const [res, setRes] = useState([]);
  const [toggles, setToggles] = useState();

  const handleStateChange = ({ target }) => {
    setState(target.value);
  };

  const handleCityChange = ({ target }) => {
    setCity(target.value);
  };

  const handleJobChange = ({ target }) => {
    setJob(target.value);
  };

  useEffect(() => {
    // console.log(cities[state]);
    setDistricts(cities[state]);
  }, [state]);

  const submitSearch = () => {
    console.log(state, city, job);
    setRes([
      {
        imageUri: "test/url",
        description: "descriptoin",
      },
      {
        imageUri: "test/url",
        description: "descriptoin",
      },
      {
        imageUri: "test/url",
        description: "descriptoin",
      },
    ]);
    setToggles(Array(res.length).fill(false));
  };

  return (
    <div className="container custom-style">
      <div className="d-flex" style={{ padding: '1rem' }}>
        <div className="d-flex align-items-center"  style={{paddingInline: '1rem'}}>
          <label style={{paddingInline: '1rem'}}>State</label>
          <Form.Select style={{ width: "14rem" }} onChange={handleStateChange}>
            <option key="defaul-value">Default select</option>
            {states.map((state, index) => (
              <option key={index}> {state}</option>
            ))}
          </Form.Select>
        </div>

        {districts && (
          <div className="d-flex align-items-center"  style={{paddingInline: '1rem'}}>
            <label style={{paddingInline: '1rem'}}>City</label>
            <Form.Select style={{ width: "14rem" }} onChange={handleCityChange}>
              <option>Default select</option>
              {districts.map((district, index) => (
                <option key={index}> {district}</option>
              ))}
            </Form.Select>
          </div>
        )}

        <div className="d-flex align-items-center"  style={{paddingInline: '1rem'}}>
          <label style={{paddingInline: '1rem'}}>Employement</label>
          <Form.Select style={{ width: "14rem" }} onChange={handleJobChange}>
            <option>Default select</option>
            {jobs.map((job, index) => (
              <option key={index}> {job}</option>
            ))}
          </Form.Select>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{marginTop: '2rem', marginBottom: '2rem'}}>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "15%",
            backgroundImage: "linear-gradient(to right, #4be1ec, #cb5eee)",
          }}
          onClick={submitSearch}
        >
          Search
        </Button>
      </div>
      {res.length > 0 &&
        res.map((result, index) => (
          <div key={index} style={{paddingBottom: '2rem'}}>
            <Card>
              <Card.Body className="d-flex justify-content-between">
                <div className="d-flex">
                  <div>
                    <img 
                      src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
                      alt="userLogo"
                      className="image"
                    />
                  </div>
                  <div className="content">{result.description}</div>
                </div>

                <div className="book">
                  <button
                    className="btn btn-link"
                    onClick={(event) => {
                      event.preventDefault();
                      const newToggles = [...toggles]; // Create a copy of the toggles array
                      newToggles[index] = !toggles[index]; // Toggle the state for the clicked card
                      setToggles(newToggles);
                    }}
                  >
                    Book
                  </button>
                </div>
              </Card.Body>
              <div>
                {toggles[index] && (
                  <>
                    <div>This is some text within a card body.</div>
                    <div>
                      <input type="date" />
                      <input type="time" />
                      <input type="textbox" placeholder="address" />
                    </div>
                    <div>
                      <Button
                        variant="primary"
                        // type="submit"
                        href="search/confirm-booking"
                        className="mb-3 d-flex justify-content-center"
                        style={{
                          width: "fit-content",
                          backgroundImage:
                            "linear-gradient(to right, #4be1ec, #cb5eee)",
                        }}
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </div>
        ))}
      <Outlet />
    </div>
  );
};

export default LookUp;
