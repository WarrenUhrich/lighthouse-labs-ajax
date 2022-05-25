const AJAX_URL = 'https://ghibliapi.herokuapp.com/films/';

fetch(AJAX_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
