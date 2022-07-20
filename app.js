function changes(details) {
    Cookies.set(`selection`, `red`);

}

let one = document.getElementById(`redButton`);
one.addEventListener(`click`, changes,);


function changes2(details) {
    Cookies.set(`selection`, `blue`);

}

let two = document.getElementById(`blueButton`);
two.addEventListener(`click`, changes2,);



function changes3(details) {
    Cookies.set(`selection`, `purple`);

}

let three = document.getElementById(`purpleButton`);
three.addEventListener(`click`, changes3,);

// I have made functions set the cookies `selection` value to whatever button is pushed. I have also added an event listener for when the button is clicked to run the function.




