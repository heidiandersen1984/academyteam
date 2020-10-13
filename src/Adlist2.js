import React, { useEffect, useState } from 'react';

function AdList() {

    const [ads, setAds] = useState([
        { title: 'Just a test Ad'},
        { title: 'Just a second test Ad'},
    ]);

    useEffect(
        () => {
            console.log("Loading the ads...");
            const url = 'https://awacademy-classifieds.herokuapp.com/ad';
            
            const loadPromise = fetch(url, { method: 'GET'})
            
            const jsonPromise = loadPromise.then(response => response.json());

            jsonPromise.then(newListOfAds => {
                setAds(newListOfAds);
            })

        },[]
    );


    return (
        <div>
            <h1>Ads</h1>
        <ul>
            { ads.map(
                ad => <li>{ad.title}</li>
            )}
        </ul>
        </div>

    );
}

export default AdList;
