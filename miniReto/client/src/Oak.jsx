import React from "react";
export default function Oak(){
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/home")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    return(
        <div className="home">
            <h1> Pokemon </h1>
            <img src={require('./images/Profesor_Oak.png')} alt=""/>
            <h1> Pokemon </h1>
            <p>{data}</p>
        </div>
    )
}