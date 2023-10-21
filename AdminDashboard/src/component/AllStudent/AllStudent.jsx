import React, { useState } from 'react';
import './AllStudent.css';

function AllStudent() {
  const [count,SetCount] = useState(0)
  const MyData = {
    id: 1 ,
    Name :"khouloud", 
    Gender : "female",
    classe : 1,
    
  }
  return (
    <div className="StudentContainer">
      <h3>Student</h3>
      <div className="StudentCard">
        <div className="StudentTable">
          <table className='first'>
            <thead>
              <tr className='table-header'>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Class</th>
                <th scope="col">Parent</th>
                <th scope="col">Address</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <hr />
            <tbody>
              <tr className='table-data'>
                <td>1</td>
                <td>oubaid</td>
                <td>male</td>
                <td>2</td>
                <td>wess</td>
                <td>Ariana</td>
                <td>05/1/2000</td>
                <td>+21695786222</td>  
              </tr>
              {/* Add more rows here if needed */}
            </tbody>
          </table>
         <i>Next</i>
        </div>
      </div>
    </div>
  );
}

export default AllStudent;
