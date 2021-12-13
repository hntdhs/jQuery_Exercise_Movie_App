let moviesArr = [];

$(function() {
    let movieNum = 1;

    $("#form").on("submit", function(evt) {
        evt.preventDefault();
        let movieName = $("#movie-name").val();
        let movieRating = $("#movie-rating").val();

        let movieData = { movieName, movieRating, movieNum };
        const HTMLtoAppend = createMovieDataHTML(movieData);
        moviesArr.push(movieData);
        movieNum++;

        $("#movie-table-body").append(HTMLtoAppend);
        $("#form").trigger("reset");
    })    
})

function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.movieName}</td>
        <td>${data.movieRating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.movieNum}>
            Delete
          </button>
        </td>
      <tr>
    `;
}

$("tbody").on("click", ".btn.btn-danger", function(evt) {
    // find the index where this movie is
    let indexToRemoveAt = moviesArr.findIndex(movie => movie.movieNum === +$(evt.target).data("deleteId"))
    
    // remove it from the array of movies
    moviesArr.splice(indexToRemoveAt, 1)

    // remove it from the DOM
    $(evt.target)
      .closest("tr")
      .remove();
    
  });