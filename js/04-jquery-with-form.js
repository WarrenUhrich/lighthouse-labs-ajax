const $searchForm = $('form');
const $searchField = $('#cdn-search-field');
const $searchResults = $('#search-results');

$searchForm.submit((event) => {
    event.preventDefault(); // Prevent vanilla form submission.
    // Without prevent default the page reloads in an attempt to submit form data to the server.

    const searchTerm = $searchField.val();

    $.ajax({
        url: `https://api.cdnjs.com/libraries?search=${searchTerm}`,
        success: (response) => {
            const cdns = response.results;

            let outputHTML = '';

            for(const cdn of cdns) {
                outputHTML += `
                    <li>
                        <a href="${cdn.latest}" target="_blank">
                            ${cdn.name}
                        </a>
                    </li>
                `;
            }

            // Replace existing HTML with the new stuff.
            $searchResults.html(outputHTML);
        },
        error: (error) => {console.error(error);}
    });
});
