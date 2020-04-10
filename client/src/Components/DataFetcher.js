import React from "react"
import Axios from "axios";
import {DataCard} from "./DataCard"

class DataFetcher extends React.Component{
    constructor(){
        super();
        this.state = {data: []}
    }
    componentDidMount(){
        Axios.get("http://localhost:5000/api/players")
        .then(res => {
            console.log(res)
            this.setState({data: res.data});
        })
    }

    render(){
        console.log("State: ", this.state)
        return (
            <div>
                {this.state.data.map(e =>(
                    
                    <DataCard data={e} />
                ))}
            </div>
            
            
        )
    }
}

export default DataFetcher;