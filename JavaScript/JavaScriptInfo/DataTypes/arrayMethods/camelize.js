//Task 1 Translate border-left-width to borderLeftWidth

//My solution
function camelize(str){
    let strArray = str.split("-");
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] && i != 0) {
            strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
        }
        
    }
    str = strArray.join('');
    console.log(str);
}


//Web solution
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }


camelize("background-color")// == 'backgroundColor';
camelize("list-style-image")// == 'listStyleImage';
camelize("-webkit-transition")// == 'WebkitTransition';
