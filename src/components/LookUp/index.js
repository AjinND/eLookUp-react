import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
  const [city, setCity] = useState('');
  const [job, setJob] = useState('');
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

  const submitSearch =() => {
    console.log(state,city, job)
  }

  return (
    <div className="container">
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <label style={{ color: "white" }}>Choose Your State</label>
          <Form.Select style={{ width: "14rem" }} onChange={handleStateChange}>
            <option key="defaul-value">Default select</option>
            {states.map((state, index) => (
              <option key={index}> {state}</option>
            ))}
          </Form.Select>
        </div>

        {districts && (
          <div className="d-flex align-items-center">
            <label style={{ color: "white" }}>Choose Your City</label>
            <Form.Select style={{ width: "14rem" }} onChange={handleCityChange}>
              <option>Default select</option>
              {districts.map((district, index) => (
                <option key={index}> {district}</option>
              ))}
            </Form.Select>
          </div>
        )}

        <div className="d-flex align-items-center">
          <label style={{ color: "white" }}>Choose Employement</label>
          <Form.Select style={{ width: "14rem" }} onChange={handleJobChange}>
            <option>Default select</option>
            {jobs.map((job, index) => (
                <option key={index}> {job}</option>
              ))}
          </Form.Select>
        </div>
      </div>
      <div className="d-flex justify-content-center">
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
    </div>
  );
};

export default LookUp;
