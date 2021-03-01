let moviesContainer = document.getElementById("moviesContainer")
let detailsContainer = document.getElementById("detailsContainer")
let searchURL = "http://www.omdbapi.com/?s=captain+america&apikey=fad9ffe5"

let searchRequest = new XMLHttpRequest()
searchRequest.addEventListener('load', function() {
    let result = JSON.parse(this.responseText)
    console.log(result)
    resultArray = result.Search
    let movieItems = resultArray.map((movie) => {
        return `
                <div class="movies">
                <img src="${movie.Poster}" /><br>
                <button class="detailBtn" onclick ="movieDetails('${movie.imdbID}')">${movie.Title}</button><br><br>
                </div>
                `
    })
    moviesContainer.innerHTML = movieItems.join("")

})

searchRequest.open('GET', searchURL)
searchRequest.send()

function movieDetails(imdbID) {
    let detailsRequest = new XMLHttpRequest()
    let detailsURL = `http://omdbapi.com/?i=${imdbID}&apikey=fad9ffe5`
    detailsRequest.addEventListener('load', function() {
        let result = JSON.parse(this.responseText)
        console.log(result)
        let detailItems = `<div class = "details">
                          <img src="${result.Poster}" /><br>
                          <strong>${result.Title}</strong><br>
                          Released on: ${result.Released}<br>
                          Rated: ${result.Rated}<br>
                          Directed by: ${result.Director}<br>
                          Description: ${result.Plot}<br><br>
                           </div>
                           `
        detailsContainer.innerHTML = detailItems
    })
    


    detailsRequest.open('GET', detailsURL)
    detailsRequest.send()
}
