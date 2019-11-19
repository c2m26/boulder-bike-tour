import React from 'react'

function RidersList(props) {
    
   return (
     
        <tr>
            <td>{props.entry.firstName}</td>
            <td>{props.entry.lastName}</td>
            <td>{props.entry.city}</td>
            <td>{props.entry.state}</td>
        </tr>

   )
}

export default RidersList