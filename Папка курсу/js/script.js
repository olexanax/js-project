"use strict";

let numberOfFilms = +prompt("Скільки фільмів ти вже подивився","");
let personalMovieDV = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    geners:[],
    private: false
};
let a = prompt("Один з останніх фільмів:","");
let b = +prompt("Яку оцінку дасиш йому?","");
let c = prompt("Один з останніх фільмів:","");
let d = +prompt("Яку оцінку дасиш йому?","");

personalMovieDV.movies[a] = b;
personalMovieDV.movies[c] = d;

console.log(personalMovieDV);