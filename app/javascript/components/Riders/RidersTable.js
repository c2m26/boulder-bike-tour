import React from 'react'
import RidersData from '../Data/RidersData.js'
import RidersList from '../Riders/RidersList'

function RidersTable() {

    const RiderRows = RidersData.map(rider => {
                        return(
                            <RidersList firstName={RidersData.firstName} lastName={RidersData.lastName} city={RidersData.city} state={RidersData.state} />
                        )
                    })

    return (
        <div>
           <table className="table table-striped">
               <thead>
                   <th scope="Col">First name</th>
                   <th scope="Col">Last name</th>
                   <th scope="Col">City of origin</th>
                   <th scope="Col">State of origin</th>
               </thead>
               <tbody>
                    {RiderRows}
               </tbody>
               
           </table>
       </div>
    )

}

export default RidersTable