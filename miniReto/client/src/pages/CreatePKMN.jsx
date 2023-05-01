import React, { useState } from 'react';
import "./CreatePKMN.css"

export default function CreatePokemon() {


  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [pokedexnumber, setNumber] = useState('');
  const [type, setType] = useState('');
  const [weakness, setWeakness] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [newname, setnewName] = useState('');
  const [newregion, setnewRegion] = useState('');
  const [newpokedexnumber, setnewNumber] = useState('');
  const [newtype, setnewType] = useState('');
  const [newweakness, setnewWeakness] = useState('');
  const [newimageUrl, setnewImageUrl] = useState('');
  const [createdPokemon, setCreatedPokemon] = useState(null);
  const [ setnewCreatedPokemon] = useState(null);

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

  const handleDelete = async(event) => {
    event.preventDefault();
    const response = await fetch('/api/deletepokemon',{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, region, pokedexnumber, type, weakness, imageUrl})
    });
    const deletereq = await response.json();
    setCreatedPokemon(deletereq);
    setName('');
    setRegion('');
    setNumber('');
    setType('');
    setWeakness('');
    setImageUrl('');
  }

  const handleUpdate = async(event) => {
    event.preventDefault();
    const response = await fetch('/api/updatepokemon',{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newname, newregion, newpokedexnumber, newtype, newweakness, newimageUrl})
    });
    const updatereq = await response.json();
    setnewCreatedPokemon(updatereq);
    setnewName('');
    setnewRegion('');
    setnewNumber('');
    setnewType('');
    setnewWeakness('');
    setnewImageUrl('');
  }



  return (
    <>
      <div className='form'>
        <form onSubmit={handleSubmit}>
            <label style={{paddingRight: 45}}>Name:</label> 
            <input type="text" value={name} onChange={event => setName(event.target.value)} /><br/>

            <label style={{paddingRight:40}}>Region:</label> 
            <input type="text" value={region} onChange={event => setRegion(event.target.value)}/><br/>

            <label style={{paddingRight:30}}>Number:</label> 
            <input type="text" value={pokedexnumber} onChange={event => setNumber(event.target.value)} /><br/>

            <label style={{paddingRight:60}}>Type:</label> 
            <input type="text" value={type} onChange={event => setType(event.target.value)} /><br />

            <label style={{paddingRight:10}}>Weakness's:</label> 
            <input type="text" value={weakness} onChange={event => setWeakness(event.target.value)} /><br />

            <label style={{paddingRight:30}}>Imageurl:</label> 
            <input type="text" value={imageUrl} onChange={event => setImageUrl(event.target.value)} /><br />

            <button type="submit">Create Pokemon</button>
        </form>
      </div>
      {createdPokemon &&(
        <div className='newpokemon'>
          Name: {createdPokemon.name}<br />
          Region: {createdPokemon.region}<br />
          PokedexNumber: {createdPokemon.pokedexnumber}<br />
          Type: {createdPokemon.type}<br />
          Weakness's: {createdPokemon.weakness}<br />
          ImgURL: <img src={createdPokemon.imageUrl} alt={createdPokemon.name} /><br/>
          <button onClick={handleDelete}>Delete Pokemon</button>
        </div>
      )}
      <div className='updateform'>
        <h1>Update in database</h1>
        <p>You will be updating by Pokedex number</p>
        <form onSubmit={handleUpdate}>
            <label style={{paddingRight:10}}>PokedexNumber:</label> 
            <input type="text" value={newpokedexnumber} onChange={event => setnewNumber(event.target.value)} /><br/>

            <label style={{paddingRight:86}}>Name:</label> 
            <input type="text" value={newname} onChange={event => setnewName(event.target.value)}/><br/>

            <label style={{paddingRight:78}}>Region:</label> 
            <input type="text" value={newregion} onChange={event => setnewRegion(event.target.value)} /><br/>

            <label style={{paddingRight:93}}>Type:</label> 
            <input type="text" value={newtype} onChange={event => setnewType(event.target.value)} /><br />

            <label style={{paddingRight:45}}>Weakness's:</label> 
            <input type="text" value={newweakness} onChange={event => setnewWeakness(event.target.value)} /><br />

            <label style={{paddingRight:60}}>Imageurl:</label> 
            <input type="text" value={newimageUrl} onChange={event => setnewImageUrl(event.target.value)} /><br />

            <button type="submit">Update Pokemon in DB</button>
        </form>
      </div>
    </>
  );
}

