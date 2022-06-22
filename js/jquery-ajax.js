const AJAX_URL = 'https://ghibliapi.herokuapp.com/films/';

// Wait for the page to load so we have access to its elements / DOM.
$(document).ready(() => {

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
        },
        error: (error) => {
            console.error(error);
        }
    });

    // $.ajax(AJAX_URL)
    //     .done((response) => {
    //         let outputHTML = '<ul>';

    //         response.forEach((film) => {
    //             outputHTML += '<li>';
    //             outputHTML += `<h2>${film.title} / ${film.original_title} (${film.release_date})</h2>`;
    //             outputHTML += `<p>${film.description}</p>`;
    //             outputHTML += '</li>';
    //         });

    //         outputHTML += '</ul>';

    //         document.body.innerHTML += outputHTML;
    //     })
    //     .fail((error) => {
    //         console.error(error);
    //     });

});
