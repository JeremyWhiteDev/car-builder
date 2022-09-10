import {
  getPaintColors,
  getInteriors,
  getTechnology,
  getWheels,
  setInterior,
  setPaintColor,
  setTechnology,
  setWheels,
  addOrder,
  getCompletedOrders,
  orderBuilder,
} from "./database.js";

const paintColors = getPaintColors();
const interiors = getInteriors();
const technology = getTechnology();
const wheels = getWheels();

document.addEventListener("change", (event) => {
  if (event.target.localName === "select") {
    const clicked = event.target;
    let foundObject = {};
    if (clicked.name === "paintColor") {
      foundObject = paintColors.find((x) => x.name === clicked.value);
      setPaintColor(foundObject.id);
    }
    if (clicked.name === "interior") {
      foundObject = interiors.find((x) => x.name === clicked.value);
      setInterior(foundObject.id);
    }
    if (clicked.name === "technology") {
      foundObject = technology.find((x) => x.name === clicked.value);
      setTechnology(foundObject.id);
    }
    if (clicked.name === "wheels") {
      foundObject = wheels.find((x) => x.name === clicked.value);
      setWheels(foundObject.id);
    }
    console.log(orderBuilder);
  }
});

const makeOrderList = (currentOrder) => {
  //find paintColor Object
  const foundPaintColor = paintColors.find(
    (x) => x.id === currentOrder.paintId
  );
  //find interior object
  const foundInterior = interiors.find((x) => x.id === currentOrder.interiorId);
  //find technology object
  const foundTechnology = technology.find(
    (x) => x.id === currentOrder.technologyId
  );
  //find  wheels object
  const foundWheels = wheels.find((x) => x.id === currentOrder.wheelsId);
  return `<li>Order # ${currentOrder.id}  is a ${foundPaintColor.name} car with a ${foundInterior.name} interior, a ${foundTechnology.name} tech package, and ${foundWheels.name} wheels`;
};

export const renderOrders = () => {
  const orders = getCompletedOrders();
  let html = "<ul>";

  const orderList = orders.map(makeOrderList);
  html += orderList.join("");
  html += "</ul>";
  return html;
};

document.addEventListener("click", (event) => {
  if (event.target.id === "submitBtn") {
    addOrder();
  }
});
