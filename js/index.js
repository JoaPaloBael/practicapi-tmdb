const apiKey = `d40c788ef15cf4d31a2f1fd05282a8da`;
const urlPelisPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en`;
const urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en`;

const urlPelisMejorValoradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en`;
const urlSeriesMejorValoradas = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en`;

const urlPelisProximas = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en`;
const urlUltimasSeries = `https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en`;

/*Peliculas Populares*/

fetch(urlPelisPopulares)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.results;
        console.log(info);
        let listaPeliculasPopulares = document.querySelector('.listaPeliculasPopulares');


        for (i = 0; i < 6; i++) {
            listaPeliculasPopulares.innerHTML +=
                `<article>
                <a href="./secciones/detalle-pelicula.html">
                    <img src="https://image.tmdb.org/t/p/original/${info[i].poster_path}"
                        alt="">
                    <h3>${info[i].title}</h3>
                    <p>Estreno: <span>${info[i].release_date.split('-').reverse().join('/')}</span></p>
                </a>
            </article>`


        }
    })
    .catch(function (error) {
        console.log(error);
    })

/*Series Populares*/
fetch(urlSeriesPopulares)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.results;
        console.log(info);

        let listaSeriesPopulares = document.querySelector('.listaSeriesPopulares');
        for (i = 0; i < 6; i++) {
            listaSeriesPopulares.innerHTML +=
                `<article>
                <a href="./secciones/detalle-serie.html">
                    <img src="https://image.tmdb.org/t/p/original/${info[i].poster_path}"
                        alt="">
                    <h3>${info[i].original_name}</h3>
                    <p>Estreno: <span>${info[i].first_air_date.split('-').reverse().join('/')}</span></p>
                </a>
            </article>`


        }
    })
    .catch(function (error) {
        console.log(error);
    })

/*Peliculas mejor valoradas*/
fetch (urlPelisMejorValoradas)
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        let info = data.results;
        console.log(info);
        let listaPelisMejorValoradas = document.querySelector('.listaPelisMejorValoradas');

        for (i = 0; i < 6; i++) {
            listaPelisMejorValoradas.innerHTML +=
                `<article>
                <a href="./secciones/detalle-serie.html">
                    <img src="https://image.tmdb.org/t/p/original/${info[i].poster_path}"
                        alt="">
                    <h3>${info[i].title}</h3>
                    <p>Valoración: <span>${info[i].vote_average}</span></p>
                </a>
            </article>`


        }

    })
    .catch(function(error){
        console.log(error);
    })

/*Series mejor valoradas*/
fetch (urlSeriesMejorValoradas)
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        let info = data.results;
        console.log(info);
        let listaSeriesMejorValoradas = document.querySelector('.listaSeriesMejorValoradas');

        for (i = 0; i < 6; i++) {
            listaSeriesMejorValoradas.innerHTML +=
                `<article>
                <a href="./secciones/detalle-serie.html">
                    <img src="https://image.tmdb.org/t/p/original/${info[i].poster_path}"
                        alt="">
                    <h3>${info[i].name}</h3>
                    <p>Valoración: <span>${info[i].vote_average}</span></p>
                </a>
            </article>`


        }

    })
    .catch(function(error){
        console.log(error);
    })
