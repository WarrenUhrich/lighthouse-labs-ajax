const AJAX_URL = 'https://api.cdnjs.com/libraries?limit=10&search=';

// Make sure page / DOM is ready to go!
$(document).ready(() => {

    // Important elements.
    const $form = $('#js-library-api-form');
    const $searchField = $('#js-library-search-field');
    const $errorDialogue = $('#error-dialogue');
    const $libraryList = $('#library-list');

    $form.on('submit', (event) => {
        event.preventDefault();
        console.log('Form submitted!');
        
        // Get value of form field.
        const searchTerm = $searchField.val();
        console.log('Search Term:', searchTerm);

        // Run AJAX!
        $.ajax({
            url: `${AJAX_URL}${searchTerm}`,
            success: (response) => {
                console.log(response);
                $errorDialogue.text(''); // Empty error (in case there were previous errors.)
                $libraryList.html(''); // Empty the list (in case there were previous searches.)

                const results = response.results;

                let outputHTML = '';
    
                results.forEach((library) => {
                    outputHTML += '<li>';
                    outputHTML += `<a href="${library.latest}" target="_blank">${library.name}</a>`;
                    outputHTML += '</li>';
                });
    
                $libraryList.append(outputHTML);
            },
            error: (error) => {
                console.error(error);

                $errorDialogue.text('Error encountered!');
            }
        });
    });

});
