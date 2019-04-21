//TASK 1
let user = {
    name: "John Smith",
    age: 35
};

let json = JSON.stringify(user);
//alert (json);
let parse = JSON.parse(json);
//alert(parse.name);


//TASK 2
let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return ( key != "" && value == meetup) ? undefined : value;
}));

/* result should be:
{
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
}
*/