type Pizza = {
  id?: number
  name: string;
  price: number;
};

type OrderStatus = "ordered" | "preparing" | "ready" | "completed";

type Order = {
  id: number;
  pizza: Pizza;
  status: OrderStatus;
};

let cash: number = 100.00;
let orderId: number = 0;
let pizzaId: number = 0;
const orderQueue: Order[] = [];

let menu: Pizza[] = [
  { id: pizzaId++, name: "Cheese", price: 10.00 },
  { id: pizzaId++, name: "Margherita", price: 11.00 },
  { id: pizzaId++, name: "Pepperoni", price: 13.00 },
  { id: pizzaId++, name: "Hawaiian", price: 15.00 },
  { id: pizzaId++, name: "Veggie", price: 13.00 },
];

// Adds a new pizza to the menu
// Require user to provide name and price, but not id
const addNewPizza = (pizzaObj: Omit<Pizza, "id">): Pizza => {
  const newPizza: Pizza = { id: pizzaId++, ...pizzaObj };
  menu.push(newPizza);
  return newPizza;
};

// Places an order for a pizza
const placeOrder = (pizzaName: string): Order | undefined => {
  const pizza = menu.find(pizza => pizza.name === pizzaName); // find pizza by name
  if (pizza) {
    cash += pizza.price; // add to cash register
    const newOrder: Order = { id: orderId++, pizza: pizza, status: "ordered" }; // create order object
    orderQueue.push(newOrder); // add order to queue
    return newOrder; // return order object
  }
  return;
};

const completeOrder = (orderId: number): Order | undefined => {
  const completedOrder = orderQueue.find(order => order.id === orderId)
  if (completedOrder) {
    completedOrder.status = "completed";
    return completedOrder;
  }
  return;
};

const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
  if (typeof identifier === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
  } else if (typeof identifier === "number") {
    return menu.find(pizza => pizza.id === identifier);
  } else {
    throw new TypeError("Parameter 'identifier' must be a string or number.");
  }
};

addNewPizza({ name: "Meat Lovers", price: 15.00 });
addNewPizza({ name: "Vegan", price: 14.00 });
addNewPizza({ name: "BBQ Chicken", price: 16.00 });

placeOrder("Cheese");
placeOrder("Margherita");
placeOrder("Vegan");

completeOrder(0);

console.log("getPizzaDetail('Cheese'):", getPizzaDetail("Cheese"));
console.log("getPizzaDetail(1):", getPizzaDetail(1));
console.log("getPizzaDetail('Pineapple'):", getPizzaDetail("Pineapple")); // undefined

console.log("menu:", menu);
console.log("cash:", cash);
console.log("orderQueue:", orderQueue);

// Generic addToArray function
const addToArray = <T> (array: T[], item: T): T[] => {
  return [...array, item];
}

let arr: number[] = addToArray<number>([1, 2, 3], 4); // [1, 2, 3, 4]
let arr2: string[] = addToArray<string>(["a", "b", "c"], "d"); // ["a", "b", "c", "d"]
console.log(arr);
console.log(arr2);