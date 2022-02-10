const form = document.querySelector("#car");
const details = document.querySelectorAll('input[name="details"]');

const button = document.querySelector("#submit");

class Car {
  constructor(plate, maker, model, owner, price, color) {
    this.plate = plate;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const carArray = [];

const addCar = (event) => {
  event.preventDefault(); // REALLY IMPORTANT WHEN USING SUBMIT
  const plate = document.querySelector("#plate").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;

  let newCar = new Car(plate, maker, model, owner, price, color);

  carArray.push(newCar);
  console.table(carArray);

  console.log("form was clicked.", plate, maker, model, owner, +price, color);
};

form.addEventListener("submit", addCar);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log();
// });
