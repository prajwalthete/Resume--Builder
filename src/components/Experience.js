import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Experience = ({ data, handleChange, handleAdd, handleRemove }) => {
  return (
    <div className="mb-4">
      <h4>Experience</h4>
      {data.experience.map((exp, index) => (
        <div key={index}>
          <Form.Group controlId={`company${index}`}>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => handleChange(e, index, "experience")}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId={`designation${index}`}>
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  value={exp.designation}
                  onChange={(e) => handleChange(e, index, "experience")}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`year${index}`}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={exp.year}
                  onChange={(e) => handleChange(e, index, "experience")}
                />
              </Form.Group>
            </Col>
          </Row>
          {index > 0 && (
            <Button
              variant="danger"
              onClick={() => handleRemove(index, "experience")}
            >
              Remove
            </Button>
          )}
          <hr />
        </div>
      ))}
      <Button variant="success" onClick={() => handleAdd("experience")}>
        Add More
      </Button>
    </div>
  );
};

export default Experience;
