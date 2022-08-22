//1 Write the code to access element which is having id as "text"
console.log(document.getElementById("text"));

//2 Write the code to access element which is having tag as "h1"
console.log(document.getElementsByName("h1"));

//3 Write the code to access element which is having class as "box"
console.log(document.getElementsByClassName("box")[0]);

//4  "<h1>Hello </h1>

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions" 


let element1 = document.getElementsByClassName('change')[0];
element1.innerText = "Hello World";

//5  Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function changeDirection() {
    const element1 = document.getElementsByClassName("flex_container");

    element1[0].style.flexFlow = "column wrap";
}





//7"<h1>Hello </h1>

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let newElement = document.getElementsByClassName("heading1");

newElement[0].style.color = "red";
newElement[0].setAttribute("id", "heading");
console.log(newElement[0]);




//9 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function clock1() {
    let currTime = new Date();
    let hrs = ("0" + currTime.getHours()).slice(-2);
    let mins = ("0" + currTime.getMinutes()).slice(-2);
    let secs = ("0" + currTime.getSeconds()).slice(-2);
    document.getElementById("clock").innerText = hrs + " : " + mins + " : " + secs;

    let x = setInterval(clock1, 500);    
}

//10 Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function func1() {
    let d  = document.getElementById("year1");
    let dtext = d.options[d.selectedIndex].text;
    document.getElementById("print").innerText = dtext;
}

const input = document.getElementById('email');
const defaultEmail = '@prepbytes.com';
input.value = defaultEmail;

