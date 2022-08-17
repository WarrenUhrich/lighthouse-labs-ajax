const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('Clicked!');

    // Prevent multiple clicks / requests.
    button.setAttribute('disabled', true);

    fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => {
            return response.json(); // Convert JSON response binary / string into live JS array / object.
        })
        .then((data) => {
            console.log(data);

            // let outputHTML = '<ul>';

            // for(const catFact of data) {
            //     outputHTML += `<li>${catFact.text}</li>`;
            // }

            // outputHTML += '</ul>';

            // document.body.innerHTML += outputHTML;

            const ul = document.createElement('ul');
            for(const catFact of data) {
                const textNode = document.createTextNode(catFact.text);
                const li = document.createElement('li');
                li.appendChild(textNode);
                ul.appendChild(li);
            }
            document.body.appendChild(ul);
        })
        .catch((error) => {
            console.error(error);
        });
});
