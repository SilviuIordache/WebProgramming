"use strict";

let userNameInput = " ";
let passwordInput = null;

alert('Begin');
userNameInput = prompt("Who's there?: ")

//Check if the username is valid, not an empty string
if (userNameInput != "")
{
    if (userNameInput == "Admin")
    {
        passwordInput = prompt("Password?: ")
        if (passwordInput != "")
        {
            if (passwordInput == "TheMaster")
                alert("Welcome")
            else
                alert("Wrong Password");
        }     
    }
    else
        alert("I don't know you");
}
else
    alert("Cancelled");
    



