let numberOfFilm ;



function start (){
    numberOfFilm = +prompt('How match films did you see?', '');
    while(numberOfFilm == null || numberOfFilm =='' || isNaN(numberOfFilm)){
        numberOfFilm = +prompt('How match films did you see?', ''); 
    }
}
 start();

 let personalMuvieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    ganres: [],
    private: false,
};

 function rememberMyFilm(){
    if (personalMuvieDB.count <= 10 && personalMuvieDB.count > 0) {
        alert('Not match');
    } else if (personalMuvieDB.count > 10 && personalMuvieDB.count <= 30) {
        alert('Normal');
    } else if (personalMuvieDB.count > 30) {
        alert('You are cinoman');
    } else {
        alert('ERROR');
    }
 }
rememberMyFilm();


function detectPersonalLevel(){
    for (let i = 0; i < 2; i++) {
        let a = prompt('what last film did you see?', 'Film'),
            b = +prompt('how match did you like it', '1-10');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMuvieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
    
}

detectPersonalLevel();

function showMyDB(){
    if(personalMuvieDB.private==false){
        console.log(personalMuvieDB);
    }
}
showMyDB();


function riteYourGenres(){
    for(let i=1;i<=3;i++){
     const ganre=prompt(`what ganre do you like ${i}`);
     personalMuvieDB.ganres[i-1]=ganre;
    }
}
riteYourGenres();







