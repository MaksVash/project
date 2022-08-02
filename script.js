let numberOfFilm=+prompt('How match films did you see?','');

if(numberOfFilm<=10 && numberOfFilm>0) {
    alert('Not match');
}else if(numberOfFilm>10 && numberOfFilm<=30){
alert('Normal')
}else if(numberOfFilm>30){
    alert('You are cinoman');
}else{
    alert('ERROR')
}

let personalMuvieDB={
    count:numberOfFilm,
    movies:{},
    actors:{},
    ganres:[],
    private:false,
};





for (let i=0;i<2;i++){
    let a=prompt('what last film did you see?','Film'),
    b=+prompt('how match did you like it','1-10');
    if(a !=null && b !=null && a !='' &&  b !='' && a.length<50  ){
    personalMuvieDB.movies[a]=b;
console.log('done');
}else{
    console.log('error');
    i--;
}
}


{}




console.log(personalMuvieDB); 


 
