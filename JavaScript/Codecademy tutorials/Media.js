class Media {
  constructor(title){
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  
  get title(){
    return this._title;
  }
  
  get ratings(){
    return this._ratings;
  }
  
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    
    return ratingsSum/this._ratings.length;
  }
  
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
      this._ratings.push(newRating);
    } else {
      console.log('The rating must be a value between 1 and 5');
    }
  }
  
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author(){
    return this._author;
  }
  
  get pages(){
    return this._pages;
  }
  
  showInfo() {
    console.log(`${this.title} is a book written by author, ${this.author}. It has ${this.pages} pages. \n`);
  }
  
}

class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
    this._runTime = runTime;
    this._director = director;
  }
  
  get runTime (){
    return this._runTime;
  }
  
  get director(){
    return this._director;
  }
  
  showInfo() {
    console.log(`${this.title} is a movie directed by director, ${this.director}. It has a run time of ${this.runTime} minutes. \n`);
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  
  get artist(){
    return this._artist;
  }
  
  get songs(){
    return this._songs;
  }
  
  set songs(newSongsArray){
    this._songs = newSongsArray;
  }
  showInfo() {
    console.log(`${this.title} is a CD album by artist, ${this.artist}. The CD contains ${this.songs.length} songs: \n ${this.songs.join(' \n ')}`);
  }
  
  shuffle() {
    let shuffledSongs = [];
    let shuffleTestPass = false;
    
    while(shuffledSongs.length < this.songs.length){
      while (shuffleTestPass === false) {
        let randomSongIndex = Math.floor(Math.random() * this.songs.length);
        if (!shuffledSongs.includes(this.songs[randomSongIndex])) {
          shuffleTestPass = true;
          shuffledSongs.push(this.songs[randomSongIndex]);
       	}
      }
      shuffleTestPass = false;
    }
    this.songs = shuffledSongs;
    //return shuffledSongs;
  }

}

class Catalog {
  constructor(){
     this._Media = [];
  }
  
	addMedia(mediaItem) {
    if (mediaItem instanceof Media){
        this._Media.push(mediaItem);
    } else {
      console.log('Cannot insert non-Media object to the Media Catalog');
    }
  }
  
  get Media(){
    return this._Media;
  }
}

const harryPotter = new Book('Harry Potter', 'J.K.Rowling', 300);
/*
console.log(harryPotter.isCheckedOut)
harryPotter.toggleCheckOutStatus();
console.log(harryPotter.isCheckedOut)
harryPotter.toggleCheckOutStatus();
console.log(harryPotter.isCheckedOut)
harryPotter.showInfo();
harryPotter.addRating(3.8);
harryPotter.addRating(1.5);
harryPotter.addRating(9.1);
harryPotter.addRating(2.3);
harryPotter.addRating(4.9);
//console.log(harryPotter.ratings);
console.log(`This book has an average rating of ${harryPotter.getAverageRating()} \n`);
*/

const ingloriousBastards = new Movie('Inglorious Bastards', 'Tarantino',  135);
/*
ingloriousBastards.showInfo();
ingloriousBastards.addRating(2.3);
ingloriousBastards.addRating(5.7);
ingloriousBastards.addRating(6.7);
ingloriousBastards.addRating(7.6);
console.log(`This movie has an average rating of ${ingloriousBastards.getAverageRating()} \n`);
ingloriousBastards.addRating(6.7);
ingloriousBastards.addRating(8.9);
ingloriousBastards.addRating(9.3);
console.log(`This book has an average rating of ${ingloriousBastards.getAverageRating()} \n`);
*/

const darkSideOfTheMoon = new CD('Dark Side of the Moon', 'Pink Floyd', ['Speak to Me', 'On the Run', 'Time','The Great Gig in the Sky','Us and Them'])

const dog = {
  name: "doge",
  age: 14
}
const Catalog1 = new Catalog();
Catalog1.addMedia(darkSideOfTheMoon);
Catalog1.addMedia(harryPotter);
Catalog1.addMedia(ingloriousBastards);
Catalog1.addMedia(dog);
console.log(Catalog1.Media);


darkSideOfTheMoon.showInfo();
darkSideOfTheMoon.shuffle();
darkSideOfTheMoon.showInfo();

console.log(typeof ingloriousBastards);



