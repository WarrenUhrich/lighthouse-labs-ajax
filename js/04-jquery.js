const $form = $('#search-form');
const $searchField = $('#search-term-field');
const $librariesList = $('#libraries-list');

$form.on('submit', (event) => {
    event.preventDefault(); // Stop form from submitting / loading the action location!

    // Get current search term.
    const searchTerm = $searchField.val();

    $.ajax({
        url: `https://api.cdnjs.com/libraries?search=${searchTerm}`,
        success: (response) => {
            const results = response.results;
            let outputHTML = '';

            for (const library of results) {
                outputHTML += `
                    <li>
                        <a href="${library.latest}" target="_blank">
                            ${library.name}
                        </a>
                    </li>
                `;
            }

            $librariesList.html(outputHTML);
        },
        error: (error) => {
            console.error(error);
        }
    });
});
