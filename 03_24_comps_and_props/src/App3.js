import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { names } from './file2';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

function WelcomePerson(props) {
  console.log(props);
  return (
    <div>
      <p>First Name: {props.person.firstName}</p>
      <p>Last Name: {props.person.lastName}</p>
      <p>Email: {props.person.email}</p>
      <br/>
    </div>
  );
}

WelcomePerson.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
}

// const { person1, person2, person3 } = names;

const theseShouldWork = [
  { firstName: "Kurt", lastName: "Wonnegut", email: "k@wonnegut.dk" },
  { firstName: "Kurt", lastName: "Wonnegut", email: "k@wonnegut.dk", friends: ["Kim", "Janne"] }
]

const theseShouldNotWork = [
  {firstName:"Jane",email:"j@wonnegut.dk", phone: "12345"},
  {firstName:"Jane"}
]

function App3() {
  console.log("names: " + names);
  return (
    <div className="App3">
      <h1>Ex3</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      {/* De næste to giver fejl i consol'en som de bør, men printer stadig... */}
      <Welcome />
      <Welcome name={45} />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
      {/* <WelcomePerson person={person1} />
      <WelcomePerson person={person2} />
      <WelcomePerson person={person3} /> 
      For some reason my destructuring isn't working here...*/}
      <WelcomePerson person={theseShouldWork[0]} />
      <WelcomePerson person={theseShouldWork[1]} />
      <WelcomePerson person={theseShouldNotWork[0]} />
      <WelcomePerson person={theseShouldNotWork[1]} />
      {/* And yet it seems that the line above does not cast any errors despite 
      only having a firstName...*/}
    </div>
  );
}

export default App3;