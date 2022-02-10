const form = document.querySelector("#car");
let resultTable = document.querySelector(".result");

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

const carArray = [{ licence: "", maker: "", model: "", owner: "", price: "", color: "" }];

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
  makeTable();
};

const makeTable = () => {
  let result = "<table>";
  result += "<tr>";
  for (const key in carArray[0]) {
    result += "<th>" + key + "</th>";
  }
  result += "</tr>";
  for (let i = 1; i < carArray.length; i++) {
    result += "<tr>";
    for (const key in carArray[i]) {
      result += "<td>" + carArray[i][key] + "</td>";
    }
    result += "</tr>";
  }
  result += "</table>";
  resultTable.innerHTML = result;
  console.table(result);
};

makeTable();

form.addEventListener("submit", addCar);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log();
// });
