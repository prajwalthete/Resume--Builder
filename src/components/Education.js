import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Education = ({ data, handleChange, handleAdd, handleRemove }) => {
  return (
    <div className="mb-4">
      <h4>Education</h4>
      {data.education.map((edu, index) => (
        <div key={index}>
          <Form.Group controlId={`education${index}`}>
            <Form.Label>Institute</Form.Label>
            <Form.Control
              type="text"
              name="institute"
              value={edu.institute}
              onChange={(e) => handleChange(e, index, "education")}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId={`degree${index}`}>
                <Form.Label>Degree</Form.Label>
                <Form.Control
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(e, index, "education")}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`year${index}`}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={edu.year}
                  onChange={(e) => handleChange(e, index, "education")}
                />
              </Form.Group>
            </Col>
          </Row>
          {index > 0 && (
            <Button
              variant="danger"
              onClick={() => handleRemove(index, "education")}
            >
              Remove
            </Button>
          )}
          <hr />
        </div>
      ))}
      <Button variant="success" onClick={() => handleAdd("education")}>
        Add More
      </Button>
    </div>
  );
};

export default Education;
