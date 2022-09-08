const paintColors = [
  {
    id: 1,
    name: "Silver",
    price: 100.0,
    category: "paintColor",
  },
  {
    id: 2,
    name: "Midnight Black",
    price: 200.0,
    category: "paintColor",
  },
  {
    id: 3,
    name: "Firebrick Red",
    price: 250.0,
    category: "paintColor",
  },
  {
    id: 4,
    name: "Spring Green",
    price: 250.0,
    category: "paintColor",
  },
];
const interiors = [
  {
    id: 1,
    name: "Beige Fabric",
    price: 50.0,
    category: "interior",
  },
  {
    id: 2,
    name: "Charcoal Fabric",
    price: 100.0,
    category: "interior",
  },
  {
    id: 3,
    name: "White Leather",
    price: 1000.0,
    category: "interior",
  },
  {
    id: 4,
    name: "Black Leather",
    price: 1250.0,
    category: "interior",
  },
];
const technology = [
  {
    id: 1,
    name: "Basic Package",
    price: 51.0,
    category: "technology",
  },
  {
    id: 2,
    name: "Navigation Package",
    price: 101.0,
    category: "technology",
  },
  {
    id: 3,
    name: "Visibility Package",
    price: 1001.0,
    category: "technology",
  },
  {
    id: 4,
    name: "Ultra Package",
    price: 1251.0,
    category: "technology",
  },
];
const wheels = [
  {
    id: 1,
    name: "17-inch Pair Radial",
    price: 52.0,
    category: "wheels",
  },
  {
    id: 2,
    name: "17-inch Pair Radial Black",
    price: 102.0,
    category: "wheels",
  },
  {
    id: 3,
    name: "18-inch Pair Spoke Silver",
    price: 1002.0,
    category: "wheels",
  },
  {
    id: 4,
    name: "18-inch Pair Spoke Black",
    price: 1252.0,
    category: "wheels",
  },
];

const orderBuilder = {};

const completedOrders = [];

//export getters
export const getPaintColors = () => {
  const paintColorsCopy = paintColors.map((color) => ({ ...color }));
  return paintColorsCopy;
};
export const getInteriors = () => {
  const interiorsCopy = interiors.map((interior) => ({ ...interior }));
  return interiorsCopy;
};

export const getTechnology = () => {
  const technologyCopy = technology.map((tech) => ({ ...tech }));
  return technologyCopy;
};
export const getWheels = () => {
  const wheelsCopy = wheels.map((wheel) => ({ ...wheel }));
  return wheelsCopy;
};
export const getCompletedOrders = () => {
  const completedOrdersCopy = completedOrders.map((order) => ({ ...order }));
  return completedOrdersCopy;
};

//export setters
const addNewId = () => {
  let getHighestId = 0;
  if (completedOrders.length > 0) {
    getHighestId = completedOrders.sort((a, b) => {
      b.id - a.id;
    })[0].id;
  }
  return getHighestId + 1;
};

export const setPaintColor = (id) => {
  orderBuilder.paintId = id;
};

export const setInterior = (id) => {
  orderBuilder.interiorId = id;
};

export const setTechnology = (id) => {
  orderBuilder.technologyId = id;
};

export const setWheels = (id) => {
  orderBuilder.wheelsId = id;
};

export const addOrder = () => {
  const newOrder = { ...orderBuilder };
  newOrder.id = addNewId();
  newOrder.timestamp = Date.now();
  completedOrders.push(newOrder);
  orderBuilder = {};
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
