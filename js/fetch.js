// alert('OUR SCRIPT IS LOADED!'); // See if our app is in-page!

fetch('https://ghibliapi.herokuapp.com/films/')
    .then((response) => {return response.json();})
    .then((data) => {console.log(data);})
    .catch((error) => {console.error(error);});
