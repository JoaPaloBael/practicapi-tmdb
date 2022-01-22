const apiKey = `d40c788ef15cf4d31a2f1fd05282a8da`;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

console.log(url);

/*Peliculas Populares*/

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.results;
        console.log(info);
        let listaPeliculasPopulares = document.querySelector('.listaPeliculasPopulares');

        for (i = 0; i < 4; i++) {
            listaPeliculasPopulares.innerHTML +=
            `<article>
                <a href="./secciones/detalle-pelicula.html">
                    <img src="https://cuevana3.io/wp-content/uploads/2021/05/la-maldicion-de-lake-manor-43447-poster-200x300.jpg"
                        alt="">
                    <h3>${info[i].title}</h3>
                    <p>Estreno: <span>${info[i].release_date}</span></p>
                </a>
            </article>`


        }
    })
    .catch(function (error) {
        console.log(error);
    })