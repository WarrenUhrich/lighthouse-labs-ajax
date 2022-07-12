fetch('https://ghibliapi.herokuapp.com/films/')
    .then((response) => {
        return response.json(); // Convert to JS object / array.
    })
    .then((films) => {
        console.log(films);
    })
    .catch((error) => {
        console.error(error);
    });
