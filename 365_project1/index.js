var movieTitle;
var currentGenre = "Genre";
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function showNoResultsText(totalcount) {
  if (totalcount == 0) {
    document.getElementById("no-results").style.display = "block";
    console.log("totalcount in showNoResultsText" + totalcount);
  } else {
    document.getElementById("no-results").style.display = "none";
  }
}

function updateResult() {
  var query = document
    .getElementsByClassName("search-query")[0]
    .value.trim()
    .toLowerCase();
  var counter = 0;

  if (currentGenre == "All" || currentGenre == "Genre") {
    movieTitle = document.getElementsByClassName("movie-title");
  }
  if (currentGenre == "Action") {
    movieTitle = document
      .getElementsByClassName("movies-action")[0]
      .getElementsByClassName("movie-title");
  }
  if (currentGenre == "Drama") {
    movieTitle = document
      .getElementsByClassName("movies-drama")[0]
      .getElementsByClassName("movie-title");
  }
  if (currentGenre == "Sci-Fi") {
    movieTitle = document
      .getElementsByClassName("movies-sci-fi")[0]
      .getElementsByClassName("movie-title");
  }

  for (var name = 0; name < movieTitle.length; name++) {
    var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();

    if (compareMovieTitles.indexOf(query) === -1) {
      movieTitle[name].closest("div.movies").style.display = "none";
    } else {
      movieTitle[name].closest("div.movies").style.display = "block";
      counter++;
    }
  }

  showNoResultsText(counter);
}

function myFunction() {
  document.getElementsByClassName("dropdown-content").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdownContent = document.getElementsByClassName("dropdown-content");
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
};

function getMedia(selectedGenre) {
  var countMovies = 0;
  var mediaCarouselMovies;
  currentGenre = selectedGenre;
  document.getElementById("genreChoice").innerHTML = selectedGenre;

  if (selectedGenre == "All") {
    document.getElementsByClassName("movies-action")[0].style.display = "block";
    document.getElementsByClassName("movies-drama")[0].style.display = "block";
    document.getElementsByClassName("movies-sci-fi")[0].style.display = "block";
    mediaCarouselMovies = document.getElementsByClassName("movies");
  }
  if (selectedGenre == "Action") {
    document.getElementsByClassName("movies-action")[0].style.display = "block";
    document.getElementsByClassName("movies-drama")[0].style.display = "none";
    document.getElementsByClassName("movies-sci-fi")[0].style.display = "none";
    mediaCarouselMovies = document
      .getElementsByClassName("movies-action")[0]
      .getElementsByClassName("movies");
  }
  if (selectedGenre == "Drama") {
    document.getElementsByClassName("movies-action")[0].style.display = "none";
    document.getElementsByClassName("movies-drama")[0].style.display = "block";
    document.getElementsByClassName("movies-sci-fi")[0].style.display = "none";
    mediaCarouselMovies = document
      .getElementsByClassName("movies-drama")[0]
      .getElementsByClassName("movies");
  }
  if (selectedGenre == "Sci-Fi") {
    document.getElementsByClassName("movies-action")[0].style.display = "none";
    document.getElementsByClassName("movies-drama")[0].style.display = "none";
    document.getElementsByClassName("movies-sci-fi")[0].style.display = "block";
    mediaCarouselMovies = document
      .getElementsByClassName("movies-sci-fi")[0]
      .getElementsByClassName("movies");
  }

  var mediaCarouselMoviesCount = mediaCarouselMovies.length;

  for (var count = 0; count < mediaCarouselMoviesCount; count++) {
    if (mediaCarouselMovies[count].style.display == "block") countMovies++;
  }
  console.log(countMovies);

  showNoResultsText(countMovies);
}
