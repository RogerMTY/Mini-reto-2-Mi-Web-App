import React from "react";
import "./App.css";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Oak from "./pages/Oak.jsx";
import Johto from "./pages/Johto";
import Hoenn from "./pages/Hoenn";
import Kanto from "./pages/Kanto";
import CreatePKMN from "./pages/CreatePKMN";
import { Route, Routes } from "react-router-dom"


function App(){
    return(
        <>
        <Navbar />
        <div className="component">
            <Routes>
                <Route path="/CreatePKMN" element={<CreatePKMN/>}/>
                <Route path="/" element={<Oak/>}/>
                <Route path="/Kanto" element={<Kanto/>}/>
                <Route path="/Johto" element={<Johto/>}/>
                <Route path="/Hoenn" element={<Hoenn/>}/>
            </Routes>
        </div>
        <Footer/>
        </>
    )
}
export default App;
