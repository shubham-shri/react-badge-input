import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    const updatedTags = [...new Set([...tags, value.trim()])];
    setTags([...updatedTags]);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 8 && value === "") {
      setTags((prevTags) => prevTags.slice(0, prevTags.length - 1));
    }
  };
  const handleTagDelete = (idx) => {
    const updatedTags = [
      ...tags.slice(0, idx),
      ...tags.slice(idx + 1, tags.length),
    ];
    setTags(updatedTags);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="tags-container">
          {tags.map((tag, idx) => (
            <div key={idx} className="tag">
              {tag}
              <button
                className="tag-button"
                type="button"
                onClick={() => handleTagDelete(idx)}
              >
                <span className="material-symbols-outlined">
                  do_not_disturb_on
                </span>
              </button>
            </div>
          ))}
        </div>
        <input
          className="form-input"
          placeholder="Add skill"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
};

export default Input;
