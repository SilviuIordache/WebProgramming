let arg = 0;
alert(typeof(arg));

arg = prompt("Enter a value?");
alert(typeof(arg));
switch (arg) {
  case '0':
  case '1':
    alert( typeof(arg));
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' )
}