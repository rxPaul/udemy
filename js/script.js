const numberOfFilms = +prompt('Скільки фільмів ти глянув?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Whay&', ''),
      b = prompt('WHo?', ''),
      c = prompt('Whay&', ''),
      d = prompt('WHo?', '');
    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);