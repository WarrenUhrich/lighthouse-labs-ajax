const AJAX_URL = 'https://api.cdnjs.com/libraries/';

$(document).ready(() => {
    const $form = $('form');
    $form.on('submit', (event) => {
        // Prevent form submitting / new pageload.
        event.preventDefault();

        // Retreiving the search field and value.
        const $searchInput = $('#js-library-name');
        const searchValue = $searchInput.val();

        // Submit our search!
        $.ajax(`${AJAX_URL}${searchValue}`/*, {contentType: 'application/json'}*/)
            .done((response) => {
                console.log(response);

                // Grabbing our output element.
                $jsLibraryInfo = $('#js-library-info');

                // Populating our output element.
                $jsLibraryInfo.html(`
                    <h2>${response.name}</h2>
                    <p>${response.description}</p>
                    <p>
                        <a href="${response.homepage}">
                            Click here
                        </a>
                        to visit the official
                        ${response.name}
                        website!
                    </p>
                `);
            });
    });
});
