const AJAX_URL = 'https://ghibliapi.herokuapp.com/films/';

// Wait for the page to load so we have access to its elements / DOM.
$(document).ready(() => {

    const $loadFilmButton = $('#load-film-button');

    $loadFilmButton.on('click', () => {

        $.ajax({
            url: AJAX_URL,
            success: (response) => {
                console.log(response);
    
                let outputHTML = '<ul>';
    
                response.forEach((film) => {
                    outputHTML += '<li>';
                    outputHTML += `<h2>${film.title} / ${film.original_title} (${film.release_date})</h2>`;
                    outputHTML += `<p>${film.description}</p>`;
                    outputHTML += '</li>';
                });
    
                outputHTML += '</ul>';
    
                $('body').append(outputHTML);

                $loadFilmButton.remove();
            },
            error: (error) => {
                console.error(error);
            }
        });

    });

});
