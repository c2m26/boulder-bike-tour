import React from 'react'

function Picture(props) {

    const farmId = props.farm
    const serverId = props.server
    const id = props.id
    const secret = props.secret


    return (
        <img className= "card" src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_n.jpg`}/>
    )
    
}

export default Picture
