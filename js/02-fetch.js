const button = document.querySelector('#load-films');
const ul = document.querySelector('#list-of-films');

// console.log(button); // We found it!

button.addEventListener('click', function(event) {
    fetch('https://ghibliapi.herokuapp.com/films/')
        .then((response) => {
            return response.json(); // Convert to JS object / array.
        })
        .then((films) => {
            console.log(films);

            if (films) {
                // ul.innerHTML = '<li>Test</li>';
                for(const film of films) {
                    // Append to the UL HTML.
                    ul.innerHTML += `
                        <li class="film">
                            <h3>${film.title} (${film.original_title})</h3>
                            <img width="200" src="${film.movie_banner}">
                            <p>${film.description}</p>
                        </li>
                    `;
                }
            }
        })
        .catch((error) => {
            console.error(error);
        });
});
