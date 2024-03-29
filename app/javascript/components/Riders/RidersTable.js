import React from 'react'
import RidersData from '../Data/RidersData.js'
import RidersList from '../Riders/RidersList'

function RidersTable() {

    const RiderRows = RidersData.map(rider => {
                        return(
                            <RidersList key={rider.firstName + rider.lastName} {...rider} />
                        )
                    })

    return (
        <div>
           <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="Col">First name</th>
                    <th scope="Col">Last name</th>
                    <th scope="Col">City of origin</th>
                    <th scope="Col">State of origin</th>
                    </tr>
                </thead>
                <tbody>
                    {RiderRows}
                </tbody>
           </table>
       </div>
    )

}

export default RidersTable