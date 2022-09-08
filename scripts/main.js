import {
  getPaintColors,
  getInteriors,
  getTechnology,
  getWheels,
} from "./database.js";

//get each of these things, and then create a function that handles the HTML for each section, and then have a funtion that displays all the html for the form.

const displayForm = () => {
  let htmlSection = `
  <h1>Cars 'R Us</h1>

    <div class = "selections paint">
        <h2>Paint Colors</h2
        Paint Colors
    </div>
    <div class = "selections interiors">
        <h2>Interiors</h2
        Interiors
    </div>
    <div class = "selections technology">
        <h2>Technology</h2
        Technology
    </div>
    <div class = "selections wheels">
        <h2>Wheels</h2
        Wheels
    </div>
    <div class = "submit-btn">
    <button id="submitBtn">Create Custom Order</button>
    </div>
    <div class = "orders">
        <h2>Custom Orders</h2
        Custom Orders
    </div>
`;
  document.getElementById("builderApp").innerHTML = htmlSection;
};
displayForm();
