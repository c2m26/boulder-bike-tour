import React from 'react'

function RidersList(props) {
    
   return (
     
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.city}</td>
            <td>{props.state}</td>
        </tr>

   )
}

export default RidersList