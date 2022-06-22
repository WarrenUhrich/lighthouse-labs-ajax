const AJAX_URL = 'https://ghibliapi.herokuapp.com/films/';

fetch(AJAX_URL)
    .then((response) => {return response.json();})
    .then((data) => {
        console.log(data); // Array of films.
        
        let outputHTML = '<ul>';

        data.forEach((film) => {
            outputHTML += '<li>';
            outputHTML += `<h2>${film.title} / ${film.original_title} (${film.release_date})</h2>`;
            outputHTML += `<p>${film.description}</p>`;
            outputHTML += '</li>';
        });

        outputHTML += '</ul>';

        document.body.innerHTML += outputHTML;
    })
    .catch((error) => {console.error(error);});
