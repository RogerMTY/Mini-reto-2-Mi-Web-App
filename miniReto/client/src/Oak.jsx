import React from "react";
import "./Oak.css"
import Footer from "./Footer";
export default function Oak(){

    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/message")
        .then((res) => res.json())
        .then((data) => setData(data.message))
    }, []);

    const [data2, setData2] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/message2")
        .then((res) => res.json())
        .then((data2) => setData2(data2.message))
    }, []);

    const [data3, setData3] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/message3")
        .then((res) => res.json())
        .then((data3) => setData3(data3.message))
    }, []);

    const [data4, setData4] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/message4")
        .then((res) => res.json())
        .then((data4) => setData4(data4.message))
    }, []);
    

    return(
        <>
        <div className="home">
            <img src={require('./images/Profesor_Oak.png')} alt=""/>
            <div>
                <h1>Profesor Oak dice: </h1>
                <p>{data}</p>
                <p>{data2}</p>
                <p>{data3}</p>
                <p>{data4}</p>
            </div>
                <img src={require('./images/logo.png')} alt="" style={{ width: 500, height: 200, padding: 50}} />
        </div>
        <div className="pokemons">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" className="first"/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png" alt="" className="first"/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png" alt=""/>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png" alt=""/>
        </div>
        <div className="newDiv">
            <Footer/> 
        </div> 
        </>
    )
}