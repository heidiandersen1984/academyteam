import React, { useEffect, useState } from 'react';

function CreateAd() {


    function submit(e) {
        e.preventDefault();
        console.log("Let's go and save that new ad!!!!");
        console.log(e);
        console.log(e.target);
        console.log(e.target.elements.titleId.value);

        let titleIdVar = e.target.elements.titleId.value
        let descriptionIdVar = e.target.elements.descriptionId.value
        let nameIdVar = e.target.elements.nameId.value
        let locationIdVar = e.target.elements.locationId.value
        let numberIdVar = e.target.elements.numberId.valueAsNumber
        let booleanIdVar = e.target.elements.booleanId.checked
        let emailIdVar = e.target.elements.emailId.value
        let phoneIdVar = e.target.elements.phoneId.value

        /*
                let inputArray = [
                    titleId,
                    descriptionId,
                    nameId,
                    locationId,
                    numberId,
                    booleanId,
                    emailId
                ];
        */
        const url = 'https://awacademy-classifieds.herokuapp.com/ad';
        const data = {
            title: titleIdVar,
            description: descriptionIdVar,
            name: nameIdVar,
            location: locationIdVar,
            price: numberIdVar,
            priceNegotiable: booleanIdVar,
            email: emailIdVar,
            phone: phoneIdVar,
        };


        if (e.target.elements.phoneId.value || e.target.elements.phoneId.value) {

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

        } else {
            alert("Atleast one email or phone number is required");
        }
    }

    return <div>
        <h1>Create Ad</h1>
        <form onSubmit={submit}>
            <label>
                Title: <input type="text" id="titleId" required />
            </label>
            <br></br>
            <label>
                Description: <input type="text" id="descriptionId" required />
            </label>
            <br></br>
            <label>
                Name: <input type="text" id="nameId" required />
            </label>
            <br></br>
            <label>
                Location: <input type="text" id="locationId" required />
            </label>
            <br></br>
            <label>
                Price: <input type="number" id="numberId" required />
            </label>
            <br></br>
            <label>
                Negotiable: <input type="checkbox" id="booleanId" />
            </label>
            <br></br>
            <label>
                E-mail: <input type="text" id="emailId" />
            </label>
            <br></br>
            <label>
                Phone: <input type="text" id="phoneId" />
            </label>
            <br></br>
            <label>
            Phone: <input type="number" id="phoneId" />
            </label>
            <button type="submit">Let's go already!!!</button>
        </form>
    </div>
}

export default CreateAd