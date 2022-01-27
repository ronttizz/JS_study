const calculate = () => {
  let price = Number(document.querySelector("#price").value);
  let money = Number(document.querySelector("#money").value);
  let answer = document.querySelector("#answer");

  let amount = Math.floor(money / price);

  let text;

  amount >= 10
    ? (text = "good, now you can escape")
    : (text = "ups, you have to stay here");

  answer.textContent = text;
};
