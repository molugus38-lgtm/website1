document.addEventListener("DOMContentLoaded", function() {

document.querySelectorAll(".wishlist-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("active");
    });
});

document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    document.querySelectorAll(".movie-card").forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(filter) ? "block" : "none";
    });
});

document.querySelectorAll(".genre-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".genre-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        let genre = this.dataset.genre;
        document.querySelectorAll(".movie-card").forEach(card => {
            card.style.display =
            (genre === "all" || card.dataset.genre === genre)
            ? "block" : "none";
        });
    });
});

document.querySelectorAll(".rating").forEach(rating => {
    let value = rating.dataset.rating;
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= value ? "⭐" : "☆";
    }
    rating.innerHTML = stars;
});

});
function filterMovies(genre) {
  const movies = document.querySelectorAll('.movie-card');

  movies.forEach(movie => {
    if (genre === 'all' || movie.dataset.genre === genre) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}