import React from "react";
import { data } from "./Data";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ListOfNames = () => {
  const [names, setNames] = useState(data);
  const removeItem = (id) => {
    let newItem = names.filter((person) => person.id !== id);
    setNames(newItem);
  };
  const handleClick = () => {
    setNames([]);
  };
  return (
    <React.Fragment>
      {names.map((person) => {
        const { id, name, job } = person;
        return (
          <div className="wrapper" key={id}>
            <h4 className="item">
              {name} - {job}
              <FaTimes className="delete" onClick={() => removeItem(id)} />
            </h4>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={handleClick}>
        Clear all
      </button>
    </React.Fragment>
  );
};

export default ListOfNames;
