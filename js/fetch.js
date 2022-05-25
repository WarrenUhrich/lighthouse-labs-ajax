const AJAX_URL = 'https://ghibliapi.herokuapp.com/films/';

fetch(AJAX_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        let outputString = '';

        outputString += `<ul>`;
        data.forEach((movie) => {
            outputString += `<li>`;
            outputString += `${movie.title} (${movie.original_title})`;
            outputString += `</li>`;
        });
        outputString += `</ul>`;

        document.body.innerHTML += outputString;
    })
    .catch((error) => {
        console.error(error);
    });
