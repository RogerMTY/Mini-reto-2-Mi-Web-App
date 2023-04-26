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
            <img src=""/>
            <h1> Pokemon </h1>
            <p>{data}</p>
        </div>
    )
}

export default Home;
