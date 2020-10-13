import React, { useEffect, useState } from 'react';

function CreateAd() {


    function submit(e) {
        e.preventDefault();
        console.log("Let's go and save that new ad!!!!");

        let inputArray = [
            titleId,
            descriptionId,
            nameId,
            locationId,
            numberId,
            booleanId,
            emailId,

            
        ]

        const url = 'https://awacademy-classifieds.herokuapp.com/ad';
        const data = {
            title: 'Hello World',
            description: 'Foo bar baz',
            name: 'Philip',
            location: 'At home',
            email: 'spam@nowhere.example',
        };
            
        const loadPromise = fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        
        const jsonPromise = loadPromise.then(response => response.json());

        jsonPromise.then(responseBody => {
            console.log("Response when creating ad:", responseBody)
        })
    }

    return <div>
        <h1>Create Ad</h1>
        <form onSubmit={submit}>
            <label>
                Title: <input type="text" id={titleId} />
            </label>
            <br></br>
            <label>
            Description: <input type="text" id={descriptionId} />
            </label> 
            <br></br>
            <label>
            Name: <input type="text" id={nameId}/>
            </label>
            <br></br>
            <label>
            Location: <input type="text" id={loacationId} />
            </label>
            <br></br>
            <label>
            Price: <input type={Number} id={numberId} />
            </label>
            <br></br>
            <label>
            Negotiable: <input type={Boolean} id={booleanId} />
            </label>
            <br></br>
            <label>
            E-mail: <input type="text" id={emailId} />
            </label>
            <br></br>
            <button type="submit">Let's go already!!!</button>
        </form>
    </div>
}

export default CreateAd