import React, { useState, useEffect } from 'react';
import "./CreatePKMN.css"

export default function CreatePKMN(){
    const [formData, setFormData] = useState(null);
    useEffect(() => {
        const formData = {
            name: 'whatever',
            email: 'johndoe@example.com',
            message: 'Hello from React!',
            type: 'Fire'
        };
        fetch('/api/kantoPkmn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => setFormData(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {formData ? (
                <div>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Message: {formData.message}</p>
                    <p>Fire: {formData.type}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}