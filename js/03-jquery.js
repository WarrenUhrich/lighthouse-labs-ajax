const $button = $('#load-films');
const $ul = $('#list-of-films');

$button.click(function(event) {
    $.ajax({
        url: 'https://ghibliapi.herokuapp.com/films/',
        success: function (films) {
            console.log(films);

            for(const film of films) {
                $ul.append(`
                    <li class="film">
                        <h3>${film.title} (${film.original_title})</h3>
                        <img width="200" src="${film.movie_banner}">
                        <p>${film.description}</p>
                    </li>
                `);
            }
        },
        error: function (error) {
            console.error(error);
        }
    });
});
