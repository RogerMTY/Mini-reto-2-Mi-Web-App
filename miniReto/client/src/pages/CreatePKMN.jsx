import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import "./CreatePKMN.css"

export default function CreatePokemon() {


  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [pokedexnumber, setNumber] = useState('');
  const [type, setType] = useState('');
  const [weakness, setWeakness] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [createdPokemon, setCreatedPokemon] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, region, pokedexnumber, type, weakness, imageUrl })
    });
    const newPokemon = await response.json();
    setCreatedPokemon(newPokemon);
    setName('');
    setRegion('');
    setNumber('');
    setType('');
    setWeakness('');
    setImageUrl('');
  }



  return (
    <>
      <div className='center'>
        <form onSubmit={handleSubmit}>
            <label style={{paddingRight:10}}>Name:</label> 
            <input type="text" value={name} onChange={event => setName(event.target.value)} /><br/>

            <label style={{paddingRight:20}}>Region:</label> 
            <input type="text" value={region} onChange={event => setRegion(event.target.value)}/><br/>

            <label style={{paddingRight:15}}>PokedexNumber:</label> 
            <input type="text" value={pokedexnumber} onChange={event => setNumber(event.target.value)} /><br/>

            <label style={{paddingRight:10}}>Type:</label> 
            <input type="text" value={type} onChange={event => setType(event.target.value)} /><br />

            <label style={{paddingRight:10}}>Weakness's:</label> 
            <input type="text" value={weakness} onChange={event => setWeakness(event.target.value)} /><br />

            <label style={{paddingRight:10}}>Imageurl:</label> 
            <input type="text" value={imageUrl} onChange={event => setImageUrl(event.target.value)} /><br />

            <button type="submit">Create Pokemon</button>
        </form>
      </div>
      {createdPokemon &&(
        <div className='center2'>
          Name: {createdPokemon.name}<br />
          Region: {createdPokemon.region}<br />
          PokedexNumber: {createdPokemon.pokedexnumber}<br />
          Type: {createdPokemon.type}<br />
          Weakness's: {createdPokemon.weakness}<br />
          <img src={createdPokemon.imageUrl} alt={createdPokemon.name} />
        </div>
      )}

      <div className='datadiv'>
        <Footer/>
      </div>
    </>
  );
}

