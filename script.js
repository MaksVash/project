let numberOfFilm=prompt('How match films did you see?','');
console.log(numberOfFilm);

let personalMuvieDB={
    count:numberOfFilm,
    movies:{},
    actors:{},
    ganres:[],
    private:false,
};

let lastFilm=prompt('what last film did you see?','');
let reiting=prompt('how match did you like it','');

let movies ={lastFilm:reiting};
