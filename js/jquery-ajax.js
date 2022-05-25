const AJAX_URL = 'https://ghibliapi.herokuapp.com/films/';

$(document).ready(() => {
    $.ajax(AJAX_URL)
        .done((response) => {
            console.log(response);

            let moviesHTML = `<ul>`;
            response.forEach((movie) => {
                moviesHTML += `<li>
                    ${movie.title} (${movie.original_title})
                </li>`;
            });
            moviesHTML += `</ul>`;

            $('body').append(moviesHTML);
        })
        .fail((error) => {
            console.error(error);

            $('body').append(`<p>Error, no results found.</p>`);
        });
});
