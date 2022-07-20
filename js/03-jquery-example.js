const catFactsButton = $('#load-cat-facts');

catFactsButton.click((event) => {
    console.log('Button clicked!');

    $.ajax({
        url: 'https://cat-fact.herokuapp.com/facts',
        success: (facts) => {
            let outputHTML = '<ul>';

            facts.forEach((fact) => {
                outputHTML += `<li>${fact.text}</li>`;
            });

            outputHTML += '</ul>';

            $('body').append(outputHTML);
        },
        error: (error) => {
            console.error(error);
        }
    });
});
