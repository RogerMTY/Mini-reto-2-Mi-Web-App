import React from "react";
import "./App.css";

function Home(){
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
            <p>{data}</p>
        </div>
    )
}

export default Home;
