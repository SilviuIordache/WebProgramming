let login = prompt("id: ");
let message = (login == 'Employee') ?  'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :'';

alert(message);