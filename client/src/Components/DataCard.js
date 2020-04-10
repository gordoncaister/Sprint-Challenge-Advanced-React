import React from "react";


export const DataCard = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.data.name}</h2>
            <h3>{props.data.country}</h3>
        </div>
        
    )
}