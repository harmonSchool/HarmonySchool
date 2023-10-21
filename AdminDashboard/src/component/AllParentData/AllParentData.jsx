import React from 'react'
import './AllParentData.css'
function AllParentData() {
  return (
   <div className="ParentContainer">
    <p>All Parent Data</p>
    <input type="text" placeholder='Search By name'/>
    <button>Search</button>
    <table className='first'>
        <thead>
            <tr>
                <th>h</th>
                <th>g</th>
                <th>l</th>
                <th>k</th>
                <th>p</th>
                <th>n</th>
                <th>j</th>
            </tr>
        </thead>
<hr />
<tr>
    <td>1</td>
    <td>h</td>
    <td>f</td>
    <td>5</td>
    <td>9</td>
    <td>10</td>

</tr>
    </table>

   </div>
  )
}

export default AllParentData