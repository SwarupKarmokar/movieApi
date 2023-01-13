const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const getMovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data)
    showMovies(data.results)
}

const movieContainer = document.querySelector('.movie-container');

const showMovies = (data) => {
    movieContainer.innerHTML = "";

    data.forEach((element) => {
        const div = document.createElement('div');
        div.classList.add('movie-card')
        div.innerHTML = `
            <a href="detailsPage.html">
                <img src="${IMGPATH + element.poster_path}" alt="" id="mainImg">
            </a>
            <div class="movie-desc">
                <h2>${element.original_title}</h2>
                <div class="rating flex">
                    <h3>⭐${element.vote_average}</h3>
                    <h3>❤</h3>
                </div>
                <p>${element.overview}</p>
            </div>
        `;


        movieContainer.appendChild(div)
    })


}

const search = document.querySelector('#search')

search.addEventListener('keyup',(e)=>{
    if (e.target.value !== "") {
        getMovies(SEARCHAPI + e.target.value)
    }

    else {
        getMovies(APIURL)
    }
})


const movieDetails = document.querySelector('.movie-details-card');

// // get_movie_by_id(33300)
// async function get_movie_by_id(id) {
//     const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key-${APIURL}`);
//     const respData = await resp.json();
//     console.log(respData)
//     return respData.results
// }




getMovies(APIURL)