const car = {
  mark: "Dodge RAM",
  year: "2020",
  owner: "Toni Nissinen",
  city: "Espoo",
  about() {
    return `${this.mark} is owned by ${this.owner}`;
  },
};

console.log(car);

car.color = "Metal Grey";

delete car.city;

console.log(car);

console.log(car.about());

const car2 = new Object();

car2.mark = "Dodge RAM";
car2.year = "2020";
car2.owner = "Toni Nissinen";
car2.city = "Espoo";

console.log(car2);

delete car2.city;

console.log(car2);
