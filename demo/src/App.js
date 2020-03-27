import React, { useState } from 'react';
import './App.css';
import My_Table from './Tuesday/MyTable.js'
import SetCurrentTime from './Wednesday/SetCurrentTime'
import FuncCompUseState from './Wednesday/FuncCompUseState'
import LiftingStateParent from './Thursday/LiftingStateParent'

function App() {
  return (
    <div className="App">
      <h2>Thursday</h2>
      <LiftingStateParent />
    </div>
  );
}



/*
Onsdagsdemo

function App() {
  return (
    <div className="App">
      <h2>Wednesday</h2>
      <SetCurrentTime />
      <FuncCompUseState />
    </div>
  );
}
*/

/*
Tirsdagsdemo

let cars =
  [{ 'model': 'Audi', 'year': '2000' }
    , { 'model': 'Opel', 'year': '2007' }
    , { 'model': 'BMW', 'year': '2012' }]

function App() {
  return (
    <div className="App">
      <h2>Tuesday</h2>
      <My_Table name="Flemming" age="12" />
      <h2>Class</h2>
      <CarComp cars={cars} />
      <h2>Function</h2>
      <CarCompFunc cars={cars} />
    </div>
  );
}

class CarComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cars = this.props.cars;
    return (
      <div>
        <table><thead><tr>
          <th>Model</th>
          <th>Year</th>
        </tr></thead><tbody>
            {cars.map(c => <tr>
              <td> {c.model} </td>
              <td> {c.year} </td>
            </tr>)}
          </tbody></table>
      </div>
    );
  }
}

const CarCompFunc = (props) => {
  let cars = props.cars;
  return (
    <div>
      <table><thead><tr>
          <th>Model</th>
          <th>Year</th>
        </tr></thead><tbody>
            {cars.map(c => <tr>
              <td> {c.model} </td>
              <td> {c.year} </td>
            </tr>)}
          </tbody></table>
    </div>
  );
}

const My_Comp = () => {
  return (
    <div>Hello from My Component</div>
  );
}
*/
export default App;
