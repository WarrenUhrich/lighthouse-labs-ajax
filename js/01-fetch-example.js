fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((facts) => {
        console.log(facts);

        let outputHTML = '<ul>';
        for(const fact of facts) {
            outputHTML += `<li>${fact.text}</li>`;
        }
        outputHTML += '</ul>';

        document.body.innerHTML += outputHTML;
    })
    .catch((error) => {
        console.error(error);
    });
