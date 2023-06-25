import React from "react";
import { Form, Button } from "react-bootstrap";
import TagInput from "react-tag-input";
import { FaPlus } from "react-icons/fa";

const Skills = ({ data, handleSkillsChange }) => {
  return (
    <div className="mb-4">
      <h4>Skills</h4>
      <Form.Group controlId="formSkills">
        <Form.Label>Add Skills</Form.Label>
        <TagInput
          tags={data.skills}
          onChange={handleSkillsChange}
          placeholder="Add skills"
          removeOnBackspace={true}
          inputFieldPosition="bottom"
          maxLength={20}
        />
        <Button
          variant="outline-primary"
          className="mt-2"
          onClick={() =>
            handleSkillsChange({ id: data.skills.length, text: "" }, true)
          }
        >
          <FaPlus /> Add Skill
        </Button>
      </Form.Group>
    </div>
  );
};

export default Skills;
