import React, { useEffect, useState } from 'react';

function AdList() {

    const [ads, setAds] = useState([
       // { title: 'Just a test Ad'},
       // { title: 'Just a second test Ad'},
    ]);

    useEffect(
        () => {
            console.log("Loading the ads...");
            const url = 'https://awacademy-classifieds.herokuapp.com/ad?filter=%7B%0A%20%20%22limit%22%3A%2020%0A%0A%0A%7D';
            
            const loadPromise = fetch(url, { method: 'GET'})
            
            const jsonPromise = loadPromise.then(response => response.json());

            jsonPromise.then(newListOfAds => {
                setAds(newListOfAds);
            })

        },[]
    );

        function something(arg) {

            if (arg.length > 100) {
           return "..."
            } else {
                return null
            }
        }
    

    return (
        <div>
            <h1 className="mb-6">Placeholder</h1>

        <ul>
            { ads.map(
                ad => <li className="mb-5">{ad.title}<br/>{ad.description.substring(0,100)}{something(ad.description)}</li>
                        
            )}
        </ul>
        </div>

    );
}

export default AdList;
