//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here

var myElement = document.getElementById("a-1");
var square = document.createElement("div");
square.classList.add("square");

myElement.appendChild(square);

square.addEventListener("click", () => {
  if (square.textContent === "X") {
    square.innerText = "O";
  } else {
    square.innerText = "X";
  }
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'

//resolve // QUESTION 2 here

const colors = ["red", "white", "black", "green", "orange", "purple"];
const removeItemButton = document.querySelector("button.removeItemButton");

const eel = document.querySelector("#a-2");

const ul = document.createElement("ul");
const $selectInput = document.createElement("select");
const $removeBtn = document.createElement("button");
$removeBtn.innerText = "Remove";

colors.forEach((color, i) => addColor(color));

$removeBtn.addEventListener("click", (e) => {
  const list = document.querySelectorAll("#a-2 ul li");
  const currentValue = $selectInput.value;
  if (list.length) {
    list.forEach((el, i) => {
      if (el.textContent === currentValue) {
        el.remove();
      }
    });
  }
});

colors.forEach((color, i) => {
  const $options = document.createElement("option");
  $options.setAttribute("value", color);
  $options.innerText = color;

  $selectInput.append($options);
});

eel.append($selectInput);
eel.append($removeBtn);
eel.append(ul);

function addColor(color) {
  const li = document.createElement("li");
  li.innerText = color;
  ul.append(li);
}

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

const calculate_sphere = () => {
  var volume;
  var area;
  var radius = document.getElementById("radius").value;
  radius = Math.abs(radius);
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById("volume").value = volume;
  area = 4 * Math.PI * Math.pow(radius, 2);
  area = area.toFixed(4);
  document.getElementById("area").value = area;

  return false;
};

window.onload = document.getElementById("MyForm").onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer.

//resolve // QUESTION 4 here
let button1 = document.createElement("button");
button1.innerHTML = "Hide question 1";
