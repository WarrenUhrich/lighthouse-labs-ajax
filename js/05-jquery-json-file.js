$.ajax({
    url: '/data/programming-languages.json',
    success: (pLangs) => {
        $('#programming-languages').html(pLangs.join(', '));
    },
    error: (error) => {console.error(error);}
});
