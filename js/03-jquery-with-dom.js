const $button = $('button'); // var $ = jquery;

// $button.on('click', () => {});
$button.click(() => {
    console.log('Button clicked!');

    // Prevent multiple clicks / requests.
    $button.attr('disabled', true);

    $.ajax({
        url: 'https://cat-fact.herokuapp.com/facts',
        success: (catFacts) => {
            let outputHTML = '<ul>';

            for(const catFact of catFacts) {
                outputHTML += `<li>${catFact.text}</li>`;
            }

            outputHTML += '</ul>';

            $('body').append(outputHTML);
        },
        error: (error) => {console.error(error);}
    });
});
