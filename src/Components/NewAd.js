async function createNewAd() {
    const response = await fetch('https://awacademy-classifieds.herokuapp.com/ad', {
      method: 'POST',
      body: JSON.stringify({
        "title": "String",
        "description": "Maximum of 80 characters",
        "name": "String",
        "location": "String",
        "price": Number,
        "priceNegotiable": Boolean,
        "email": "String"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

export default createNewAd;