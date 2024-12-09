import React, { useState } from "react";
import "./MockInterviewForm.css"; // Import the CSS

function MockInterviewForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    difficulty: "Beginner",
    mode: "Timed Interview",
    interviewType: "Technical Coding",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container">
      <h2 className="header">Book Slot</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <fieldset className="fieldset">
          <legend>Difficulty Level:</legend>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Beginner"
              checked={formData.difficulty === "Beginner"}
              onChange={handleChange}
            />
            Beginner
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Intermediate"
              checked={formData.difficulty === "Intermediate"}
              onChange={handleChange}
            />
            Intermediate
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Advanced"
              checked={formData.difficulty === "Advanced"}
              onChange={handleChange}
            />
            Advanced
          </label>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Practice Mode:</legend>
          <label>
            <input
              type="radio"
              name="mode"
              value="Timed Interview"
              checked={formData.mode === "Timed Interview"}
              onChange={handleChange}
            />
            Timed Interview (with a timer)
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="Relaxed Mode"
              checked={formData.mode === "Relaxed Mode"}
              onChange={handleChange}
            />
            Relaxed Mode (no timer)
          </label>
        </fieldset>
        <fieldset className="fieldset">
          <legend>Interview Type Selection:</legend>
          <label>
            <input
              type="radio"
              name="interviewType"
              value="Technical Coding"
              checked={formData.interviewType === "Technical Coding"}
              onChange={handleChange}
            />
            Technical Coding
          </label>
          <label>
            <input
              type="radio"
              name="interviewType"
              value="System Design"
              checked={formData.interviewType === "System Design"}
              onChange={handleChange}
            />
            System Design
          </label>
          <label>
            <input
              type="radio"
              name="interviewType"
              value="Behavioral"
              checked={formData.interviewType === "Behavioral"}
              onChange={handleChange}
            />
            Behavioral
          </label>
        </fieldset>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default MockInterviewForm;