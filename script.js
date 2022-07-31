let numberOfFilm=+prompt('How match films did you see?','');
;

let personalMuvieDB={
    count:numberOfFilm,
    movies:{},
    actors:{},
    ganres:[],
    private:false,
};




let a=prompt('what last film did you see?','Film'),
b=+prompt('how match did you like it','1-10'),
c=prompt('what last film did you see?','Film'),
d=+prompt('how match did you like it','1-10');

personalMuvieDB.movies[a]=b;
personalMuvieDB.movies[c]= d;



console.log(personalMuvieDB);