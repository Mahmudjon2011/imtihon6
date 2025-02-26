const movieForm = document.querySelector("#form");
const movieInput = document.querySelector("#input");
const movieSelect = document.querySelector("#select");
const movieOta = document.querySelector("#moviesWrapper");

function renderMovies(kino){
    movieOta.innerHTML = "";
    kino.slice(0,40).forEach(objectlar => {
      const newItem = document.createElement("li");
      newItem.className = "w-[400px] bg-[#fff] rounded flex flex-col p-[20px] items-center gap-[20px]"
      newItem.innerHTML = 
      `
  
     <h2>${objectlar.Title}</h2>
    <div>
    <img src="./spiderman.jpg">
     <span>${objectlar.imdb_rating}</span> ||
       <span>${objectlar.movie_year}</span> ||
         <span>${objectlar.runtime}</span> 
    </div>
    <p>${objectlar.Categories}</p>

        <button class="bg-[#ff0000] text-[#fff] rounded px-[20px] py-[20px]"> Add to watchlist</button>
      `
        movieOta.appendChild(newItem);
    });
}
renderMovies(movies);


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputQiymati = movieInput.value.toLowerCase();

    const filteredMovies = movies.filter(movie =>
        movie.Title && typeof movie.Title === "string" && movie.Title.toLowerCase().includes()
    );
    renderMovies(filteredMovies);
})

console.log(movies.Title);


