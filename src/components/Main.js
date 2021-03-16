import React, {useState, useEffect} from "react";
import axios from "axios";
import Info from "./Info";

export default function Main() {
    const [isLoading, setisLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const config = axios.create({
            headers: {'Access-Control-Allow-Origin': '*'},
        })
        axios.get("https://p3z0km5und.execute-api.us-east-1.amazonaws.com/Prod/getCustomerDetail", config)
            .then((response) => {
                setData(response.data.message)
                console.log("response.data.message")
                console.log(response.data.message)
            })
            .catch(function (error){
                console.log(error)
            })
            .then(setisLoading(false))
    }, [])    //https://p3z0km5und.execute-api.us-east-1.amazonaws.com/Prod/getCustomerDetail

    return (
        <div style={{padding: 20}}>
            {isLoading ? (<div>{'Loading...'}</div>) : (<Info data={data}/>)}
        </div>
    );

}