import React from "react";
import { useEffect, useState } from 'react';
import Downheader from "./Downheader";
import './Oak.css';

export default function Oak(){

    const [useDataAll, setDataAll] = useState([]);
    
    useEffect(() => {
        async function dataFecth(){
            const data = await(await fetch("/api/all")).json();
            setDataAll(data);
        }
        dataFecth();
    }, [])

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
            <p className="textoOak">{data}</p>
            <div className="imagenesPokemon">
                {useDataAll.map(data =>{
                    return(
                        <>
                            <img src={data.imagen} alt="" />
                        </>
                    )
                })}
            </div>
            <Downheader/>
        </div>
        <div className="newDiv">
            <Downheader/> 
        </div> 

        </>
    )
}