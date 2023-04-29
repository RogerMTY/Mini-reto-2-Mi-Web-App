import React from "react";
import Downheader from "./Downheader";
export default function Oak(){

    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/home")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return(
        <>
        <div className="home">
            <img src={require('./images/Profesor_Oak.png')} alt=""/>
            <p>{data}</p>
            <h1>Pokemon</h1>
            <h1>Pokemon</h1>
            <h1>Pokemon</h1>
            <h1>Pokemon</h1>
            <h1>Pokemon</h1>
            <Downheader/>
        </div>
        <div className="newDiv">
            <Downheader/> 
        </div> 

        </>
    )
}