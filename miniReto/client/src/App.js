import React from "react";
import "./App.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import Oak from "./Oak";
import Johto from "./pages/Johto";
import Hoenn from "./pages/Hoenn";
import Kanto from "./pages/Kanto";
import { Route, Routes } from "react-router-dom"


function App(){
    return(
        <>
        <Navbar />
        <div className="component">
            <Routes>
                <Route path="/" element={<Oak/>}/>
                <Route path="/Kanto" element={<Kanto/>}/>
                <Route path="/Johto" element={<Johto/>}/>
                <Route path="/Hoenn" element={<Hoenn/>}/>
            </Routes>
        </div>
        </>
    )
}
export default App;
