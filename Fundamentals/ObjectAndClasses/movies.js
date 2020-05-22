function solve(input) {
  let movies = [];

  input.forEach((line) => {
    let tokens = line.split(" ");

    if (line.includes("addMovie")) {
      let movieName = tokens.slice(1).join(" ");

      movies.push({ name: movieName });
    } else if (line.includes("directedBy")) {
      let index = tokens.indexOf("directedBy");

      let movieName = tokens.slice(0, index).join(" ");

      let movieDirector = tokens.slice(index + 1).join(" ");

      let movie = movies.find((m) => m.name === movieName);

      if (movie) {
        movie.director = movieDirector;
      }
    } else if (line.includes("onDate")) {
      let index = tokens.indexOf("onDate");

      let movieName = tokens.slice(0, index).join(" ");

      let movieDate = tokens.slice(index + 1).join(" ");

      let movie = movies.find((m) => m.name === movieName);

      if (movie) {
        movie.date = movieDate;
      }
    }
  });

  for (let m of movies) {
    let keys = Object.keys(m);

    if (keys.length === 3) {
      console.log(JSON.stringify(m));
    }
  }
}
