import React from "react"
import Axios from "axios";
class DataFetcher extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        Axios.get("http://localhost:5000/api/players")
        .then(res => {
            console.log(res)
        })
    }

    render(){
        return (
            <>Hellolol</>
        )
    }
}

export default DataFetcher;