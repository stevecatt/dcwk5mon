
let movieThumbNails= document.getElementById("movieThumbNails")
let movieButton = document.getElementById("movieButton")
let movieLinks = document.getElementsByClassName("movieLinks")
let MainMoviePage = document.getElementById("MainMoviePage")




let movieUrl = "http://www.omdbapi.com/?s=batman&apikey=18c34cea"
let request = new XMLHttpRequest()
request.open ("GET", movieUrl)
request.send()
request.onload = function(){
    //console.log(request.responseText)
    let movieResponse = JSON.parse(request.responseText).Search
    //console.log(movieResponse)

    let movies = movieResponse.map(function(movie){
        //let movieLinkID = (movie.imdbID)
        
            

        return `
        
        <a onclick = "displayMovieDetails('${movie.imdbID}')" class= "movieLinks" href = "#" <li><h3>${movie.Title}</h3><img src =${movie.Poster}></li></a>`



        })
        
   
   movieThumbNails.innerHTML=movies.join(" ")

   
}


function displayMovieDetails(imbd){

    let mainMovieLinkURL = "http://www.omdbapi.com/?i=" + imbd + "&apikey=18c34cea"
            let mainMovieRequest = new XMLHttpRequest()
            mainMovieRequest.open("GET", mainMovieLinkURL)
            mainMovieRequest.send()
            mainMovieRequest.onload = function(){
            let mainMovieResponse= JSON.parse(mainMovieRequest.responseText)


            console.log(mainMovieResponse)
            let Mmovie = `
            <h1>Title: ${mainMovieResponse.Title} </h1>
            <h2>Year:  ${mainMovieResponse.Year} </h2>
            <h2>Rated: ${mainMovieResponse.Rated}</h2>
            `

            MainMoviePage.innerHTML=Mmovie
          
            



       }
    
   
    


}
