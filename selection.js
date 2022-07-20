

function display(){
     Cookies.get(`selection`);

   

}
 console.log(Cookies.get(`selection`));

 let header = document.getElementById(`here`);
header[`style`][`backgroundColor`] = Cookies.get(`selection`);
if(Cookies.get(`selection`) == undefined) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1> PLEASE GO MAKE A SELECTION.</h1>`)
}

// Above I have told my function to get the value from cookies. my cokkie is called selection.
// I have then consol.logged it so I know it is working by printing the color of the button in the consol.
// I have then made a variable and told it to cahnge the background color to the value inside my cookie.
// Then I made an if statement that if the value equals undefined to prompt the user to go make a selection.