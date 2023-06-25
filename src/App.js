import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    education: [{ institute: "", degree: "", year: "" }],
    experience: [{ company: "", designation: "", year: "" }],
    skills: [],
  });

  const handleChange = (e, index, section) => {
    const { name, value } = e.target;
    const newData = { ...data };
    newData[section][index][name] = value;
    setData(newData);
  };

  const handleAdd = (section) => {
    const newData = { ...data };
    newData[section].push({ institute: "", degree: "", year: "" });
    setData(newData);
  };

  const handleRemove = (index, section) => {
    const newData = { ...data };
    newData[section].splice(index, 1);
    setData(newData);
  };

  const handleSkillsChange = (tags, isAdd) => {
    const newData = { ...data };
    if (isAdd) {
      newData.skills.push(tags);
    } else {
      newData.skills = newData.skills.filter((tag) => tag.id !== tags.id);
    }
    setData(newData);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={8}>
            <PersonalInfo data={data} handleChange={handleChange} />
            <Education
              data={data}
              handleChange={handleChange}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
            <Experience
              data={data}
              handleChange={handleChange}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
            <Skills data={data} handleSkillsChange={handleSkillsChange} />
            <Button variant="primary" size="lg">
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
