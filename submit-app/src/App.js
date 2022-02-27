import FormInput from "./Components/FormInput/FormInput";
import "./App.css";
import React, { useState, Fragment } from "react";
import PersonList from "./Components/PersonList/PersonList";

const App = () => {
  const [initialStateData, setinitialStateData] = useState([
    { username: "starboy", age: "21", id: "h1" },
    { username: "stargirl", age: "21", id: "h2" },
  ]);

  const addSubmitedForm = (enteredUsername, enteredAge) => {
    setinitialStateData((prevData) => {
      const updatedForm = [...prevData];
      updatedForm.unshift({
        username: enteredUsername,
        age: enteredAge,
        id: Math.random().toString(),
      });
      console.log(updatedForm);
      return updatedForm;
    });
  };

  const deletePersonHandler = (personId) => {
    setinitialStateData((prevData) => {
      const updatedForm = prevData.filter((person) => person.id !== personId);
      return updatedForm;
    });
  };

  let content = (
    <p
      style={{
        textAlign: "center",
        color: "white",
        fontWight: "bold",
        fontSize: "20px",
      }}
    >
      Nothing is Written! , Add New Person.{" "}
    </p>
  );

  if (initialStateData.length > 0) {
    content = (
      <PersonList
        items={initialStateData}
        onDelete={deletePersonHandler}
      ></PersonList>
    );
  }
  return (
    <Fragment>
      <div id="username-form">
        <FormInput onAdd={addSubmitedForm} />
      </div>
      <section id="person-label">{content}</section>
    </Fragment>
  );
};

export default App;
