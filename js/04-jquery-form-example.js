const $searchForm = $('#search-form');
const $searchField = $('#search-field');
const $searchResults = $('#search-results');

$searchForm.submit((event) => {
    event.preventDefault(); // Don't submit the form the old fashioned way.
    // We want to prevent the usual form submission... and submit an Ajax request instead.

    const searchTerm = $searchField.val();

    $.ajax({
        url: `https://api.cdnjs.com/libraries?search=${searchTerm}`,
        success: (response) => {
            const languages = response.results;

            let outputHTML = '';

            for(const language of languages) {
                outputHTML += `
                    <li>
                        <a href="${language.latest}">
                            ${language.name}
                        </a>
                    </li>
                `;
            }

            $searchResults.html(outputHTML);
        },
        error: (error) => {
            console.error(error);
        }
    });
});
