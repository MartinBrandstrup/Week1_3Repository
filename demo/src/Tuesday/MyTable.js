import React from 'react';

const My_Table = (props) => {
    const names =
        [{ 'fname': 'Anders', 'lname': 'Henriksen' }
            , { 'fname': 'Britta', 'lname': 'Albertsen' }
            , { 'fname': 'Kalle', 'lname': 'Fredborg' }]
    return (
        <div>
            <table><thead><tr><th>Firstname</th><th>LastName</th></tr></thead>
                {names.map(p => <tr><td> {p.fname} </td> <td> {p.lname} </td></tr>)}
            </table>
            <br/>
            {props.name} {props.age}
        </div>
    );
  }

export default My_Table;

