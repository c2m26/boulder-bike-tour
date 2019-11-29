import React from 'react'

function Picture(props) {

    const farmId = props.farm
    const serverId = props.server
    const id = props.id
    const secret = props.secret
    const size = 'z'


    return (
        <img className= "card" src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_${size}.jpg`}/>
    )
    
}

export default Picture
